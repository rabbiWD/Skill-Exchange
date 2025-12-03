import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-gray-200 min-h-screen'>
            <header className=''>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto py-5'>
            <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;