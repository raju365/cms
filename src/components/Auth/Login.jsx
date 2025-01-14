import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  // console.log(handleLogin);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center ">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            onChange={(e) => {
              setEmail(e.target.value);
              // console.log(email);
            }}
            required
            value={email}
            className="border-2  outline-none bg-transparent placeholder:text-gray-400 text-xl border-emerald-600 rounded-full px-3 py-2"
            type="email"
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
              // console.log(password);
            }}
            required
            value={password}
            className="border-2   outline-none bg-transparent placeholder:text-gray-400 text-xl mt-2 border-emerald-600 rounded-full px-3 py-2"
            type="password"
            placeholder="Enter password"
          />

          <button
            className="border-none mt-5  text-white outline-none  w-full
          placeholder:text-white text-xl bg-emerald-600 rounded-full
          px-3 py-2"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
