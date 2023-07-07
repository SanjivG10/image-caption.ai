import React, { Dispatch, SetStateAction, useState } from "react";

interface SignInFormProps {
  isSignIn: boolean;
  setIsSignIn: Dispatch<SetStateAction<boolean>>;
}

const SignInForm = ({ isSignIn, setIsSignIn }: SignInFormProps) => {
  const [error, setError] = useState("");

  const changeButtonType = () => {
    setIsSignIn((x) => !x);
  };

  const loginOrRegister = () => {};

  return (
    <form>
      <div className="relative mb-6" data-te-input-wrapper-init>
        <input
          type="email"
          className="p-2 rounded border-2"
          required
          placeholder="john@upgiant.com"
        />
      </div>

      <div className="relative mb-6" data-te-input-wrapper-init>
        <input
          type="password"
          placeholder="**********"
          className="p-2 rounded border-2"
          required
        />
      </div>

      <div className="text-center lg:text-left my-2">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={loginOrRegister}
        >
          {isSignIn ? "Login" : "Register"}
        </button>
      </div>
      <div className="text-center lg:text-left">
        <button
          type="button"
          onClick={changeButtonType}
          className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
        >
          {isSignIn ? "Register" : "Login"}
        </button>
      </div>

      {error && <div className="my-2 text-red-500">{error}</div>}
    </form>
  );
};

export default SignInForm;
