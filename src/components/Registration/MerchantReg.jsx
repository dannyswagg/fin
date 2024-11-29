import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema for Merchant Registration
const MerchantRegisterSchema = Yup.object().shape({
  businessName: Yup.string().required("Business name is required"),
  ownerName: Yup.string().required("Owner's name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const MerchantReg = () => {
  const initialValues = {
    businessName: "",
    ownerName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values) => {
    console.log("Merchant Registration Data:", values);
  };

  return (
    <div className="merchant-register-container p-5">
      <h2 className="text-2xl mb-4">Merchant Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={MerchantRegisterSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Business Name</label>
              <Field
                name="businessName"
                type="text"
                className={`w-full p-2 border ${
                  errors.businessName && touched.businessName
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded`}
              />
              <ErrorMessage
                name="businessName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Owner's Name</label>
              <Field
                name="ownerName"
                type="text"
                className={`w-full p-2 border ${
                  errors.ownerName && touched.ownerName
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded`}
              />
              <ErrorMessage
                name="ownerName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <Field
                name="email"
                type="email"
                className={`w-full p-2 border ${
                  errors.email && touched.email
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <Field
                name="password"
                type="password"
                className={`w-full p-2 border ${
                  errors.password && touched.password
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded`}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Confirm Password
              </label>
              <Field
                name="confirmPassword"
                type="password"
                className={`w-full p-2 border ${
                  errors.confirmPassword && touched.confirmPassword
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded`}
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <button
              type="submit"
              className="p-2 bg-secondary text-white rounded hover:text-black"
            >
              Register Merchant
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MerchantReg;
