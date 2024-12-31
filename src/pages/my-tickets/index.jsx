import AuthAside from "@/components/auth-aside";
import Breadcrumd from "@/components/breadcrumd";
import React from "react";

const MyTickets = () => {
  return (
    <>
      <Breadcrumd pageName="My Tickets" />
      <div className="container my-14">
        <div className="flex w-full gap-5">
          <div className="w-[320px] border border-gray-400 rounded pt-8 pb-1">
            <AuthAside />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTickets;
