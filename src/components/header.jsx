import Image from "next/image";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { useEffect, useState } from "react";
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
import CartSidebar from "./cartSidebar";
import { FiHeart } from "react-icons/fi";
import { wishlistActions } from "@/redux/wishlist/wishlist.reducer";
import { getWishlistData } from "@/redux/wishlist/wishlist.selector";
import { getparty } from "@/redux/profile/profile.selector";

const Header = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [stickyClass, setStickyClass] = useState("relative");
  const auth = useSelector(getAuthData);
  const cart = useSelector(getCartData);
  const party = useSelector(getparty);
  const wishlist = useSelector(getWishlistData);
  const dispatch = useDispatch();
  const [isCartSidebar, setIsCartSidebar] = useState(false);
  const handleCartOpen = () => setIsCartSidebar(true);
  const handleCartClose = () => setIsCartSidebar(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  useEffect(() => {
    if (auth && auth.currentUser && auth.authLoaded) {
      dispatch(cartActions.syncCartData());
      dispatch(wishlistActions.syncWishlistData());
    }
  }, [auth, dispatch]);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100
        ? setStickyClass("hsticky")
        : setStickyClass("relative");
    }
  };

  useEffect(() => {
    router.events.on("routeChangeStart", (url) => {
      dispatch(authActions.closeSidebar());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  const handleCartShow = () => {
    handleCartOpen();
  };
  const handleWishlistPage = () => {
    router.push("/wishlist");
  };
  return (
    <>
      <header className={`${stickyClass} py-1`}>
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
            <ul className="flex justify-end gap-8 items-center">
              {!auth.currentUser ? (
                <li
                  className="bg-teal-600 cursor-pointer hover:bg-teal-700 transition-all delay-300 rounded py-[6px] px-4 uppercase text-white"
                  onClick={() => dispatch(authActions.openSidebar("login"))}
                >
                  Login
                </li>
              ) : (
                <>
                  <li onClick={handleCartShow}>
                    <p className="text-gray-900 text-xl flex gap-2 justify-center items-center relative">
                      <span className="absolute top-[-14px] left-[-16px] w-[18px] h-[18px] shadow-md border border-red-600 rounded-full bg-red-500 text-white text-[12px] flex justify-center items-center">
                        {cart.cartCount}
                      </span>
                      <PiShoppingCartSimpleLight />
                    </p>
                  </li>
                  <li onClick={handleWishlistPage}>
                    <p className="text-gray-900 text-xl flex gap-2 justify-center items-center relative">
                      <span className="absolute top-[-14px] right-[-13px] w-[18px] h-[18px] shadow-md border border-teal-600 rounded-full bg-teal-500 text-white text-[12px] flex justify-center items-center">
                        {wishlist.wishlistCount}
                      </span>
                      <FiHeart />
                    </p>
                  </li>
                  <li
                    className="flex justify-end items-center gap-2 text-gray-900 relative text-[14px]"
                    onClick={handlerDropdown}
                  >
                    <span>{party?.party_name} </span> <BsChevronDown />
                    {isActive && (
                      <div className="absolute top-[135%] right-0 flex w-40 border border-gray-200 shadow-xl z-20 bg-white rounded">
                        <ul className="w-full">
                          <li className="font-normal border-b border-b-gray-200 px-4 py-2 hover:bg-gray-100 transition-all">
                            <Link href={"/profile"} className="block">
                              My Profile
                            </Link>
                          </li>
                          <li className="font-normal border-b border-b-gray-200 px-4 py-2 hover:bg-gray-100 transition-all">
                            <Link href={"/orders"} className="block">
                              My Order
                            </Link>
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
      {isCartSidebar && (
        <CartSidebar cartOpen={handleCartOpen} cartClose={handleCartClose} />
      )}
    </>
  );
};

export default Header;
