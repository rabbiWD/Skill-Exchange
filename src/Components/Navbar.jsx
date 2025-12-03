
import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import userIcon from '../assets/user.png';

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success('You successfully logged out'))
      .catch((error) => console.log(error));
  };

  const activeClass = ({ isActive }) =>
    isActive
      ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold'
      : 'text-gray-700 hover:text-indigo-500 transition-all duration-200';

  return (
    <div className="navbar bg-white shadow-md sticky top-0 z-50">

      <div className="navbar-start">

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-52 p-2 shadow-md border border-gray-100"
          >
            <li>
              <NavLink to="/" className={activeClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/myprofile" className={activeClass}>
                My Profile
              </NavLink>
            </li>
            <li className="mt-2 border-t pt-2">
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm bg-indigo-600 text-white hover:bg-indigo-700 w-full"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/auth/login"
                    className="btn btn-sm bg-indigo-500 text-white hover:bg-indigo-600 w-full mb-2"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/auth/signup"
                    className="btn btn-sm bg-gray-100 text-gray-700 hover:bg-gray-200 w-full"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>

        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          SkillPlatform
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base gap-4">
          <li>
            <NavLink to="/" className={activeClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/myprofile" className={activeClass}>
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        <img
          title={user?.displayName || 'Guest'}
          src={user?.photoURL || userIcon}
          className="w-10 h-10 rounded-full border-2 border-indigo-400"
        />

        <div className="hidden lg:flex gap-2">
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn bg-indigo-600 text-white hover:bg-indigo-700 px-5 py-2 rounded-lg transition-all duration-300"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="btn bg-indigo-500 text-white hover:bg-indigo-600 px-5 py-2 rounded-lg transition-all duration-300"
              >
                Log In
              </Link>
              <Link
                to="/auth/signup"
                className="btn bg-gray-100 text-gray-700 hover:bg-gray-200 px-5 py-2 rounded-lg transition-all duration-300"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
