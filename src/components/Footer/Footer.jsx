import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center">

          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">
              <strong>Address:</strong> 123 NGO Street, City, Country, 12345
            </p>
            <p className="mb-2">
              <strong>Email:</strong> contact@ngo.org
            </p>
            <p>
              <strong>Phone:</strong> +123 456 7890
            </p>
          </div>
          
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/programs" className="hover:underline">Our Programs</a></li>
              <li><a href="/events" className="hover:underline">Events</a></li>
              <li><a href="/get-involved" className="hover:underline">Get Involved</a></li>
              <li><a href="/donate" className="hover:underline">Donate</a></li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6 text-xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaFacebookF />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaTwitter />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaInstagram />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FaLinkedinIn />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <p className="text-lg font-semibold mt-4 mb-4">Support Our Mission</p>
          <a href="/donate" className="bg-yellow-500 text-black py-2 px-6 rounded-lg hover:bg-yellow-400 transition">
            Donate Now
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
