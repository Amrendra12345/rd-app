import { getAuthData } from "@/redux/auth/auth.selector";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const BillingAddress = () => {
  const auth = useSelector(getAuthData);
  return (
    <div className="border py-4 rounded mb-10">
      <div className="flex justify-start items-center gap-2 border-b px-4 pb-4">
        <div className="w-9 h-9 relative">
          <Image
            src={"/img/address__icon.svg"}
            fill
            alt="location-icon"
            className="img-fluid object-contain"
            priority={false}
            sizes="20vw"
          />
        </div>
        <p className="text-gray-700 font-semibold">Billing Address</p>
      </div>
      <form className="py-4">
        <div className="form-group">
          <div className="form-input">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" className="form-control" id="fullname" />
          </div>
          <div className="form-input">
            <label htmlFor="phone">Email Address</label>
            <input type="text" className="form-control" id="phone" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-input">
            <label htmlFor="house_no">House No.</label>
            <input type="text" className="form-control" id="house_no" />
          </div>
          <div className="form-input">
            <label htmlFor="street">Street Name</label>
            <input type="text" className="form-control" id="street" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-input">
            <label htmlFor="locality">Locality</label>
            <input type="text" className="form-control" id="locality" />
          </div>
          <div className="form-input">
            <label htmlFor="city">City</label>
            <input type="text" className="form-control" id="city" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-input">
            <label htmlFor="state">State</label>
            <input type="text" className="form-control" id="state" />
          </div>
          <div className="form-input">
            <label htmlFor="pincode">Postal Code</label>
            <input type="text" className="form-control" id="pincode" />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-teal-700 py-3 px-12 rounded hover:bg-teal-600 text-white">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillingAddress;
