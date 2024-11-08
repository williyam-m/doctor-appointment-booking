import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className=" md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ---Left Section---- */}
        <div className="">
          <div className="BrandName flex items-center font-bold text-2xl">
            <img src={assets.logo} alt="logo" width={50} />
            <span className="ml-3 text-2xl">Appoint-Med</span>
          </div>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            AppointMed is your trusted online solution for hassle-free doctor
            appointments. We connect patients with healthcare professionals,
            offering a seamless experience for booking consultations.
          </p>
        </div>
        {/* certer section */}
        <div>
          <p className="text-xl font-medium mb-4 ">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* right section */}
        <div>
          <p className="text-xl font-medium mb-4">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-9876543210</li>
            <li>developer@sam.com</li>
          </ul>
        </div>
      </div>
      {/* copyright section */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ AppointMed - All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
