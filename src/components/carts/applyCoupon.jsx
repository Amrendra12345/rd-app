import React from "react";

const ApplyCoupon = () => {
  return (
    <>
      <div className="bg-gray-50 rounded border border-gray-200 w-full p-4">
        <p className="text-gray-700 mb-1">Have a Coupon Code ?</p>
        <div className="flex items-start">
          <input
            type="text"
            className="form-control"
            placeholder="Coupon Code"
          />
          <button
            type="button"
            className="bg-teal-600 py-[10px]  px-5 text-white rounded-r"
          >
            {" "}
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default ApplyCoupon;
