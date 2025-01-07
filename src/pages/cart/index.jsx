import Breadcrumd from "@/components/breadcrumd";
import CartDetails from "@/components/carts/CartDetails";
import { getAuthData } from "@/redux/auth/auth.selector";
import { getCommonData } from "@/servers/lib-rd/ravi1";
import { withSessionSsr } from "@/servers/lib-rd/session";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const auth = useSelector(getAuthData);
  const router = useRouter();

  if (auth.authLoaded) {
    if (!auth || !auth.currentUser) {
      router.push("/");
      return null;
    }
  }

  return (
    <>
      <Breadcrumd pageName="Cart" />
      <CartDetails {...props} />
    </>
  );
};

export default Cart;
export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req, query }) {
    const data = [];
    const result = await getCommonData(req, data);
    if (result.success == true) {
      return {
        props: {
          ...result.data,
        },
      };
    }
    return {
      props: {},
    };
  }
);
