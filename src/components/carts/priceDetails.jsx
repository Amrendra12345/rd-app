import { getCartData } from "@/redux/cart/cart.selector";
import Link from "next/link";
import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { useSelector } from "react-redux";

const PriceDetails = (props) => {
  const cart = useSelector(getCartData);

  return (
    <>
      <div className="bg-gray-50 rounded border border-gray-200 w-full pt-4 mt-4">
        <div className="flex border-b pb-2 px-4">
          <p className="text-gray-800 font-semibold">Price Details</p>
        </div>
        <div className="flex justify-between items-center px-4 pt-3">
          <p className="text-gray-500 text-sm">Total</p>
          <p className="flex justify-end items-center text-gray-600 gap-0">
            <FaRupeeSign className="text-[12px] mt-[-1px] text-gray-500" />{" "}
            <span className="font-semibold text-sm">{cart.cartTotal}</span>
          </p>
        </div>
        <div className="flex justify-between items-center px-4 pt-3">
          <p className="text-gray-500 text-sm">Coupon Discount</p>
          <p className="flex justify-end items-center text-gray-600 gap-0 text-sm">
            <FaRupeeSign className="text-[12px] mt-[-1px] text-gray-500" />
            <span className="font-bold">0</span>
          </p>
        </div>
        <div className="flex justify-between items-center px-4 pt-3 pb-4">
          <p className="text-gray-500 text-sm">Delivery Charges</p>
          <p className="flex justify-end items-center text-gray-600 gap-1">
            <span className="font-semibold text-sm">Free</span>
          </p>
        </div>
        <div className="flex justify-between items-center px-4 pt-3 border-t">
          <p className="text-gray-800 font-bold text-sm">Total</p>
          <p className="flex justify-end items-center text-gray-600 gap-0">
            <FaRupeeSign className="text-[12px] mt-[-1px] text-gray-500" />
            <span className="font-semibold text-sm text-gray-800">
              {cart.cartTotal}
            </span>
          </p>
        </div>
        <div className="flex justify-center items-center border-t mt-4 pt-3">
          <Link
            href={"/checkout"}
            className="bg-teal-700 rounded py-3 px-10 uppercase text-white transition-all duration-500 hover:bg-teal-800 block w-full text-center"
          >
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

export default PriceDetails;
