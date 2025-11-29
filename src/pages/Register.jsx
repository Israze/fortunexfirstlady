import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlan } from '../context/PlanContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Register() {
  const navigate = useNavigate();
  const { plan, price } = usePlan();

  const [form, setForm] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // In a real app, you'd submit the form data here
    console.log({ ...form, plan, price });
    navigate('/payment');
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#8f211f] to-[#5e1514] text-white pt-20 pb-20">
      <Header page="register" />
      <div className="flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md p-8 space-y-6 bg-gradient-to-b from-[#5a0f0f] to-[#3b0b0b] rounded-2xl shadow-xl border border-yellow-700/30">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold">Create Your Account</h1>
            {plan && price && (
              <p className="mt-2 text-yellow-400 font-bold text-lg">
                You have selected: {plan} (₦{price})
              </p>
            )}
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-gray-300 mb-1">
                Full Name
              </label>
              <input
                id="full-name"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={handleChange}
                className="appearance-none block w-full px-4 py-3 border-transparent rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-[#2d0707] text-white"
              />
            </div>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                placeholder="Choose a username"
                value={form.username}
                onChange={handleChange}
                className="appearance-none block w-full px-4 py-3 border-transparent rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-[#2d0707] text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className="appearance-none block w-full px-4 py-3 border-transparent rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-[#2d0707] text-white"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                className="appearance-none block w-full px-4 py-3 border-transparent rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-[#2d0707] text-white"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Create a strong password"
                value={form.password}
                onChange={handleChange}
                className="appearance-none block w-full px-4 py-3 border-transparent rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-[#2d0707] text-white"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full mt-2 flex justify-center py-3 px-4 border border-transparent rounded-full shadow-lg text-lg font-bold text-black bg-gradient-to-r from-yellow-400 to-yellow-600 hover:scale-[1.02] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Register and Proceed to Payment
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
