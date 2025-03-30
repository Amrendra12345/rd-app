import Breadcrumd from "@/components/breadcrumd";
import React from "react";
import { BsCurrencyRupee, BsCheckCircleFill } from "react-icons/bs";

const OrderComplete = () => {
  return (
    <>
      <Breadcrumd pageName="Order-complete" />
      <div className="container mt-10 mb-10">
        <div className="flex justify-between w-full items-center py-4 border-b">
          <div className="px-4">
            <p className="text-sm font-medium text-gray-700">Order no. 1724</p>
            <p className="text-sm font-medium text-gray-500">
              23th jan 2024 3:04 pm
            </p>
          </div>
          <div className="px-8">
            <p className="text-sm font-medium text-gray-700">Order total</p>
            <p className="text-sm font-medium text-gray-500 flex justify-center items-center gap-1">
              <span>
                <BsCurrencyRupee />
              </span>
              100
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full items-center py-8 border-b flex-col">
          <BsCheckCircleFill className="text-4xl text-green-700" />
          <p className="text-center text-sm font-semibold text-gray-600 py-1">
            Thank you for order
          </p>
          <p className="text-center text-sm font-medium text-gray-500 py-2">
            Your order will ship within few hours
          </p>
          <button className="rounded bg-teal-600 py-2 px-8 mt-2 text-white transition-all duration-500 hover:bg-teal-700">
            Tracking details
          </button>
        </div>
        <div className="flex justify-between w-full items-center py-8 border-b ">
          <div className="px-4 flex-1 border-r">
            <p className="text-sm font-semibold text-gray-700">
              {" "}
              Delivery address
            </p>
          </div>
          <div className="px-4 flex-1">
            <p className="text-sm font-semibold text-gray-700">
              Payment summary
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderComplete;
