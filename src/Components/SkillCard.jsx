import React from 'react';
import { IoStar } from 'react-icons/io5';
import { Link } from 'react-router';
import 'aos/dist/aos.css';
import 'animate.css';

const SkillCard = ({skill}) => {
    const {skillId, image, skillName, price, rating} = skill;

    return (
     <div data-aos='fade-up' data-aos-delay='100'  data-aos-duration="800"  className="animate__animated animate__fadeIn">
       <Link className='card bg-base-100 p-4 shadow-xl hover:scale-105 transition ease-in-out'>
        <div className='border border-gray-500 rounded'>
           <figure className='h-48 overflow-hidden'>
           <img className='w-full object-cover rounded'
             src={image}
             alt="Shoes" />
         </figure>
         <div className="card-body">
           <h2 className="card-title">{skillName}</h2>
           <div className="card-actions justify-between">
             <button className="btn bg-[#f1f5e8] text-[#00d390] text-base font-semibold">Price: ${price}</button>
             <button className="btn bg-[#fff0e1] text-[#ff8811] text-base font-semibold">Rating: <IoStar/>{rating}</button>
           </div>
           <div>
            <Link to={`/skill/${skillId}`} className='w-full block text-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:from-purple-500 hover:to-indigo-500 transition-all duration-300'>View Details</Link>
           </div>
         </div>
        </div>
      </Link>
     </div>
    );
};

export default SkillCard;