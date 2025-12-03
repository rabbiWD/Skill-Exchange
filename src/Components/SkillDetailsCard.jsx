import React from 'react';

const SkillDetailsCard = ({skilled}) => {
    // console.log(skilled);
    return (
        <div className='max-w-5xl mx-auto my-10 p-6 bg-white rounded-2xl shadow-2xl border border-gray-100'>
           <div className="overflow-hidden rounded-2xl">
             <img className='w-full h-[500px] object-cover rounded-2xl' src={skilled.image} alt="" />

             <div className='mt-6'>
                <h2 className='text-3xl font-bold text-indigo-600'>{skilled.skillName}</h2>
                 <p className='text-gray-700 mt-2'>{skilled.description}</p>
             </div>

             <div className='mt-4 p-4 bg-indigo-50 rounded-xl flex flex-col md:flex-row md:justify-between md:items-center gap-2'>
             <div>
                <h3>Provider Name: {skilled.providerName}</h3>
                <h3>Provider Email: {skilled.providerEmail}</h3>
             </div>
            </div>

            <div className='flex flex-wrap gap-4 font-semibold text-gray-700'>
                <p>Category: {skilled.category}</p>
                <p>Price: {skilled.price}$</p>
                <p>Rating: {skilled.rating}</p>
                <p>Slot Available: {skilled.slotsAvailable}</p>
            </div>
           </div>
        
         </div>
    );
};

export default SkillDetailsCard;