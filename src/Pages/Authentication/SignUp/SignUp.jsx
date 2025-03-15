import React from "react";
import image from '../../../assets/sign in.avif';
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-12 md:h-screen">
        
      {/* Left Section - Signup Form */}
      <div className="md:col-span-5 flex flex-col justify-center items-center bg-white p-8 shadow-lg w-full md:w-auto">
        <h1 className="text-3xl font-semibold mb-2">Create Account</h1>
        <p className="text-gray-600 mb-6">Join our community today</p>

        {/* Wrap inputs in form */}
        <form>
          {/* Name Input Field */}
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 border rounded mb-4 focus:outline-blue-500"
          />

          {/* Email Input Field */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded mb-4 focus:outline-blue-500"
          />

          {/* Password Input Field */}
          <input
            type="password"
            placeholder="Create a password"
            className="w-full p-3 border rounded mb-4 focus:outline-blue-500"
          />

          {/* Image Upload Input Field */}
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="w-full py-3 text-gray-700 bg-white border rounded-lg mb-4"
            required
            autoComplete="image"
          />

          <button className="w-full btn bg-gradient-to-r from-gray-900 to-blue-500 text-white py-3 rounded font-semibold hover:bg-blue-700">
            Create Account
          </button>
        </form>

        <p className="text-gray-600 mt-4">
          Already have an account? <NavLink to='/sign-in' className="text-blue-600">Sign in</NavLink>
        </p>

        <button className="bg-gradient-to-r btn from-blue-900 to-blue-500 border-none mt-5 cursor-pointer w-[19rem] md:w-[34rem] flex items-center justify-center border py-3 rounded shadow-sm hover:bg-gray-100 text-white">
          <FcGoogle className="text-2xl mr-2"/>Continue with Google
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="hidden md:block md:col-span-7 cursor-pointer group overflow-hidden">
        <img src={image} alt="Community Gathering" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/>
      </div>
    </div>
  );
};

export default SignUp;
