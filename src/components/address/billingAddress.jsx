import { getAuthData } from "@/redux/auth/auth.selector";
import { profileActions } from "@/redux/profile/profile.reducer";
import { getBillingAddress } from "@/redux/profile/profile.selector";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "motion/react";

const BillingAddress = () => {
  const auth = useSelector(getAuthData);
  const billingAddress = useSelector(getBillingAddress);
  const dispatch = useDispatch();
  useEffect(() => {
    if (auth.authLoaded && auth.currentUser) {
      dispatch(profileActions.getProfileFullDetails());
    }
  }, [auth]);
  // console.log(billingAddress);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex gap-2 items-center">
        <Image
          src={"/img/address__icon.svg"}
          width={40}
          height={40}
          alt="location-icon"
          priority={false}
          sizes="40vw"
        />
        <p className="text-gray-800 text-xl">Billing Address</p>
      </div>
      <form className=" border p-4 border-gray-100">
        <div className="form-group">
          <div className="form-input">
            <label htmlFor="hNo">House No.</label>
            <input
              type="text"
              className="form-control"
              id="hNo"
              required
              defaultValue={billingAddress?.party_house_no}
            />
          </div>
          <div className="form-input">
            <label htmlFor="street">Street Name</label>
            <input
              type="text"
              className="form-control"
              id="street"
              required
              defaultValue={billingAddress?.party_street_no}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-input">
            <label htmlFor="locality">Locality</label>
            <input
              type="text"
              className="form-control"
              id="locality"
              defaultValue={billingAddress?.party_locality}
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              required
              defaultValue={billingAddress?.party_city}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-input">
            <label htmlFor="state">State</label>
            <input
              type="text"
              className="form-control"
              id="state"
              required
              defaultValue={billingAddress?.party_state}
            />
          </div>
          <div className="form-input">
            <label htmlFor="pincode">Postal Code</label>
            <input
              type="text"
              className="form-control"
              id="pincode"
              required
              defaultValue={billingAddress?.party_pincode}
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-teal-700 py-3 px-12 rounded hover:bg-teal-600 text-white">
            Update
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default BillingAddress;
