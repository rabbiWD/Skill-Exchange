import React, { use, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';

const ForgetPassword = () => {
    const {resetPassword} = use(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
      const [email, setEmail] = useState(location.state?.email || '')
      console.log(location);
    // const formState = location.state?. from?. pathName || '/';

    const handleReset=(e)=>{
        e.preventDefault()
        if(!email){
            toast.error('Please Enter your Email');
            return;
        }
        resetPassword(email)
        .then(()=>{
            toast.success('Password Reset Email Send! check your inbox');
            setTimeout(()=>{
                window.open('https://mail.google.com/mail/u/0/#inbox', '_blank');
            }, 2000);
        })
        .catch((error)=>{
            console.log(error);
            toast.error('Failed to send reset Email')
        })
    }

    return (
       <div className='flex justify-center items-center min-h-screen  bg-gradient-to-b from-indigo-50 to-white'>
         <div className='bg-white shadow-md rounded-2xl p-8 w-full max-w-md border border-gray-100'>
            <h2 className='text-2xl font-bold text-center text-indigo-600 mb-6'>Reset Your Password</h2>

            <form onSubmit={handleReset}>
             <div className='mb-2'>
             <label className="label flex">Email</label>
             <input onChange={(e)=>setEmail(e.target.value)} value={email} name='email' type="email" className="input" placeholder="Email" required/>
             </div>
          <button type='submit' className='btn w-full bg-indigo-600 hover:bg-indigo-700 text-white border-none transition-all duration-200 mt-2'>Send Reset Email</button>
        </form>
          <p className="text-center text-sm text-gray-500 mt-5">
          Remember your password?{' '}
          <span
            onClick={() => navigate('/auth/login')}
            className="text-indigo-600 cursor-pointer hover:underline"
          >
            Go back to Login
          </span>
        </p>
         
         <Toaster position='top-center'/>
         </div>
        </div>
    );
};

export default ForgetPassword;

 

        