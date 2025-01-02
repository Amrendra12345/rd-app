import AuthAside from "@/components/auth-aside";
import Breadcrumd from "@/components/breadcrumd";
import { getAuthData } from "@/redux/auth/auth.selector";
import Image from "next/image";
import { useState } from "react";
import { TfiUser } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import axios from "axios";

const Profile = () => {
  const auth = useSelector(getAuthData);
  const fullname = auth.currentUser?.fullname;
  let fname;
  let lastname;
  if (typeof fullname === "string") {
    fname = fullname.split(" ")[0];
    lastname = fullname.split(" ")[fullname.split(" ").length - 1];
  }
  const [persInfo, setPersInfo] = useState({
    fname: "",
    lastname: "",
  });
  const updatedata = async () => {
    console.log("Bearer " + auth.token);
  };
  return (
    <>
      <Breadcrumd pageName="Profile" />
      <div className="container my-14">
        <button onClick={updatedata}>Update</button>
        <div className="flex w-full gap-5">
          <div className="w-[375px] border border-gray-400 rounded pt-8 pb-1 flex-shrink-0">
            <AuthAside />
          </div>
          <div className="w-full border py-6">
            <p className="text-xl font-semibold text-gray-700  border-b pb-4 px-8">
              Personal Information
            </p>
            <motion.form
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <div className="form-group mt-4">
                <div className="form-input">
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    required
                    name="fname"
                    defaultValue={fname}
                    onChange={(e) =>
                      setPersInfo({ ...persInfo, fname: e.target.value })
                    }
                  />
                </div>
                <div className="form-input">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    defaultValue={lastname}
                    name="lname"
                    onChange={(e) =>
                      setPersInfo({ ...persInfo, lname: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-input">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    defaultValue={auth.currentUser?.email}
                    required
                    onChange={(e) =>
                      setPersInfo({ ...persInfo, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-input">
                  <label htmlFor="lname">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    defaultValue={auth.currentUser?.mobile}
                    required
                    name="mobileNo"
                    onChange={(e) =>
                      setPersInfo({ ...persInfo, mobileNo: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-input flex gap-4">
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="gender"
                      defaultValue="male"
                      checked={auth.currentUser?.gender === "male"}
                      id="male"
                    />
                    <label
                      htmlFor="male"
                      className="text-gray-600 font-semibold"
                    >
                      Male
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="gender"
                      defaultValue="female"
                      checked={auth.currentUser?.gender === "female"}
                      id="female"
                    />
                    <label
                      htmlFor="female"
                      className="text-gray-600 font-semibold"
                    >
                      Female
                    </label>
                  </div>
                </div>
                <div className="form-input">
                  <label htmlFor="lname">Whatsapp Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    defaultValue={auth.currentUser?.whatsapp}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <button
                  type="button"
                  className="bg-teal-700 hover:bg-teal-800 py-3 px-8 rounded text-white"
                >
                  Update
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
