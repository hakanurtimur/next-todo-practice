import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

const SignUp: React.FC = () => {
  const router = useRouter();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const { signUp } = useAuth();

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredEmail = emailRef.current!.value;
    if (enteredEmail.trim().length === 0) {
      // throw an error
      return;
    }
    const enteredPassword = passwordRef.current!.value;
    if (enteredPassword.trim().length === 0) {
      return;
    }

    try {
      await signUp(enteredEmail, enteredPassword);
    } catch (e) {
      console.log(e);
    }
    await router.push("/");
  };

  return (
    <div>
      <h1 className="text-center text-primary-900 text-2xl">Sign Up</h1>
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-between items-center text-primary-900 p-3 w-full m-auto"
      >
        <label className="w-8/12 m-1" htmlFor="email">
          Email Address
        </label>
        <input
          className="bg-primary-200 m-2 p-3 rounded w-8/12
        hover:bg-primary-100 "
          type="email"
          id="email"
          ref={emailRef}
        />
        <label className="w-8/12 m-1" htmlFor="password">
          Password
        </label>
        <input
          className="bg-primary-200 w-8/12 m-2 p-3 rounded
        hover:bg-primary-100"
          type="password"
          id="password"
          ref={passwordRef}
        />
        <button
          type="submit"
          className="w-8/12 bg-secondary-500 m-2 p-3 rounded  hover:bg-secondary-700 disabled:opacity-
        50"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
