import {
  getOrderData,
  getOrdersList,
} from "@/redux/async-actions/async.actions";
import { getAuthData } from "@/redux/auth/auth.selector";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiRupee } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

const OrderDetails = () => {
  const auth = useSelector(getAuthData);
  const [ordersList, setOrdersList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.authLoaded && auth.currentUser) {
      dispatch(getOrdersList())
        .unwrap()
        .then((response) => {
          // console.log(response.data.orders);
          if (response.status == 200) {
            setOrdersList(response.data.orders);
          }
        });
    }
  }, [auth, dispatch]);

  return (
    <>
      <p className="text-gray-700 font-semibold">Orders</p>
      {ordersList &&
        ordersList.map((order) => {
          return (
            <div
              className="w-full mt-6 bg-white rounded pb-6"
              key={order.sell_invoice_ref_no}
            >
              <div className="flex justify-between items-center p-4 mb-6 border-b flex-col md:flex-row">
                <div className="w-full flex gap-1 md:justify-start justify-between items-center">
                  <p className="text-gray-600 font-semibold">Order</p>
                  <p className="text-gray-600 font-semibold">
                    #{order.sell_invoice_ref_no}
                  </p>
                </div>
                <div className=" w-full flex flex-row md:flex-col justify-between md:justify-center items-center">
                  <p className="text-gray-600 font-semibold">Order Date</p>
                  <p className="text-gray-400">2023-05-13 21:31:26</p>
                </div>
                <div className=" w-full flex flex-row md:flex-col justify-between md:justify-end items-center md:items-end">
                  <p className="text-gray-600 font-semibold">Total</p>
                  <p className="text-gray-600 font-semibold flex gap-1 items-center">
                    <BiRupee />
                    3000
                  </p>
                </div>
              </div>
              <div className="flex justify-start md:justify-between items-center px-4 flex-col md:flex-row">
                <div className="flex gap-2 items-center justify-start">
                  <div className="w-20 h-20 relative border rounded overflow-hidden p-2">
                    <Image
                      src={order.product_icon}
                      alt={order.product_title}
                      fill
                      priority={false}
                      sizes="30vw"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <p className="text-gray-600">{order.product_title}</p>
                </div>
                <div className="pr-6 flex justify-between md:justify-center md:flex-col items-center flex-row w-full md:w-auto">
                  <p>Status</p>
                  <p className="text-rose-600 font-semibold"> Cancelled</p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default OrderDetails;
