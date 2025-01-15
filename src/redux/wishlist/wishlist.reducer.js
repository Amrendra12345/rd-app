import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authActions } from "@/redux/auth/auth.reducer";
import { checkAuthData, refreshAndRepeat } from "@/servers/lib-reown/helpers";
import { getwishlistData, updateWishlist } from "@/servers/lib-reown/lib";

const INITIAL_STATE = {
  wishlistItems: [],
  addingToWishlist: false,
  wishlistItemsData: [],
  wishlistCount: 0,
};

const addToWishlist = createAsyncThunk(
  "addToWishlist",
  async (payload, thunkApi) => {
    if (!checkAuthData(thunkApi, authActions.openSidebar)) {
      thunkApi.dispatch(wishlistActions.setPendingAction(true));
      return null;
    }

    let resp = await updateWishlist(
      thunkApi.getState().auth.token ?? "",
      payload.action,
      payload.product_sku_id
    );
    if (resp.status == 200) {
      // update wishlist
      const wishlistItemsDetails = resp.data.wishlist.wishlist;
      thunkApi.dispatch(wishlistActions.setPendingAction(false));
      const wishlistCount = resp.data.wishlist.count;
      const wishlistItemsData = resp.data.wishlist.wishlist;
      let finalItems = [];
      wishlistItemsDetails.forEach(function (element) {
        finalItems.push(element.product_sku_id);
      });
      thunkApi.dispatch(
        wishlistActions.syncItems({
          finalItems,
          wishlistItemsDetails,
          wishlistItemsData,
          wishlistCount,
        })
      );
    } else if (resp.status == 401) {
      const repeat_res = await refreshAndRepeat(
        thunkApi,
        resp,
        payload,
        wishlistActions.addToWishlist,
        authActions.refreshTokens,
        authActions.logout,
        authActions.openSidebar
      );
      if (!repeat_res) return repeat_res;
    }
    return resp;
  }
);

const syncWishlistData = createAsyncThunk(
  "syncWishlistData",
  async (payload, thunkApi) => {
    const resp = await getwishlistData(thunkApi.getState().auth.token ?? "");
    let changes = false;
    if (resp.status == 200 && resp.data.wishlist) {
      const wishlistItemsDetails = resp.data.wishlist.wishlist;
      const wishlistCount = resp.data.wishlist.count;
      const wishlistItemsData = resp.data.wishlist.wishlist;
      const existing = thunkApi.getState().wishlist.wishlistItems;
      let finalItems = [];
      wishlistItemsDetails.forEach(function (element) {
        if (!existing.includes(element.product_sku_id)) changes = true;
        finalItems.push(element.product_sku_id);
      });
      if (finalItems.length != existing.length || changes) {
        thunkApi.dispatch(
          wishlistActions.syncItems({
            finalItems,
            wishlistItemsDetails,
            wishlistCount,
            wishlistItemsData,
          })
        );
      }
    } else {
      thunkApi.dispatch(wishlistActions.clearItems());
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: INITIAL_STATE,
  reducers: {
    syncItems(state, action) {
      state.wishlistItems = action.payload.finalItems;
      state.wishlistItemsData = action.payload.wishlistItemsData;
      state.wishlistCount = action.payload.wishlistCount;
    },
    clearItems(state, action) {
      state.wishlistItems = [];
      state.wishlistItemsData = [];
    },
    removeItem(state, action) {
      let items = state.wishlistItems;
      items = items.filter((item) => item !== action.payload);
      console.log(items);
    },
    addItem(state, action) {
      let items = state.wishlistItems;
      items.push(action.payload);
      state.wishlistItems = items;
    },
    setPendingAction(state, action) {
      state.addingToWishlist = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("auth/logout", (state, action) => {
      state.wishlistItems = [];
      state.wishlistItemsData = [];
      state.wishlistCount = 0;
    });
  },
});

export const wishlistReducer = wishlistSlice.reducer;
export const wishlistActions = {
  ...wishlistSlice.actions,
  addToWishlist,
  syncWishlistData,
};
