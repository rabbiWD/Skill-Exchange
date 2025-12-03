import React from 'react';
import toast, { Toaster } from 'react-hot-toast';


const BookForm = () => {
    const handleBook=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;

        console.log('Book session:', name, email);

        toast.success(`Session Booked successfully for ${name}`);

        form.reset();
    }
    return (
       <div className='min-h-screen flex justify-center items-center bg-gradient-to-b from-indigo-100 via-white to-indigo-50 px-4'>
        <Toaster position="top-center" reverseOrder={false} />
            <div className='className="card bg-white w-full max-w-md shadow-2xl border border-indigo-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-indigo-200'>

              <h3 className='text-3xl font-bold text-center text-indigo-600 mb-2'>Book a Session</h3>

              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">

              <form onSubmit={handleBook} className="card-body space-y-4">
              <fieldset className="fieldset">
                <div>
                 <label className="label text-sm font-semibold text-gray-700">Full Name</label>
                <input name='name' type="text" className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Enter your name" />
                </div>
                
                <div>
                <label className="label text-sm font-semibold text-gray-700">Email</label>
                <input name='email' type="email" className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Enter your email" />
                </div>

                <button type='submit' className="btn w-full mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 border-none text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300">Submit</button>
                </fieldset>
                </form>
            </div>
          </div>
      </div>
    );
};

export default BookForm;
