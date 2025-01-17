import { Formik, useFormik } from "formik";
import * as Yup from "yup";
const FormShipping = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.number().required().positive().integer(),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="flex justify-start items-center gap-2 border-b px-4 pb-4">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <div className="form-input">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              name="fullname"
              onChange={formik.handleChange}
              value={formik.values.fullname}
            />
            {formik.touched.fullname && formik.errors.fullname ? (
              <div>{formik.errors.fullname}</div>
            ) : null}
          </div>

          <div className="form-input">
            <label htmlFor="emai">Email Address</label>
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <button type="submit">Submik</button>
      </form>
    </div>
  );
};

export default FormShipping;
