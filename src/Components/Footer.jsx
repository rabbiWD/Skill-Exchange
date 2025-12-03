import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router';

const Footer = () => {
    return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
          <p>Email: support@skillswap.com</p>
          <p>Phone: +880 176623998</p>
          <p>Address: Dhanmondi, Dhaka, Bangladesh</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Social Links</h3>
          <div className="flex space-x-5 text-2xl">
            <Link to="https://facebook.com"
              target="_blank"
              className="hover:text-blue-500"
            >
              <FaFacebook />
            </Link>
            <Link to="https://twitter.com"
              target="_blank"
              className="hover:text-sky-400"
            >
              <FaTwitter />
            </Link>
            <Link
              target="_blank"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </Link>
            <Link to="https://linkedin.com"
              target="_blank"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a  className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-white">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-500 my-6" />

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} SkillSwap. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
