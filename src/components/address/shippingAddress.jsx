import { getAuthData } from "@/redux/auth/auth.selector";
import { profileActions } from "@/redux/profile/profile.reducer";
import { getDeliveryAddress, getparty } from "@/redux/profile/profile.selector";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BillingAddress from "./billingAddress";
import { motion, AnimatePresence } from "motion/react";

const ShippingAddress = () => {
  const auth = useSelector(getAuthData);
  const deliveryAddress = useSelector(getDeliveryAddress);
  const party = useSelector(getparty);
  const dispatch = useDispatch();
  const [checkboxActive, setCheckBoxActive] = useState(false);
  useEffect(() => {
    if (auth.authLoaded && auth.currentUser) {
      dispatch(profileActions.getProfileFullDetails());
    }
  }, [auth]);

  const handlerBillingCheckbox = (e) => {
    setCheckBoxActive(!checkboxActive);
  };

  return (
    <>
      <div className="flex gap-2 items-center">
        <Image
          src={"/img/address__icon.svg"}
          width={40}
          height={40}
          alt="location-icon"
          priority={false}
          sizes="40vw"
        />
        <p className="text-gray-800 text-xl">Shipping Address</p>
      </div>
      <motion.form
        className=" border p-4 border-gray-100"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        <div className="form-group">
          <div className="form-input">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              required
              defaultValue={party?.party_name}
            />
          </div>
          <div className="form-input">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              defaultValue={party?.party_email}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-input">
            <label htmlFor="hNo">House No.</label>
            <input
              type="text"
              className="form-control"
              id="hNo"
              defaultValue={deliveryAddress?.party_house_no}
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="street">Street Name</label>
            <input
              type="text"
              className="form-control"
              id="street"
              defaultValue={deliveryAddress?.party_street_no}
              required
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
              defaultValue={deliveryAddress?.party_locality}
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              defaultValue={deliveryAddress?.party_city}
              required
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
              defaultValue={deliveryAddress?.party_state}
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="pincode">Postal Code</label>
            <input
              type="text"
              className="form-control"
              defaultValue={deliveryAddress?.party_pincode}
              id="pincode"
              required
            />
          </div>
        </div>
        <div className="flex gap-2 pl-6 py-3">
          <input
            type="checkbox"
            id="billingAddress"
            defaultChecked
            className="w-5 h-5 border border-gray-400"
            onChange={handlerBillingCheckbox}
          />
          <label htmlFor="billingAddress">
            Billing address is same as the Shipping address
          </label>
        </div>
      </motion.form>
      <AnimatePresence>{checkboxActive && <BillingAddress />}</AnimatePresence>
    </>
  );
};

export default ShippingAddress;
