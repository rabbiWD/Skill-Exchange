import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

const TopProvider = () => {
     const [providers, setProviders] = useState([]);

     useEffect(() => {
        AOS.init({
       duration: 1000,
       once: true,
    });

    fetch("/TopProviders.json")
      .then((res) => res.json())
      .then((data) => setProviders(data))
      .catch(() => console.error("Failed to load providers"));
  }, []);

    return (
         <section className="py-16 bg-white mt-12 mb-10">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 ">Top Rated Providers</h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {providers.map((provider, index) => (
            <div
              key={provider.id}
               data-aos="fade-up"
              data-aos-delay={index * 100} 
              data-aos-duration="800"
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
            >
              <img
                src={provider.image}
                alt={provider.name}
                className="rounded-xl w-full h-52 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{provider.name}</h3>
              <p className="text-gray-600 font-medium">{provider.skill}</p>
              <div className="flex justify-between items-center mt-3 text-sm">
                <span className='font-normal'>⭐ {provider.rating}</span>
                <span className='font-normal'>{provider.students} students</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default TopProvider;