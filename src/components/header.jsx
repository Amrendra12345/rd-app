import Image from "next/image";
import Link from "next/link";
import { BsChevronDown, BsSearch } from "react-icons/bs";
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
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
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
      <header className={`${stickyClass} py-1 bg-[#f9f8f8]`}>
        <div className="container">
          <nav className="flex justify-between items-center relative">
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden mr-2 border border-gray-100 p-1 bg-gray-100 rounded"
              >
                {menuOpen ? (
                  <MdClose className="text-2xl text-rose-600" />
                ) : (
                  <FaBars className="text-2xl" />
                )}
              </button>
              <Link href={"/"} className="relative">
                <Image
                  src={"/reown-log.png"}
                  className="logo_img"
                  width={260}
                  height={30}
                  alt="reown-logo"
                  priority
                />
              </Link>
            </div>
            <div
              className={`absolute top-10 left-0 z-40 bg-white w-full p-4 md:relative md:w-auto md:top-0 md:bg-white md:shadow-none transition-all duration-300 ${
                menuOpen ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col md:flex-row gap-1">
                {["Laptops", "Mobile", "Tablets", "Gadgets", "Accessories"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href=""
                        className="text-sm font-semibold text-gray-800 transition hover:text-blue-700 uppercase py-2 md:px-3"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <ul className="flex justify-end gap-4 md:gap-8 items-center mt-5 md:mt-1">
              {!auth.currentUser ? (
                <li
                  className="bg-green-700 cursor-pointer hover:bg-teal-700 transition-all delay-300 rounded py-[6px] px-4 uppercase text-white"
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
                    className="flex justify-end items-center gap-1 text-gray-900 relative text-[14px]"
                    onClick={handlerDropdown}
                  >
                    <span
                      className="inline-block max-w-[80px] truncate"
                      title={auth.currentUser.fullname}
                    >
                      {auth.currentUser.fullname}
                    </span>
                    <BsChevronDown />
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

      {/* <header className={`${stickyClass} py-1`}>
        <div className="container">
          <nav className="flex justify-between items-center flex-col md:flex-row">
            <div className="flex items-center gap-2 flex-col md:flex-row">
              <Link href={"/"}>
                <Image
                  src={"/reown-log.png"}
                  className="img-fluid"
                  width={260}
                  height={30}
                  alt="reown-logo"
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
              </Link>
              <ul className="flex justify-end gap-1 items-center">
                <li>
                  <Link
                    href={""}
                    className="text-sm font-semibold text-gray-800 transition-all duration-300 hover:text-blue-700 uppercase py-2 px-3"
                  >
                    Laptops
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="text-sm font-semibold text-gray-800 transition-all duration-300 hover:text-blue-700 uppercase py-2 px-3"
                  >
                    Mobile
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="text-sm font-semibold text-gray-800 transition-all duration-300 hover:text-blue-700 uppercase py-2 px-3"
                  >
                    Tablets
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="text-sm font-semibold text-gray-800 transition-all duration-300 hover:text-blue-700 uppercase py-2 px-3"
                  >
                    Gadgets
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="text-sm font-semibold text-gray-800 transition-all duration-300 hover:text-blue-700 uppercase py-2 px-3"
                  >
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            <div className="form-groups w-[250px] relative">
              <input
                type="text"
                className="form-control w-[250px] h-[40px] border border-gray-300 rounded px-3 focus:outline-none focus:border-teal-500"
                placeholder="Search for products..."
              />
              <BsSearch className="absolute top-[20px] right-3 transform -translate-y-1/2 text-teal-600 text-lg cursor-pointer" />
            </div>
            <ul className="flex justify-end gap-8 items-center">
              {!auth.currentUser ? (
                <li
                  className="bg-green-700 cursor-pointer hover:bg-teal-700 transition-all delay-300 rounded py-[6px] px-4 uppercase text-white"
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
                    <span>{auth.currentUser.fullname} </span> <BsChevronDown />
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
      </header> */}
      {displayLoginSidebar()}
      {isCartSidebar && (
        <CartSidebar cartOpen={handleCartOpen} cartClose={handleCartClose} />
      )}
    </>
  );
};

export default Header;
