import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "@/redux/auth/auth.reducer";
import { cartReducer } from "@/redux/cart/cart.reducer";
import { profileReducer } from "@/redux/profile/profile.reducer";
import { wishlistReducer } from "./wishlist/wishlist.reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  profile: profileReducer,
  wishlist: wishlistReducer,
});
