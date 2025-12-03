import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
           <div className=' flex-1 max-w-screen mx-auto w-full px-7 md:px-8 lg:px-17 py-4 md:py-8 lg:py-12 bg-gradient-to-b from-indigo-50 via-white to-indigo-100'>
             <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;