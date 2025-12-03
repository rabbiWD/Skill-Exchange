import React from 'react';

const Banner = () => {
    return (
        <div className='text-center'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl  font-bold text-indigo-600 leading-tight drop-shadow-lg'>Learn & Exchange <br />Skills Locally</h1>
            <p className='text-lg md:text-xl text-gray-600 font-medium mt-4 max-w-xl mx-auto drop-shadow-sm'>An interactive platform to connect with local skill providers</p>
            <button className='btn mt-6 px-8 py-3 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 rounded-full font-semibold shadow-lg'>Get Started</button>
        </div>
    );
};

export default Banner;