import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt="about_image"
        />
        <div className="flex flex-col justify-between gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            maiores modi quod hic eos atque! Cum delectus consectetur quidem
            iusto sit perferendis amet libero magnam, fugit deleniti odio
            deserunt repellat. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Esse est quo laboriosam totam repellat quasi
            veniam. Eveniet nostrum ipsam sunt sit, rerum quaerat numquam modi
            optio pariatur, blanditiis in consectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            nihil dolorem rem ad sit reprehenderit quisquam! Doloribus laborum a
            labore qui. Modi, voluptate laborum iste temporibus minus ut fugiat
            repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Laborum repellat aspernatur labore eligendi repellendus,
            consectetur vel voluptatibus molestiae, quaerat ullam, consequuntur
            delectus deserunt omnis quas excepturi ipsa ut. Repudiandae,
            repellendus!
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            laborum enim itaque. Dolorem sed nemo, tenetur ab, suscipit ipsum
            autem veniam quibusdam ut cupiditate perferendis doloribus nulla
            quia? Excepturi, molestiae?
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border border-gray-400 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>Access To A Network Of Trusted Healthcare Professional Area</p>
        </div>
        <div className="border border-gray-400 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Access To A Network Of Trusted Healthcare Professional Area</p>
        </div>
        <div className="border border-gray-400 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization</b>
          <p>Access To A Network Of Trusted Healthcare Professional Area</p>
        </div>
      </div>
    </div>
  );
};

export default About;
