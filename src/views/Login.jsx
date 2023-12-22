import React, { useState } from "react";
import Navbar from "../components/user/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  const [credential,setCredential]=useState({
    email: "",
    password: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredential((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

const handleSubmit = ()=>{
  e.preventDefault();
  console.log(credential)
}

  return (
    <>
      <Navbar/>
      <form className=" flex w-full bg-white justify-center font-josefin-sans text-sm"
      onSubmit={handleSubmit}>
      <div className="input_box text-left w-1/4">
        <div className="">
          <h1 className=" font-bold text-4xl py-5 text-center">Login</h1>
        </div>
        <div className="py-2">
          <label htmlFor="">Email Address</label>
          <div className="input_container  border-2 border-customOutline px-9 pb-1 pt-1 hover:border-black">
            <input type="email"
             className="input_column outline-none text-lg w-full bg-white"
             id="email"
             name="email"
             value={credential.email}
             onChange={handleChange}
             autoComplete="email"
             />
          </div>
        </div>
        <div className="py-2">
          <label htmlFor="">Password</label>
          <div className="input_container  border-2 border-customOutline px-9 pb-1 pt-1 hover:border-black">
            <input 
            type="password" 
            id="password"
            className="input_column outline-none text-lg w-full"
            // value={credential.password}
            onChange={handleChange}
            />
          </div>
        </div>
        <div className="py-2">
          <div className="input_container  border-2 bg-black border-customOutline px-9 pb-2 pt-3 hover:border-black">
            <button 
            className=" text-white text-xs w-full text-center"
            >
              LOGIN
            </button>
          </div>
        </div>
        <p className=" text-center">or</p>
        <div className="py-2">
        <Link to="/Register">
          <div className="input_container  border-2 bg-white border-customOutline px-9 pb-2 pt-3 hover:border-black">          
            <button className=" text-black text-xs w-full text-center">
              REGISTER
            </button>
          </div>
          </Link>
        </div>
      </div>
    </form>
    </>
   
  );
};

export default Login;
