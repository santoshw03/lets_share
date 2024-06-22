import React, { useState } from "react";

const Login = () => {
  const [isSignup, setIsSignup] = useState(true);
  const loginSignupHnadler = () => {
    setIsSignup(!isSignup);
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center">
        <div className="mr-2">
          <img
            alt="Logo"
            src="https://imgs.search.brave.com/GGzstaFM3flip3QKkaLDNOj7clSWIq1m0QMXH89U5FY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzEwMzIx/NTA0L3NjcmVlbnNo/b3RzLzE3NTU2MTUx/L21lZGlhLzQyYmYx/OWU4NjgyZGQ2MGY4/YTZjNWRlODAzYWRi/OTI5LmpwZz9yZXNp/emU9NDAweDA"
          ></img>
        </div>
        <div className="ml-2">
          <h1 className="text-center font-bold text-3xl my-3">
            {!isSignup ? "Signup" : "Login"}
          </h1>
          <form className="flex flex-col">
            {!isSignup && (
              <>
                <input
                  className=" my-2 px-4 py-2  w-full rounded-full  border border-gray-400"
                  type="text"
                  placeholder="Enter Name"
                />
                <input
                  className=" my-2 px-4 py-2  w-full rounded-full  border border-gray-400"
                  type="email"
                  placeholder="Enter Email"
                />
              </>
            )}
            <input
              className=" my-2 px-4 py-2  w-full rounded-full  border border-gray-400"
              type="text"
              placeholder="Enter Username"
            />
            <input
              className=" my-2 px-4 py-2  w-full rounded-full  border border-gray-400"
              type="password"
              placeholder="Enter Password"
            />
            {!isSignup ? (
              <input
                className=" my-2 px-4 py-2  w-full rounded-full  border border-gray-400"
                type="password"
                placeholder="Confirm Password"
              />
            ) : (
              <p className="text-end text-sm text-[#1e81b0]">Forgot Pass ?</p>
            )}

            <button
              className=" my-2 px-4 py-2 border-none bg-[#cd84f1] w-full rounded-full hover:cursor-pointer text-white font-bold"
              type="submit"
            >
              {!isSignup ? "Register" : "Login"}
            </button>
          </form>
          <div>
            <p className="text-sm text-gray-500">
              {isSignup ? "New here ?" : "Already have an Account?"}
            </p>
            <button
              className=" my-2 px-4 py-2 border-none bg-black hover:bg-[#cd84f1] w-full rounded-full hover:cursor-pointer text-white font-bold"
              type="submit"
              onClick={loginSignupHnadler}
            >
              {isSignup ? "Create Account" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
