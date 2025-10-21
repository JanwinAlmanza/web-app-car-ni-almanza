import React from "react";
import Navbar from "../../components/Navbar";

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Order Your Dream Car</h2>
        <form className="bg-white shadow-md rounded-xl p-8 w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded-md focus:outline-blue-600"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded-md focus:outline-blue-600"
          />
          <select className="w-full border p-2 rounded-md focus:outline-blue-600">
            <option>Select Car Model</option>
            <option>Adventador</option>
            <option>Huracan</option>
            <option>Urus</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
}
