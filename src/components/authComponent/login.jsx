import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "motion/react";
import { getAuthData } from "@/redux/auth/auth.selector";
import { authActions } from "@/redux/auth/auth.reducer";

const Login = () => {
  const dispatch = useDispatch();
  const mobileRef = useRef();

  const auth = useSelector(getAuthData);

  const handleSubmit = () => {
    // put validations for front end
    dispatch(authActions.loginOtp(mobileRef.current.value));
  };

  return (
    <div
      className={`w-screen h-full bottom-0 bg-black/40 z-20 overflow-hidden left-0 right-0`}
      id="loginSection"
    >
      <motion.div
        layout
        className={`login  absolute right-0 w-[375px] bg-white h-full top-0 bg-center bg-cover bg-no-repeat py-4`}
        style={{ backgroundImage: "url('/img/login_bg.png')" }}
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: 375 }}
        transition={{
          //   type: "spring",
          stiffness: 100,
          damping: 2,
          delay: 0.2,
        }}
      >
        <div
          className="border border-gray-300 text-gray-900  rounded w-10 h-10 text-2xl flex justify-center items-center cursor-pointer mb-10 hover:bg-rose-600 transition-all duration-700 hover:text-white ml-4"
          onClick={() => dispatch(authActions.closeSidebar())}
        >
          <IoCloseSharp />
        </div>

        <motion.h4
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.5,
          }}
          className="text-2xl uppercase font-bold text-black/30 pl-6 pb-2"
        >
          Wellcome to Reown
        </motion.h4>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}
          className="flex justify-center items-center text-teal-700 text-3xl pt-5 pb-1"
        >
          <FaRegUserCircle className="bg-white" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.7,
          }}
          className="p-6 border border-r-0 border-l-0"
        >
          <label
            htmlFor="mobile"
            className="text-gray-500 block mb-1 text-[15px]"
          >
            Please Enter your mobile number
          </label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            ref={mobileRef}
            placeholder="Mobile number"
          />
          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              id="termCondtion"
              className="border border-gray-400 w-4 h-4"
            />
            <label htmlFor="termCondtion" className="text-gray-500 text-[15px]">
              I agree to the{" "}
              <Link href={"/"} className="text-blue-600">
                {" "}
                Terms and Conditions
              </Link>{" "}
            </label>
          </div>

          <button
            type="button"
            className="bg-teal-600 transition-all duration-500 hover:bg-teal-700 py-3 px-6 w-full text-white uppercase rounded mt-6"
            onClick={handleSubmit}
          >
            Login
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
