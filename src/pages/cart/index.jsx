import Breadcrumd from "@/components/breadcrumd";
import CartAddress from "@/components/carts/cartAddress";
import { getCommonData } from "@/servers/lib-rd/ravi1";
import { withSessionSsr } from "@/servers/lib-rd/session";
import React from "react";

const Cart = (props) => {
  return (
    <>
      <Breadcrumd pageName="Cart" />

      <CartAddress {...props} />
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
