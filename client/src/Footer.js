import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className="bg-orange-800 text-orange-50 py-12">
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://github.com/mohitrawat17" className="hover:text-gray-400 transition duration-300">
              <GitHubIcon/>
            </a>
            <a href="https://www.linkedin.com/in/mohit-rawat-456aa723a/" className="hover:text-gray-400 transition duration-300">
              <LinkedInIcon/>
            </a>
            <a href="https://www.instagram.com/mohit.json/" className="hover:text-gray-400 transition duration-300">
              <InstagramIcon/>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>Email: mr6114671@gmail.com</p>
          <p>Phone: +91 8383955754</p>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-right">
          <h2 className="text-2xl font-bold mb-4">Additional Links</h2>
          <ul className="list-none">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
