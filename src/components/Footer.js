import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-[#1c3b35] justify-center items-center">
      <div className="flex w-full h-full justify-center items-center gap-20 slg:gap-1 slg:flex-col">
        <div className="flex gap-20 p-10 w-full justify-end smd:justify-center smd:items-center slg:gap-8 slg:justify-center">
          <ul>
            <h1 className="font-bold text-2xl text-[#b2c9c5]">Shop</h1>
            <li className="text-lg text-[#9db5a5] hover:scale-95 hover:cursor-pointer">
              Gift Cards
            </li>
            <li className="text-lg text-[#9db5a5] hover:scale-95 hover:cursor-pointer">
              Store Location
            </li>
            <li className="text-lg text-[#9db5a5] hover:scale-95 hover:cursor-pointer">
              Refer a Friend
            </li>
          </ul>
          <ul>
            <h1 className="font-bold text-xl text-[#b2c9c5]">HELP</h1>
            <li className="text-lg text-[#9db5a5] hover:scale-95 hover:cursor-pointer">
              Contact Us
            </li>
            <li className="text-lg text-[#9db5a5] hover:scale-95 hover:cursor-pointer">
              FAQ
            </li>
            <li className="text-lg text-[#9db5a5] hover:scale-95 hover:cursor-pointer">
              Accessibility
            </li>
          </ul>
          <ul>
            <h1 className="font-bold text-xl text-[#b2c9c5]">ABOUT</h1>
            <li className="text-lg text-[#9db5a5] hover:scale-95 hover:cursor-pointer">
              Our Story
            </li>
            <li className="text-lg text-[#9db5a5] hover:scale-95 hover:cursor-pointer">
              Wholesale
            </li>
            <li className="text-lg text-[#9db5a5] hover:scale-95 hover:cursor-pointer">
              Carrers
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-full items-start justify-center">
          <h3 className="font-bold text-lg text-[#b2c9c5] text-center w-full">
            Sign up to get 10% off yout first order
          </h3>
          <div className="flex w-full gap-2 p-6 smd:justify-center slg:justify-center">
            <input
              type="text"
              placeholder="Your Email Address"
              className="px-4 outline-none rounded-full"
            />
            <button className="btn rounded-full bg-[#e1b940] border-none hover:bg-[#9db5a5] hover:text-white">
              Subscribe
            </button>
          </div>
          <div className="flex items-center justify-start px-24 gap-4 w-full slg:p-0 slg:w-full smd:justify-center slg:justify-center">
            <p className="font-bold text-md text-[#b2c9c5] text-right">
              Follow us:
            </p>
            <div className="relative group">
              <img
                src="/instagram.png"
                alt="instagram"
                className="w-[32px] h-[32px]"
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-22 text-center opacity-0 group-hover:opacity-75 transition duration-500 ease-in-out bg-black text-white text-md rounded-full py-1 px-2">
                instagram
              </div>
            </div>
            <div className="relative group">
              <img
                src="/twitter.png"
                alt="twitter"
                className="w-[32px] h-[32px]"
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-22 text-center opacity-0 group-hover:opacity-75 transition duration-500 ease-in-out bg-black text-white text-md rounded-full py-1 px-2">
                X
              </div>
            </div>
            <div className="relative group">
              <img
                src="/facebook.png"
                alt="facebook"
                className="w-[32px] h-[32px]"
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-22 text-center opacity-0 group-hover:opacity-75 transition duration-500 ease-in-out bg-black text-white text-md rounded-full py-1 px-2">
                facebook
              </div>
            </div>
            <div className="relative group">
              <img
                src="/linkedin.png"
                alt="linkedin"
                className="w-[32px] h-[32px]"
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-22 text-center opacity-0 group-hover:opacity-75 transition duration-500 ease-in-out bg-black text-white text-md rounded-full py-1 px-2">
                Linkedin
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-80 p-4 slg:gap-4 slg:flex-col-reverse">
        <p className="font-bold text-xl text-[#b2c9c5] text-right slg:text-center">
          @2024, All Rights Reserved
        </p>
        <div className="flex gap-6 slg:justify-center">
          <p className="font-bold text-lg text-[#b2c9c5] text-right  slg:text-center hover:cursor-pointer">
            Term of Service
          </p>
          <p className="font-bold text-lg text-[#b2c9c5] text-right  slg:text-center hover:cursor-pointer">
            Term of Privacy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
