import AuthAside from "@/components/auth-aside";
import Breadcrumd from "@/components/breadcrumd";
import OrderDetails from "@/components/ordersdetail/OrderDetails";
import React from "react";

const Orders = () => {
  return (
    <>
      <Breadcrumd pageName={"Order"} />
      <div className="container my-14">
        <div className="flex gap-4 items-start relative">
          <div className="w-[375px] flex-shrink-0 p-4 border rounded">
            <AuthAside />
          </div>
          <div className="w-[calc(100%-375px)] p-6 bg-gray-50 rounded pb-20 relative">
            <OrderDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
