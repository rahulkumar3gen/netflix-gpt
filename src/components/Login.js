import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidDAta } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
const Login = () => {
  const [IsSignInForm, setIsSignInForm] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignInForm(!IsSignInForm);
  };
  const handleButtonClick = () => {
    const message = checkValidDAta(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!IsSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 my-36 mx-auto right-0 left-0 w-3/12 bg-black text-white rounded-lg bg-opacity-80"
      >
        <h1 className="text-3xl font-bold py-4">
          {IsSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSignInForm && (
          <input
            ref={name}
            className="p-2 my-4 w-full  bg-gray-700"
            type="text"
            placeholder="Full Name "
          />
        )}
        <input
          ref={email}
          className="p-2 my-4 w-full  bg-gray-700"
          type="text"
          placeholder="Email Address "
        />
        <input
          ref={password}
          className="p-2 my-4 w-full bg-gray-700"
          type="password"
          placeholder="password"
        />
        <p className="text-red-500 font-bold text-lg py-3">{ErrorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
