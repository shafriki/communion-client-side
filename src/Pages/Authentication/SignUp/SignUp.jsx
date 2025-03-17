import React, { useState } from "react";
import image from '../../../assets/sign in.avif';
import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BeatLoader } from 'react-spinners';
import useAuth from "../../../Hooks/useAuth";
import { imageUpload, saveUser } from "../../../api/utils";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle, loading } = useAuth();
  const navigate = useNavigate();
  const [formLoading, setFormLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormLoading(true);
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    if (password.length < 6 || !/[A-Z]/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password) || !/[0-9]/.test(password)) {
      toast.error("Password must be at least 6 characters, contain one uppercase letter, one special character, and one number.", { position: "top-center" });
      setFormLoading(false);
      return;
    }

    const photoURL = image ? await imageUpload(image) : "https://example.com/default-avatar.jpg";

    try {
      const result = await createUser(email, password);
      await updateUserProfile(name, photoURL);
      await saveUser({ ...result?.user, displayName: name, photoURL });
      toast.success("Signup Successful", { position: "top-center" });
      navigate("/");
    } catch (err) {
      toast.error(err?.message, { position: "top-center" });
    } finally {
      setFormLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const data = await signInWithGoogle();
      await saveUser(data?.user);
      toast.success("Signup Successful", { position: "top-center" });
      navigate("/");
    } catch (err) {
      toast.error(err?.message, { position: "top-center" });
    }
  };

  return (
    <div className="flex h-screen">
      <ToastContainer />
      <div className="w-full md:w-5/12 flex flex-col justify-center items-center bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-semibold mb-2">Create Account</h1>
        <p className="text-gray-600 mb-6">Join our community today</p>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <input type="text" name="name" placeholder="Enter your name" className="w-full p-3 border rounded mb-4 focus:outline-blue-500" required />
          <input type="email" name="email" placeholder="Enter your email" className="w-full p-3 border rounded mb-4 focus:outline-blue-500" required />
          <input type="password" autoComplete="current-password" name="password" placeholder="Create a password" className="w-full p-3 border rounded mb-4 focus:outline-blue-500" required />
          <input type="file" name="image" accept="image/*" className="w-full py-3 text-gray-700 bg-white border rounded-lg mb-4" required />
          <button className="w-full btn bg-gradient-to-r from-gray-900 to-blue-500 text-white py-3 rounded font-semibold hover:bg-blue-700">
            {formLoading ? <BeatLoader size={10} color="#ffffff" /> : 'Create Account'}
          </button>
        </form>
        <p className="text-gray-600 mt-4">Already have an account? <NavLink to='/sign-in' className="text-blue-600">Sign in</NavLink></p>
        <button onClick={handleGoogleSignIn} className="bg-gradient-to-r btn from-blue-900 to-blue-500 border-none mt-5 cursor-pointer w-full flex items-center justify-center py-3 rounded shadow-sm hover:bg-gray-100 text-white">
          <FcGoogle className="text-2xl mr-2"/>Continue with Google
        </button>
      </div>
      <div className="hidden md:block w-7/12">
        <img src={image} alt="Community Gathering" className="w-full h-full object-cover"/>
      </div>
    </div>
  );
};

export default SignUp;
