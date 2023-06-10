import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import Link from "next/link";

const Auth: React.FC = () => {
  const router = useRouter();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const { login } = useAuth();

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
      await login(enteredEmail, enteredPassword);
    } catch (e) {
      console.log(e);
    }
    await router.push("/");
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-between items-center text-blue-950 p-3 w-full m-auto gap-2"
      >
        <label className="w-8/12 m-1" htmlFor="email">
          Email Address{" "}
        </label>
        <input
          className="bg-blue-200 w-8/12 m-2 p-3 rounded shadow-blue-900 hover:bg-blue-100 active:bg-blue-5 disabled:opacity-50"
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
              className="text-blue-500 hover:text-blue-900"
              href={"/forget-password"}
            >
              Forget your password ?
            </Link>
          </span>
        </label>
        <input
          className="bg-blue-200 w-8/12 m-2 p-3 rounded shadow-blue-900 hover:bg-blue-100  active:bg-blue-5  disabled:opacity-50"
          type="password"
          id="password"
          ref={passwordRef}
        />
        <button
          type="submit"
          className="w-8/12 bg-blue-300 m-1 p-3 rounded shadow-blue-900 hover:bg-blue-200 disabled:opacity-50 border-2 border-b-blue-950"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
