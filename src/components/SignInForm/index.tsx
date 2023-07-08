import axios from "axios";
import React, { Dispatch, SetStateAction, useState } from "react";
import { BACKEND_URL } from "src/constants";

interface SignInFormProps {
  isSignIn: boolean;
  setIsSignIn: Dispatch<SetStateAction<boolean>>;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}

const SignInForm = ({
  isSignIn,
  setIsSignIn,
  setShowSignInModal,
}: SignInFormProps) => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeButtonType = () => {
    setIsSignIn((x) => !x);
  };

  const loginOrRegister = async () => {
    try {
      setError("");
      const loginOrRegister = isSignIn ? "login" : "register";
      const { data } = await axios.post(BACKEND_URL + loginOrRegister, {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      setShowSignInModal(false);
    } catch (err: any) {
      setError(err?.response?.data?.err || "Something went wrong");
    }
  };

  return (
    <form>
      <div className="relative mb-6" data-te-input-wrapper-init>
        <input
          type="email"
          className="p-2 rounded border-2 w-full"
          required
          placeholder="john@upgiant.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="relative mb-6" data-te-input-wrapper-init>
        <input
          type="password"
          placeholder="**********"
          className="p-2 rounded border-2 w-full"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        <div></div>
        <button type="button" onClick={changeButtonType}>
          {isSignIn ? "New member? Register here" : "Already a member? Login"}
        </button>
      </div>

      {error && <div className="my-2 text-red-500">{error}</div>}
    </form>
  );
};

export default SignInForm;
