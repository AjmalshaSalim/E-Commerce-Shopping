import React, { useState } from "react";
import Navbar from "../components/user/Navbar";
import { Link } from "react-router-dom";
import useraxios from "../useraxios";

export const Login = () => {
  const [credential, setCredential] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredential((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("credential");
    console.log(credential);
    try {
      console.log(credential);
      const response = await useraxios.post("/api/login/", credential);

      const { access, refresh } = response.data;

      localStorage.setItem("userAccessToken", access);
      localStorage.setItem("userRefreshToken", refresh);

      console.log("Login successful!");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="lg:flex flex-col items-center font-josefin-sans justify-center">
      <Navbar />
      <div className="bg-white p-8 w-96">
        <h2 className="text-4xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Username:</label>
            <input
              type="text"
              name="username"
              value={credential.username}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-1"
            />
          </div>
          <div>
            <label className="block mb-1">Password:</label>
            <input
              type="password"
              name="password"
              value={credential.password}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-1"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 text-sm"
          >
            LOGIN
          </button>
          <p className=" text-center">or</p>
          <div className="py-2">
            <Link to="/Register">
              <div className="input_container  border-2 bg-white border-customOutline px-9 pb-1 pt-1 hover:border-black">
                <button className=" text-black text-sm w-full text-center">
                  REGISTER
                </button>
              </div>
            </Link>
          </div>
        </form>
        <p className="mt-4">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
