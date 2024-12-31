import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Breadcrumd from "../breadcrumd";
import CartAddress from "./cartAddress";
import { getAuthData } from "@/redux/auth/auth.selector";
import { getCartData } from "@/redux/cart/cart.selector";

const CartDetails = (props) => {
  const auth = useSelector(getAuthData);
  const cart = useSelector(getCartData);
  const router = useRouter();

  useEffect(() => {
    if (auth.authLoaded) {
      if (!auth || !auth.currentUser) {
        router.push("/");
      }
    }
  }, []);
  return (
    <>
      <Breadcrumd pageName="Cart" />
      <div className="container mt-10">
        <h1>Cart details</h1>
        <CartAddress />
      </div>
    </>
  );
};

export default CartDetails;
