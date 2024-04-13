import React from "react";
import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        ></img>
      </div>
      <form className="absolute p-12 my-36 mx-auto right-0 left-0 w-3/12 bg-black text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl font-bold py-4">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {IsSignInForm && (
          <input
            className="p-2 my-4 w-full  bg-gray-700"
            type="text"
            placeholder="Full Name "
          />
        )}
        <input
          className="p-2 my-4 w-full  bg-gray-700"
          type="text"
          placeholder="Email Address "
        />
        <input
          className="p-2 my-4 w-full bg-gray-700"
          type="password"
          placeholder="password"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 text-sm cursor-pointer" onClick={toggleSignInForm}>
          {IsSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registered? SIgn In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;