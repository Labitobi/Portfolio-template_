import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin, BsGithub, BsTwitterX, BsHeartFill } from "react-icons/bs";
import { GoMail } from "react-icons/go";


const Footer = () => {
  return (
    <div>
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <span className="text-primary font-bold text-xl">
                  Alex Chen
                </span>
              </div>
              <p className="text-gray-600 mt-2">Fullstack Software Engineer</p>
            </div>

            <div className="flex space-x-4">
              {[
                {
                  icon: <BsGithub size={20} />,
                  },
                {
                  icon: <BsLinkedin size={20} />,
                  },
                {
                  icon: <BsTwitterX size={20} />,
                  },
                { icon: <GoMail size={20} />, href: "mailto:alex@example.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-500 hover:text-primary transition-colors"
                  whileHover={{
                    scale: 1.2,
                    color: "hsl(var(--primary))",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-100 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Alex Chen. All rights reserved.
            </p>
            <div className="flex justify-center items-center mt-2 text-primary">
              <BsHeartFill size={14} className="mr-1" color="brand"/>
              <span className="text-sm">Made with passion</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
