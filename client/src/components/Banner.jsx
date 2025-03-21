import React from "react";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 py-10 md:py-[10vw] md:mb-[-30px]">
        <p className="text-xl md:text-xl lg:text-3xl xl:text-5xl text-white font-semibold leading-tight">
          Book Appointment <br />
          With 100+ Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img
            className="w-20"
            src={assets.group_profiles}
            alt="group_trusted_doctors_image"
          />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden md:block" />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
          href="#specialty"
        >
          Book appointment{" "}
          <img className="w-3" src={assets.arrow_icon} alt="arrow_icon" />
        </a>
      </div>
      {/* Right Side */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt="banner_image"
        />
      </div>
    </div>
  );
};

export default Banner;
