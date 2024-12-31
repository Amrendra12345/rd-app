import { getAuthData } from "@/redux/auth/auth.selector";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TfiUser } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { motion } from "motion/react";

const AuthAside = () => {
  const auth = useSelector(getAuthData);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.2,
        }}
        className="w-full justify-start items-center flex gap-4 px-4"
      >
        <div className="w-24 h-24 rounded-full overflow-hidden p-2 border-2 border-dashed border-blue-500 justify-center items-center flex relative">
          {auth.currentUser?.profile_pic ? (
            <Image
              src={auth.currentUser.profile_pic}
              alt="Profile Pic"
              sizes="30vw"
              fill
              style={{ objectFit: "contain" }}
              className="img-fluid"
              priority={false}
            />
          ) : (
            <TfiUser className="text-6xl text-gray-400" />
          )}
        </div>
        <div className="">
          <p className="font-semibold  text-gray-800 text-nowrap whitespace-nowrap text-ellipsis overflow-hidden">
            {auth.currentUser?.fullname}
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.4,
        }}
        className="profile-content border-t mt-8"
      >
        <ul>
          <li>
            <Link href={"/orders"}>
              Order <span>2</span>
            </Link>
          </li>
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
          <li>
            <Link href={"/address"}>Address</Link>
          </li>
          <li>
            <Link href={"/my-tickets"}> My tickets </Link>
          </li>
          <li className="font-semibold px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition-all duration-300">
            Sign out
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default AuthAside;
