import ShippingAddress from "@/components/address/shippingAddress";
import AuthAside from "@/components/auth-aside";
import Breadcrumd from "@/components/breadcrumd";
import CartAddress from "@/components/carts/cartAddress";
import { getAuthData } from "@/redux/auth/auth.selector";
import { profileActions } from "@/redux/profile/profile.reducer";
import {
  getBillingAddress,
  getDeliveryAddress,
  getparty,
} from "@/redux/profile/profile.selector";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Address = () => {
  const auth = useSelector(getAuthData);
  const billingAddress = useSelector(getBillingAddress);
  const deliveryAddress = useSelector(getDeliveryAddress);
  const party = useSelector(getparty);
  const dispatch = useDispatch();
  useEffect(() => {
    if (auth.authLoaded && auth.currentUser) {
      dispatch(profileActions.getProfileFullDetails());
    }
  }, [auth, dispatch]);

  return (
    <>
      <Breadcrumd pageName="Address" />
      <div className="container my-14">
        <div className="flex w-full gap-5 items-start">
          <div className="w-[375px] flex-shrink-0 border border-gray-400 rounded pt-8 pb-4">
            <AuthAside />
          </div>
          <div className="w-full bg-gray-50 p-3 rounded">
            <ShippingAddress />
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
