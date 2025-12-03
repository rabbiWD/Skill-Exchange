import React, { useEffect, useState } from 'react';

const FeaturedProviders = () => {
    const [providers, setProviders] = useState([]);

    useEffect(() => {

    const data = [
      {
        id: 1,
        name: 'Alex Martin',
        skill: 'Guitar Lessons',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
      },
      {
        id: 2,
        name: 'Sophia Lee',
        skill: 'UI/UX Design',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      {
        id: 3,
        name: 'John Doe',
        skill: 'React Development',
        image: 'https://randomuser.me/api/portraits/men/57.jpg',
      },
      {
        id: 4,
        name: 'Emma Watson',
        skill: 'Digital Marketing',
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
      },
    ];
    setProviders(data);
  }, []);

    return (
        <div className="my-16 w-11/12 mx-auto">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-8">
        Featured Skill Providers
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Learn from the best local instructors and enhance your skills.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {providers.map((provider) => (
          <div
            key={provider.id}
            className="bg-white rounded-2xl shadow-xl p-5 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={provider.image}
              alt={provider.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-indigo-200"
            />
            <h3 className="text-xl font-semibold text-gray-800">{provider.name}</h3>
            <p className="text-indigo-500 font-medium mt-1">{provider.skill}</p>
            <button className="btn btn-outline mt-4 w-full hover:bg-indigo-600 hover:text-white transition-colors">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
    );
};

export default FeaturedProviders;