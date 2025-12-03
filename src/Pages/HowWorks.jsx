import React from 'react';
import { FaHandshake, FaSearch, FaUserPlus } from 'react-icons/fa';

const HowWorks = () => {
    const steps = [
    {
      id: 1,
      icon: <FaUserPlus className="text-4xl text-blue-500" />,
      title: "1. Create an Account",
      description:
        "Sign up in minutes and set up your profile to start offering or learning new skills.",
    },
    {
      id: 2,
      icon: <FaSearch className="text-4xl text-green-500" />,
      title: "2. Find a Provider",
      description:
        "Browse hundreds of skill providers, read reviews, and choose the right one for you.",
    },
    {
      id: 3,
      icon: <FaHandshake className="text-4xl text-yellow-500" />,
      title: "3. Book & Learn",
      description:
        "Book a session and start learning or sharing knowledge with others instantly.",
    },
  ];
    return (
        <section className="py-20 bg-white">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWorks;