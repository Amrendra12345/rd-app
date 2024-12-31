import Image from "next/image";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "@/redux/auth/auth.reducer";
import { cartActions } from "@/redux/cart/cart.reducer";
import { getAuthData } from "@/redux/auth/auth.selector";
import { getCartData } from "@/redux/cart/cart.selector";

import Login from "./authComponent/login";
import SignUp from "./authComponent/signUp";
import MobileOtp from "./authComponent/mobileOtp";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const auth = useSelector(getAuthData);
  const cart = useSelector(getCartData);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     router.events.on("routeChangeStart", (url) => {
  //       dispatch(authActions.closeSidebar());
  //     });
  //   });

  useEffect(() => {
    if (auth && auth.currentUser && auth.authLoaded) {
      dispatch(cartActions.syncCartData());
    }
  }, [auth]);

  const displayLoginSidebar = () => {
    switch (auth.openedLoginSidebar) {
      case "login":
        return <Login />;
      case "signup":
        return <SignUp />;
      case "verifyLogin":
        return <MobileOtp verify_type="login"></MobileOtp>;
      case "verifySignup":
        return <MobileOtp verify_type="signup"></MobileOtp>;
      default:
        return <></>;
    }
  };
  const handlerDropdown = () => {
    setIsActive(!isActive);
  };
  const handlerLogout = () => {
    dispatch(authActions.logout());
    router.push("/");
  };
  return (
    <>
      <header className="py-1">
        <div className="container">
          <nav className="flex justify-between items-center">
            <Link href={"/"}>
              <Image
                src={"/img/reown_logo_sample.png"}
                className="img-fluid"
                width={260}
                height={40}
                alt="reown-logo"
                priority
                style={{ width: "85%" }}
              />
            </Link>
            <ul className="flex justify-end gap-4 items-center">
              {!auth.currentUser ? (
                <li
                  className="bg-teal-600 cursor-pointer hover:bg-teal-700 transition-all delay-300 rounded py-[6px] px-4 uppercase text-white"
                  onClick={() => dispatch(authActions.openSidebar("login"))}
                >
                  Login
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      href={"/cart"}
                      className="text-gray-900 text-xl flex gap-2 justify-center items-center"
                    >
                      <PiShoppingCartSimpleLight />{" "}
                    </Link>
                  </li>
                  <li
                    className="flex justify-end items-center gap-2 text-gray-900 relative text-[14px]"
                    onClick={handlerDropdown}
                  >
                    <span>{auth.currentUser.fullname} </span> <BsChevronDown />
                    {isActive && (
                      <div className="absolute top-[135%] right-0 flex w-40 border border-gray-200 shadow-xl z-20 bg-white rounded">
                        <ul className="w-full">
                          <li className="font-normal border-b border-b-gray-200 px-4 py-2 hover:bg-gray-100 transition-all">
                            <Link href={"/profile"}>My Profile</Link>
                          </li>
                          <li className="font-normal border-b border-b-gray-200 px-4 py-2 hover:bg-gray-100 transition-all">
                            <Link href={"/orders"}>My Order</Link>
                          </li>
                          <li
                            className="font-normal border-b border-b-gray-200 px-4 py-2 hover:bg-gray-100 transition-all"
                            onClick={handlerLogout}
                          >
                            Logout
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
      {displayLoginSidebar()}
    </>
  );
};

export default Header;
