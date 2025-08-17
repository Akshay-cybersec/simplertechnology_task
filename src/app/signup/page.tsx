'use client'
import { useState } from 'react';
import UserCard from '../../components/UserCard'; 
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { FormEvent } from "react";

const SignUpPage = () => {
  const [yourName, setYourName] = useState('');
  const [yourEmail, setYourEmail] = useState('');
  const [yourPassword, setYourPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNameError('');
    setEmailError('');
    setPasswordError('');

    let hasError = false;

    if (yourName.trim() === '') {
      setNameError('Full Name is required.');
      hasError = true;
    }

    if (yourEmail.trim() === '') {
      setEmailError('Email Address is required.');
      hasError = true;
    } else if (!yourEmail.includes('@') || !yourEmail.includes('.')) {
      setEmailError('Email Address is invalid.');
      hasError = true;
    }

    if (yourPassword.trim() === '') {
      setPasswordError('Password is required.');
      hasError = true;
    } else if (yourPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
      hasError = true;
    }

    if (!hasError) {
      setIsRegistrationSuccessful(true);
    }
  };

  if (isRegistrationSuccessful) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md text-center">
          <p className="text-gray-700 mb-6">Your account has been created. </p><h2 className="text-2xl font-bold text-green-600 mb-4">Successfully!</h2>
          <UserCard name={yourName} email={yourEmail} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Create Your Account
        </h2>

        <div className="mb-4">
          <label htmlFor="fullName" className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <FaUser className="mr-2 text-indigo-600" /> Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={yourName}
            onChange={(e) => setYourName(e.target.value)}
            className="w-full px-3 py-2 rounded border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <FaEnvelope className="mr-2 text-indigo-600" /> Email Address
          </label>
          <input
            type="email"
            id="email"
            value={yourEmail}
            onChange={(e) => setYourEmail(e.target.value)}
            className="w-full px-3 py-2 rounded border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <FaLock className="mr-2 text-indigo-600" /> Password
          </label>
          <input
            type="password"
            id="password"
            value={yourPassword}
            onChange={(e) => setYourPassword(e.target.value)}
            className="w-full px-3 py-2 rounded border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded hover:bg-indigo-700 flex items-center justify-center"
        >
          <FaUser className="mr-2" /> Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
