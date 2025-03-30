import { getAuthData } from "@/redux/auth/auth.selector";
import { profileActions } from "@/redux/profile/profile.reducer";
import {
  getBillingAddress,
  getDeliveryAddress,
  getparty,
} from "@/redux/profile/profile.selector";
import { updateDeliveryAddressDetails } from "@/servers/lib-reown/lib";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const FormShipping = () => {
  const dispatch = useDispatch();
  const auth = useSelector(getAuthData);
  const billingAddress = useSelector(getBillingAddress);
  const deliveryAddress = useSelector(getDeliveryAddress);
  const party = useSelector(getparty);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (auth.authLoaded && auth.currentUser) {
      dispatch(profileActions.getProfileFullDetails());
    }
  }, [auth, dispatch]);

  const initialValues = {
    name: party && party.party_name,
    email: party && party.party_email,
    shipto_houseno: deliveryAddress && deliveryAddress.party_house_no,
    shipto_street: deliveryAddress && deliveryAddress.party_street_no,
    shipto_locality: deliveryAddress && deliveryAddress.party_locality,
    shipto_city: deliveryAddress && deliveryAddress.party_city,
    shipto_state: deliveryAddress && deliveryAddress.party_state,
    shipto_pincode: deliveryAddress && deliveryAddress.party_pincode,
    same_as_billing: true,
    billing_houseno: billingAddress && billingAddress.party_house_no,
    billing_street: billingAddress && billingAddress.party_street_no,
    billing_locality: billingAddress && billingAddress.party_locality,
    billing_city: billingAddress && billingAddress.party_city,
    billing_state: billingAddress && billingAddress.party_state,
    billing_pincode: billingAddress && billingAddress.party_pincode,
    buying_for_business: "",
    gst_no: "",
    company_name: "",
  };

  const handleSubmit = async (data) => {
    dispatch(profileActions.saveDeliveryDetails(data))
      .unwrap()
      .then((data) => {
        if (data.status === 200) {
          setIsActive(true);
          setTimeout(() => {
            setIsActive(false);
          }, 2000);
        }
      });
  };

  return (
    <div className="flex justify-start items-center gap-2 border-b px-4 pb-4">
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="w-full">
            <div className="form-group">
              <div className="form-input">
                <label htmlFor="name">Full Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                />
              </div>
              <div className="form-input">
                <label htmlFor="email">Email Address</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-input">
                <label htmlFor="shipto_houseno">House No.</label>
                <Field
                  type="text"
                  id="shipto_houseno"
                  name="shipto_houseno"
                  className="form-control"
                />
              </div>
              <div className="form-input">
                <label htmlFor="shipto_street">Street Name</label>
                <Field
                  type="text"
                  id="shipto_street"
                  name="shipto_street"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-input">
                <label htmlFor="shipto_locality">Locality</label>
                <Field
                  type="text"
                  id="shipto_locality"
                  name="shipto_locality"
                  className="form-control"
                />
              </div>
              <div className="form-input">
                <label htmlFor="shipto_city">City</label>
                <Field
                  type="text"
                  id="shipto_city"
                  name="shipto_city"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-input">
                <label htmlFor="shipto_state">State</label>
                <Field
                  type="text"
                  id="shipto_state"
                  name="shipto_state"
                  className="form-control"
                />
              </div>
              <div className="form-input">
                <label htmlFor="shipto_pincode">Locality</label>
                <Field
                  type="text"
                  id="shipto_pincode"
                  name="shipto_pincode"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-input flex gap-2 items-center">
                <Field
                  type="checkbox"
                  id="same_as_billing"
                  name="same_as_billing"
                  className="w-4 h-4"
                  checked={values.same_as_billing}
                />
                <label htmlFor="same_as_billing" className="mt-2">
                  Same as billing address
                </label>
              </div>
            </div>
            {!values.same_as_billing && (
              <>
                <div className="form-group">
                  <div className="form-input">
                    <label htmlFor="billing_houseno">House No.</label>
                    <Field
                      type="text"
                      id="billing_houseno"
                      name="billing_houseno"
                      className="form-control"
                    />
                  </div>
                  <div className="form-input">
                    <label htmlFor="billing_street">Street Name</label>
                    <Field
                      type="text"
                      id="billing_street"
                      name="billing_street"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-input">
                    <label htmlFor="billing_locality">Locality</label>
                    <Field
                      type="text"
                      id="billing_locality"
                      name="billing_locality"
                      className="form-control"
                    />
                  </div>
                  <div className="form-input">
                    <label htmlFor="billing_city">City</label>
                    <Field
                      type="text"
                      id="billing_city"
                      name="billing_city"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-input">
                    <label htmlFor="billing_state">State</label>
                    <Field
                      type="text"
                      id="billing_state"
                      name="billing_state"
                      className="form-control"
                    />
                  </div>
                  <div className="form-input">
                    <label htmlFor="billing_pincode">Postal Code</label>
                    <Field
                      type="text"
                      id="billing_pincode"
                      name="billing_pincode"
                      className="form-control"
                    />
                  </div>
                </div>
              </>
            )}
            {isActive && (
              <div className="flex justify-center items-center py-4 mt-2">
                <p className="bg-green-50 text-green-800 font-semibold py-2 rounded px-5">
                  Successfully update your address.
                </p>
              </div>
            )}
            <div className="flex justify-center items-center py-2 mt-2">
              <button
                className="py-2 px-8 bg-teal-700 text-white transition-all rounded duration-500 uppercase font-semibold hover:bg-teal-800"
                type="submit"
              >
                Update
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormShipping;
