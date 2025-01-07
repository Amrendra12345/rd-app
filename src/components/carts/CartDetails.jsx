import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData } from "@/redux/auth/auth.selector";
import { getCartData } from "@/redux/cart/cart.selector";
import Image from "next/image";
import {
  getBillingAddress,
  getDeliveryAddress,
  getparty,
} from "@/redux/profile/profile.selector";

const CartDetails = (props) => {
  const auth = useSelector(getAuthData);
  const cart = useSelector(getCartData);
  const billingAddress = useSelector(getBillingAddress);
  const deliveryAddress = useSelector(getDeliveryAddress);
  const party = useSelector(getparty);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (auth.authLoaded) {
      if (!auth || !auth.currentUser) {
        router.push("/");
      }
    }
  }, []);
  console.log(cart.cartItemsData);
  return (
    <>
      <div className="container mt-10">
        <div className="flex justify-start items-start gap-4">
          <div className="flex-shrink-0 w-2/3  bg-white px-4">
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-2 items-center">
                <Image
                  src={"/img/address__icon.svg"}
                  alt="address_icon"
                  width={30}
                  height={30}
                />
                <p>
                  {deliveryAddress?.party_address_line_1 +
                    " " +
                    (deliveryAddress?.party_address_line_2 ?? "")}
                  , {deliveryAddress?.party_city},{" "}
                  {deliveryAddress?.party_state}, India-
                  {deliveryAddress?.party_pincode}
                </p>
              </div>
              <div className="w-24 h-20 flex justify-center items-center">
                <Image
                  src={"/img/address__banner.svg"}
                  alt="address_icon"
                  width={80}
                  height={80}
                  className="img-fluid"
                />
              </div>
            </div>
            {cart.cartItemsData.map((cartItem, i) => {
              return (
                <div
                  key={cartItem.product_sku_id}
                  className="mt-2 flex justify-start items-center border mb-2"
                >
                  <Image
                    src={cartItem.product_icon}
                    width={80}
                    height={60}
                    alt="img"
                  />
                  <p>{cartItem.product_title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
