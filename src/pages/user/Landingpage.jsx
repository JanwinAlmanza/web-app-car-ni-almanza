import React from "react";
import PrimaryButton from "../../components/PrimaryButton";
import Navbar from "../../components/Navbar";
import Card from "../../components/card";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleExplore = () => navigate("/listing");
  const handleOrder = () => navigate("/order");

  const carTypes = [
    {
      icon: "🏎️",
      title: "Aventador",
      description: "Unleash extreme power with Lamborghini's flagship supercar.",
    },
    {
      icon: "🚙",
      title: "Urus",
      description: "The world’s first Super Sport Utility Vehicle with style and speed.",
    },
    {
      icon: "🚗",
      title: "Huracán",
      description: "Precision, control, and dynamic performance in every turn.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to Lamborghini Motors
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Discover the art of Italian engineering — luxury, performance, and innovation combined.
        </p>
        <div className="flex justify-center gap-4">
          <PrimaryButton label="Explore Models" onClick={handleExplore} />
          <PrimaryButton label="Order Now" onClick={handleOrder} type="outline" />
        </div>
      </section>

      {/* Featured Models */}
      <section className="px-10 pb-20">
        <h3 className="text-3xl font-semibold text-center mb-10 text-yellow-600">
          Lamborghini Lineup
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {carTypes.map((car, i) => (
            <div
              key={i}
              onClick={handleExplore}
              className="bg-white shadow-xl rounded-2xl p-8 text-center transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <div className="text-5xl mb-4">{car.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{car.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{car.description}</p>
              <PrimaryButton label="View Details" onClick={handleExplore} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
