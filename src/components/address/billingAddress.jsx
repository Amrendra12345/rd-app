import { getAuthData } from "@/redux/auth/auth.selector";
import { profileActions } from "@/redux/profile/profile.reducer";
import { getparty } from "@/redux/profile/profile.selector";
import { updateBillingAddress } from "@/servers/lib-reown/lib";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const BillingAddress = () => {
  const auth = useSelector(getAuthData);
  const party = useSelector(getparty);
  const dispatch = useDispatch();
  const [isSuccess, SetIsSuccess] = useState(false);
  const [isError, SetIsError] = useState(false);
  const [address, setaddress] = useState({
    house_no: "",
    street: "",
    locality: "",
    city: "",
    state: "",
    pincode: "",
  });
  useEffect(() => {
    if (auth.authLoaded && auth.currentUser) {
      dispatch(profileActions.getProfileFullDetails());
    }
  }, [auth]);
  console.log(party);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await updateBillingAddress(auth.token, "Office", address);
      if (res.status === 200) {
        SetIsSuccess("Address updated successfully.");
      } else {
        SetIsError("Failed to update address.");
      }
    } catch (error) {
      SetIsError("Server Error");
    }
  };
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
        <p className="text-gray-700 font-semibold">Shipping details</p>
      </div>
      <form className="py-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-input">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              className="form-control bg-gray-50"
              id="fullname"
              value={party?.party_name}
              readOnly
            />
          </div>
          <div className="form-input">
            <label htmlFor="phone">Email Address</label>
            <input
              type="text"
              className="form-control bg-gray-50"
              id="phone"
              value={party?.party_email}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-input">
            <label htmlFor="house_no">House No.</label>
            <input
              type="text"
              className="form-control"
              id="house_no"
              name="house_no"
              onChange={(e) =>
                setaddress({ ...address, house_no: e.target.value })
              }
            />
          </div>
          <div className="form-input">
            <label htmlFor="street">Street Name</label>
            <input
              type="text"
              className="form-control"
              id="street"
              name="street"
              onChange={(e) =>
                setaddress({ ...address, street: e.target.value })
              }
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
              name="locality"
              onChange={(e) =>
                setaddress({ ...address, locality: e.target.value })
              }
            />
          </div>
          <div className="form-input">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              onChange={(e) => setaddress({ ...address, city: e.target.value })}
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
              name="state"
              onChange={(e) =>
                setaddress({ ...address, state: e.target.value })
              }
            />
          </div>
          <div className="form-input">
            <label htmlFor="pincode">Postal Code</label>
            <input
              type="text"
              className="form-control"
              id="pincode"
              name="pincode"
              onChange={(e) =>
                setaddress({ ...address, pincode: e.target.value })
              }
            />
          </div>
        </div>
        <div className="form-group">
          <div className="flex items-center justify-start gap-2">
            <input
              type="checkbox"
              className="w-4 h-4"
              id="sameAddress"
              name="sameAddress"
            />
            <label className="form-check-label" htmlFor="sameAddress">
              Same as billing address
            </label>
          </div>
        </div>
        {isError && (
          <p className="text-red-600 text-sm font-semibold text-center">
            {isError}
          </p>
        )}
        {isSuccess && (
          <p className="text-green-600 text-sm font-semibold text-center">
            {isSuccess}
          </p>
        )}
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-teal-700 py-3 px-12 rounded hover:bg-teal-600 text-white"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillingAddress;
