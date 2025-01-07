import { getAuthData } from "@/redux/auth/auth.selector";
import { getCartData } from "@/redux/cart/cart.selector";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaPlus, FaRubleSign, FaRupeeSign } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { cartActions } from "@/redux/cart/cart.reducer";
const CartSidebar = (props) => {
  const auth = useSelector(getAuthData);
  const cart = useSelector(getCartData);
  const dispatch = useDispatch();

  const handleCartCloseClick = () => {
    props.cartClose();
  };
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  //removeCart;
  const removeCartItems = (e, id) => {
    dispatch(cartActions.removeCart(id));
  };
  return (
    <div className="fixed w-full h-full bg-black/40 top-0 bottom-0 left-0 right-0 z-[999]">
      <div className="w-[400px] bg-white h-dvh absolute right-0 top-0 bottom-0 shadow-md flex flex-col">
        <div className="flex justify-between items-center px-4 border-b py-2">
          <p>Cart</p>
          <div
            className="w-7 h-7 rounded flex justify-center items-center transition-all duration-300 bg-gray-100 cursor-pointer hover:bg-red-600 hover:text-white"
            onClick={handleCartCloseClick}
          >
            <IoClose />
          </div>
        </div>
        <div className="sidebarCart">
          <div className="sidebarCart_content">
            {cart.cartItemsData.map((cartItem, i) => {
              return (
                <div
                  className="border-b flex gap-2 items-center py-2 border-gray-400 px-2"
                  key={cartItem.product_sku_id}
                >
                  <div className="w-[70%] flex gap-2 items-center overflow-x-hidden">
                    <div className="w-[80px] h-[100px] border relative bg-gray-100 flex-shrink-0">
                      <Image
                        src={cartItem.product_icon}
                        width={60}
                        height={40}
                        alt="img"
                        className="img-fluid"
                        style={{ mixBlendMode: "multiply " }}
                      />
                    </div>
                    <div className="sidebarCart_para">
                      <p className="text-sm font-bold text-gray-700">
                        {cartItem.product_title.split("|")[0]}
                      </p>
                      <p className="text-sm font-semibold text-gray-500">
                        {cartItem.product_title.split("|")[1]}
                      </p>
                      <p className="text-sm font-semibold text-gray-500">
                        {cartItem.product_title.split("|")[3]}
                      </p>
                      <p className="text-sm font-semibold text-gray-500">
                        {cartItem.hdd}
                      </p>
                      <p className="text-sm font-semibold text-gray-500">
                        {cartItem.ram}
                      </p>
                      <p className="text-sm font-bold text-gray-800 flex gap-0">
                        <span className="text-[12px] mt-[4px]">
                          <FaRupeeSign />
                        </span>
                        {cartItem.amount}
                      </p>
                    </div>
                  </div>
                  <div className="w-1/4 flex-shrink-0 py-2 flex justify-center items-center flex-col">
                    <div className="mb-2 flex">
                      <span className="w-6 h-6 border p-[6px]  flex justify-center items-center">
                        <FaMinus />
                      </span>
                      <span className="w-6 h-6 border p-[6px] bg-gray-200 flex justify-center items-center font-bold text-sm">
                        1
                      </span>
                      <span className="w-6 h-6 border p-[6px]  flex justify-center items-center">
                        <FaPlus />{" "}
                      </span>
                    </div>
                    <div
                      className="flex justify-center text-red-400"
                      onClick={(e) =>
                        removeCartItems(e, cartItem.product_sku_id)
                      }
                    >
                      <FaRegTrashAlt className="cursor-pointer" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-auto mb-4 px-4">
          <div className="mb-4 flex text-sm  justify-between items-center">
            <p className="font-bold text-gray-800">Total</p>
            <p className="flex ">
              <FaRupeeSign className="font-bold text-gray-800 text-[12px] mt-1" />
              {cart.cartTotal}
            </p>
          </div>
          <button
            type="button"
            className="bg-teal-600 py-3 px-10 w-full rounded text-white uppercase mb-3"
          >
            Checkout
          </button>
          <button
            type="button"
            className="bg-black py-3 px-10 w-full rounded text-white uppercase"
          >
            View cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
