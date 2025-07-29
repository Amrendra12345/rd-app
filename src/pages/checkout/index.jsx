import BillingAddress from "@/components/address/billingAddress";
import CheckoutCart from "@/components/address/checkoutCart";
import ChexkoutPrices from "@/components/address/chexkoutPrices";
import Breadcrumd from "@/components/breadcrumd";

const Checkout = () => {
  return (
    <>
      <Breadcrumd pageName="Checkout" />
      <section className="w-full mt-10">
        <div className="container">
          <div className="w-full flex flex-col md:flex-row justify-start items-start gap-5">
            <div className="w-full md:w-[70%]">
              <BillingAddress />
            </div>
            <div className="w-full md:w-[30%] flex-shrink-0">
              <CheckoutCart />
              <ChexkoutPrices />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
