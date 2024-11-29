import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema for User Registration
const UserRegisterSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
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

const UserReg = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values) => {
    console.log("User Registration Data:", values);
    setTimeout(() => {
      const modal = document.getElementById("my_modal_1");
      modal.showModal();
    }, 1000);
  };

  return (
    <div className="user-register-container p-5">
      <h2 className="text-2xl mb-4">User Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={UserRegisterSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Username</label>
              <Field
                name="username"
                type="text"
                className={`w-full p-2 border ${
                  errors.username && touched.username
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded`}
              />
              <ErrorMessage
                name="username"
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
              className=" p-2 bg-secondary text-white rounded hover:text-black"
            >
              Register User
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Congratulations!</h3>
                <p className="py-4">
                  You have succesfully created a user account.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserReg;
