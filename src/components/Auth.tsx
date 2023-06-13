import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import Link from "next/link";
import AuthContextModel from "@/models/authContextModel";

const Auth: React.FC = () => {
  const router = useRouter();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const { login } = useAuth() as AuthContextModel;

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!emailRef.current || !passwordRef.current) return;
    const enteredEmail: string = emailRef.current?.value;
    if (enteredEmail && enteredEmail.trim().length === 0) {
      // throw an error
      return;
    }
    const enteredPassword: string = passwordRef.current?.value as string;
    if (enteredPassword && enteredPassword.trim().length === 0) {
      return;
    }

    try {
      await login(enteredEmail, enteredPassword);
    } catch (e) {
      console.log(e);
    }
    await router.push("/");
  };

  return (
    <div>
      <h1 className="text-center text-primary-900 text-2xl">Login</h1>
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-between items-center text-blue-950 p-3 w-full m-auto gap-1"
      >
        <label className="w-8/12 m-1" htmlFor="email">
          Email Address{" "}
        </label>
        <input
          className="bg-primary-200 w-8/12 m-1 p-3 rounded
        hover:bg-primary-100"
          type="email"
          id="email"
          ref={emailRef}
        />
        <label
          className="w-8/12 m-1 flex flex-row justify-between"
          htmlFor="password"
        >
          Password{" "}
          <span>
            <Link
              className="text-primary-700 hover:text-secondary-900"
              href={"/forget-password"}
            >
              Forget your password ?
            </Link>
          </span>
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
