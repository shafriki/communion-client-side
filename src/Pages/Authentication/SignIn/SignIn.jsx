import React, { useState } from "react";
import image from '../../../assets/sign in.avif';
import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BeatLoader } from 'react-spinners';
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signIn, signInWithGoogle } = useAuth(); 
  const navigate = useNavigate();
  const [formLoading, setFormLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormLoading(true);
    try {
      await signIn(email, password); 
      Swal.fire("Success!", "Sign in Successful", "success");
      navigate("/");
    } catch (err) {
      toast.error(err?.message || "Something went wrong!", { position: "top-center" });
    } finally {
      setFormLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle(); 
      Swal.fire("Success!", "Sign in Successful", "success");
      navigate("/");
    } catch (err) {
      toast.error(err?.message || "Something went wrong!", { position: "top-center" });
    }
  };

  return (
    <div className="flex h-screen">
      <ToastContainer />
      <div className="w-full md:w-5/12 flex flex-col justify-center items-center bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-semibold mb-2">Sign In</h1>
        <p className="text-gray-600 mb-6">Welcome back! Please sign in.</p>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            className="w-full p-3 border rounded mb-4 focus:outline-blue-500" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
            <input 
              type={passwordVisible ? "text" : "password"} 
              name="password" 
              placeholder="Enter your password" 
              className="w-full p-3 border rounded mb-4 focus:outline-blue-500" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="absolute top-4 right-4 cursor-pointer" onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEye className="text-gray-600" /> : <FaEyeSlash className="text-gray-600" />}
            </span>
          </div>
          <button className="w-full btn bg-gradient-to-r from-gray-900 to-blue-500 text-white py-3 rounded font-semibold hover:bg-blue-700">
            {formLoading ? <BeatLoader size={10} color="#ffffff" /> : 'Sign In'}
          </button>
        </form>
        <p className="text-gray-600 mt-4">Don't have an account? <NavLink to='/sign-up' className="text-blue-600">Sign up</NavLink></p>
        <button onClick={handleGoogleSignIn} className="bg-gradient-to-r btn from-blue-900 to-blue-500 border-none mt-5 cursor-pointer flex items-center justify-center py-3 md:px-24 rounded shadow-sm hover:bg-gray-100 text-white">
          <FcGoogle className="text-2xl mr-2"/>Continue with Google
        </button>
      </div>
      <div className="hidden md:block w-7/12">
        <img src={image} alt="Community Gathering" className="w-full h-full object-cover"/>
      </div>
    </div>
  );
};

export default SignIn;