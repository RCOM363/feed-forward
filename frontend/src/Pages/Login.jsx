import React from "react";
import { Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

import FormWrapper from "../components/formComponents/FormWrapper";
import Input from "../components/formComponents/Input";
import { loginSchema } from "../utils/validations";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login, isLoginPending } = useAuth();

  const handleSubmit = (data) => {
    login(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
          Login to FeedForward
        </h2>
        <FormWrapper onSubmit={handleSubmit} schema={loginSchema}>
          {/* Username Field */}
          <Input name="username" label="Username" type="text" />
          {/* Password Field */}
          <Input name="password" label="Password" type="password" />
          <button
            type="submit"
            disabled={isLoginPending}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out mt-6"
          >
            {isLoginPending ? <BeatLoader size={8} color="#fff" /> : "Login"}
          </button>
        </FormWrapper>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-green-600 hover:text-green-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
