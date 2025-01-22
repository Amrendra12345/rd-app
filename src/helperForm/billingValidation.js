import * as Yup from "yup";
const billingFormSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Name must be minimum 2")
    .max(100, "Name must not be more than 100 characters")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});
export default billingFormSchema;
