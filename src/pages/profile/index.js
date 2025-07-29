import AuthAside from "@/components/auth-aside";
import Breadcrumd from "@/components/breadcrumd";
import { getAuthData } from "@/redux/auth/auth.selector";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TfiUser } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "motion/react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { getparty } from "@/redux/profile/profile.selector";
import { profileActions } from "@/redux/profile/profile.reducer";
import { updateProfileDetails } from "@/servers/lib-reown/lib";
const ProfileSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "Name must be minimum 2")
    .max(100, "Name must not be more than 100 characters")
    .required("First name is required"),
  last_name: Yup.string()
    .min(2, "Name must be minimum 2")
    .required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  gender: Yup.string().required("Gender must be selected"),
  WhatsappNo: Yup.string()
    .max(10, "Number must be 10 digits")
    .required("Whatsapp number is required"),
});

const Profile = () => {
  const auth = useSelector(getAuthData);
  const party = useSelector(getparty);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isSussess, setIsSussess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    if (auth.authLoaded && auth.currentUser) {
      dispatch(profileActions.getProfileFullDetails());
    }
  }, [auth, dispatch]);
  const fullname = party && party.party_name;
  const initialValues = {
    first_name: fullname?.split(" ")[0],
    last_name: fullname?.split(" ")[1],
    email: party && party.party_email,
    phone: party && party.party_mobile,
    gender: party && party.profile_gender,
    WhatsappNo: party && party.party_whatsapp_no,
  };
  const handleSubmit = async (values) => {
    setIsLoading(true);
    const data = {
      name: values.first_name + " " + values.last_name,
      email: values.email,
      phone: values.phone,
      gender: values.gender,
      whatsapp_no: values.WhatsappNo,
    };
    const res = await updateProfileDetails(auth.token, data);
    if (res.status === 200) {
      setIsLoading(false);
      setIsSussess(true);
      setSuccessMessage(res.message);
      setTimeout(() => {
        setIsSussess(false);
      }, 3000);
    }
  };
  return (
    <>
      <Breadcrumd pageName="Profile" />
      <div className="container my-14">
        <div className="flex w-full gap-5 md:flex-row flex-col justify-start items-start">
          <div className="w-full md:w-[375px] border border-gray-400 rounded pt-8 pb-1 flex-shrink-0">
            <AuthAside />
          </div>
          <div className="w-full border py-6">
            <p className="text-xl font-semibold text-gray-700  border-b pb-4 px-8">
              Personal Information
            </p>

            <Formik
              enableReinitialize={true}
              initialValues={initialValues}
              validationSchema={ProfileSchema}
              onSubmit={handleSubmit}
            >
              {({ values }) => (
                <Form className="w-full">
                  <div className="form-group">
                    <div className="form-input">
                      <label htmlFor="first_name">First Name </label>
                      <Field
                        type="text"
                        id="first_name"
                        name="first_name"
                        className="form-control mt-1"
                      />
                      <span className="text-sm text-rose-700 font-semibold mt-[-8px]">
                        <ErrorMessage name="first_name" />
                      </span>
                    </div>
                    <div className="form-input">
                      <label htmlFor="last_name">Last Name</label>
                      <Field
                        type="text"
                        id="last_name"
                        name="last_name"
                        className="form-control mt-1"
                      />
                      <span className="text-sm text-rose-700 font-semibold mt-[-8px]">
                        {" "}
                        <ErrorMessage name="last_name" />
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-input">
                      <label htmlFor="email">Email Address </label>
                      <Field
                        type="text"
                        id="email"
                        name="email"
                        className="form-control mt-1"
                      />
                      <span className="text-sm text-rose-700 font-semibold mt-[-8px]">
                        <ErrorMessage name="email" />
                      </span>
                    </div>
                    <div className="form-input">
                      <label htmlFor="phone">Mobile No.</label>
                      <Field
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control mt-1 bg-gray-100"
                        defaultValue={party && party.party_mobile}
                        disabled
                      />
                      <span className="text-sm text-rose-700 font-semibold mt-[-8px]">
                        {" "}
                        <ErrorMessage name="phone" />
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-input">
                      <p>Gender</p>
                      <label>
                        <Field
                          type="radio"
                          className="w-4 h-4 mr-2 mt-3"
                          name="gender"
                          value="male"
                        />
                        <span className="mt-[-8px]">Male</span>
                      </label>
                      <label>
                        <Field
                          type="radio"
                          className="w-4 h-4 ml-6 mr-2"
                          name="gender"
                          value="female"
                        />
                        <span>Female</span>
                      </label>
                      <br />
                      <span className="text-sm text-rose-700 font-semibold mt-[-8px]">
                        {" "}
                        <ErrorMessage name="gender" />
                      </span>
                    </div>
                    <div className="form-input">
                      <label htmlFor="WhatsappNo">Whatsapp Number</label>
                      <Field
                        type="number"
                        className="form-control mt-1 w-full"
                        id="WhatsappNo"
                        name="WhatsappNo"
                      />
                      <span className="text-sm text-rose-700 font-semibold mt-[-8px]">
                        {" "}
                        <ErrorMessage name="WhatsappNo" />
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-start items-center py-2 gap-16 ">
                    <button
                      type="submit"
                      className="bg-teal-700 text-white uppercase rounded py-3 px-8"
                    >
                      {isLoading ? " Please wait... " : "Update Profile"}
                    </button>
                    {isSussess && (
                      <p className="text-sm text-green-600 font-semibold">
                        {successMessage}
                      </p>
                    )}
                  </div>
                </Form>
              )}
            </Formik>

            {/* <motion.form
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <div className="form-group mt-4">
                <div className="form-input">
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    required
                    name="fname"
                    defaultValue={fname}
                    onChange={(e) =>
                      setPersInfo({ ...persInfo, fname: e.target.value })
                    }
                  />
                </div>
                <div className="form-input">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    defaultValue={lastname}
                    name="lname"
                    onChange={(e) =>
                      setPersInfo({ ...persInfo, lname: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-input">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    defaultValue={auth.currentUser?.email}
                    required
                    onChange={(e) =>
                      setPersInfo({ ...persInfo, email: e.target.value })
                    }
                  />
                </div>
                <div className="form-input">
                  <label htmlFor="lname">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    defaultValue={auth.currentUser?.mobile}
                    required
                    name="mobileNo"
                    onChange={(e) =>
                      setPersInfo({ ...persInfo, mobileNo: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-input flex gap-4">
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="gender"
                      defaultValue="male"
                      checked={auth.currentUser?.gender === "male"}
                      id="male"
                    />
                    <label
                      htmlFor="male"
                      className="text-gray-600 font-semibold"
                    >
                      Male
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="gender"
                      defaultValue="female"
                      checked={auth.currentUser?.gender === "female"}
                      id="female"
                    />
                    <label
                      htmlFor="female"
                      className="text-gray-600 font-semibold"
                    >
                      Female
                    </label>
                  </div>
                </div>
                <div className="form-input">
                  <label htmlFor="lname">Whatsapp Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    defaultValue={auth.currentUser?.whatsapp}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <button
                  type="button"
                  className="bg-teal-700 hover:bg-teal-800 py-3 px-8 rounded text-white"
                >
                  Update
                </button>
              </div>
            </motion.form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
