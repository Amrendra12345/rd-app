import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData } from "@/redux/auth/auth.selector";
import { getCartData } from "@/redux/cart/cart.selector";
import Image from "next/image";
import {
  getBillingAddress,
  getDeliveryAddress,
  getparty,
} from "@/redux/profile/profile.selector";
import { FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { FaIndianRupeeSign, FaRupeeSign } from "react-icons/fa6";
import ApplyCoupon from "./applyCoupon";
import PriceDetails from "./priceDetails";
import { cartActions } from "@/redux/cart/cart.reducer";

const CartDetails = (props) => {
  const auth = useSelector(getAuthData);
  const cart = useSelector(getCartData);
  const [isWaite, setIsWaite] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (auth.authLoaded) {
      if (!auth || !auth.currentUser) {
        router.push("/");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, router]);

  const handlerRemoveItem = (id) => {
    setIsWaite(true);
    dispatch(cartActions.removeCart(id));
    setIsWaite(false);
  };

  return (
    <>
      <div className="container mt-10 mb-10">
        <div className="flex justify-start items-start gap-4">
          <div className="flex-shrink-0 w-[calc(100%-400px)]  bg-white px-4">
            <div className="flex justify-between items-center border-b py-2 px-3 mb-4">
              <p className="text-sm font-bold text-gray-700 capitalize">
                My cart:
              </p>
              <p className="text-sm font-bold text-gray-700 pr-4">
                {cart.cartCount}{" "}
                <span className="text-gray-500 font-semibold">Item</span>
              </p>
            </div>
            {cart.cartItemsData.map((cartItem, i) => {
              return (
                <>
                  {isWaite ? (
                    <div className="flex justify-center items-center bg-black/30 h-10 py-2 rounded mb-4">
                      <p className="text-white">Please waite...</p>
                    </div>
                  ) : (
                    <div
                      key={cartItem.product_sku_id}
                      className="mt-2 flex justify-between items-center border-b last:border-0 mb-2 py-1 px-2"
                    >
                      <div className="flex justify-start items-center gap-3 flex-1">
                        <div className="w-24 h-24 bg-gray-100 rounded relative flex justify-center items-center border">
                          <Image
                            src={cartItem.product_icon}
                            alt="img"
                            sizes="20vw"
                            fill
                            style={{
                              objectFit: "contain",
                              mixBlendMode: "multiply",
                            }}
                            className="img-fluid p-2"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-gray-700 font-bold">
                            {cartItem.product_title.split("|")[0]}
                          </p>
                          <p className="text-sm text-gray-500 font-semibold">
                            {cartItem.product_title.split("|")[1]}
                          </p>
                          <p className="text-sm text-gray-500 font-semibold">
                            {cartItem.product_title.split("|")[2]}
                          </p>
                          <p className="text-sm text-gray-500 font-semibold">
                            {cartItem.product_title.split("|")[3]}
                          </p>
                          <p className="text-sm text-gray-500 font-semibold">
                            {cartItem.hdd}
                          </p>
                          <p className="text-sm text-gray-500 font-semibold">
                            {cartItem.ram}
                          </p>
                        </div>
                      </div>
                      <div className="flex-1 py-4 flex-shrink-0  flex justify-center flex-col items-center">
                        <div className="mb-2 flex border border-gray-300 rounded overflow-auto">
                          <span className="w-10 h-10 bg-gray-100 p-2 flex justify-center items-center">
                            <FaMinus className="text-gray-400 text-sm" />
                          </span>
                          <span className="w-14 h-10  p-2  flex justify-center items-center font-bold text-sm">
                            1
                          </span>
                          <span className="w-10 h-10  p-2 bg-gray-100 flex justify-center items-center">
                            <FaPlus className="text-gray-400 text-sm" />
                          </span>
                        </div>
                        <FaRegTrashAlt
                          className="cursor-pointer text-red-600 text-xl mt-2"
                          onClick={() =>
                            handlerRemoveItem(cartItem.product_sku_id)
                          }
                        />
                      </div>
                      <div className="flex justify-end items-center flex-1 gap-1 pr-4">
                        <FaIndianRupeeSign className="text-gray-400 text-[12px]" />
                        <p className="text-gray-700 font-bold text-sm">
                          {cartItem.amount}
                        </p>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
          <div className="w-full">
            <ApplyCoupon />
            <PriceDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
