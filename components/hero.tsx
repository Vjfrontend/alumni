
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import Link from "next/link";
import carousel04 from "../public/images/13.jpg";
import carousel05 from "../public/images/IMG_0770.jpg";
import carousel07 from "@/public/images/12.jpg";

const slides = [
  {
    url: carousel04,
  },
  {
    url: carousel05,
  },
  {
    url: carousel07,
    // title: "A fulfilled life for every child",
    // description: "Join us to restore hope to underprivileged and underserved children",
    // buttonText: "Get Involved",
    // buttonLink: "/get-involved",
  },
];
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative bg-gray-100">
        {/* <div className="bg-black absolute w-full h-full z-10 bg-opacity-30"></div> */}
      <div className="mx-auto ">
        
        <div className="relative w-[100%] h-[80vw] pt-20 sm:h-[50vw] lg:h-[40vw]">

          <Image
            src={slides[currentIndex].url}
            layout="fill"
            className="object-cover object-top"
            alt=""
          />
          <div className="absolute bottom-0 w-full h-6 bg-gradient-to-t from-white/70 to-transparent "></div>
        </div>

        <div className="absolute top-1/2 transform -translate-y-1/2  flex-col sm:flex-row  lg:ml-12   ml-3 sm:items-start space-y-4 sm:space-y-0 text-white lg:mt-10  mt-7">
        <h2 className=" lg:ml-8 mt-6 ml-0 sm:text-2xl lg:text-3xl  font-regular  font-bold  sm:text-left ">
        Jogsoba '98</h2>
          <h2 className="text-xl lg:ml-8  ml-0 sm:text-4xl lg:text-6xl  font-sans  font-bold mb-4 sm:text-left ">
              <span className="text-white font-serif">One For All .
                 <br className="hidden lg:block" /> All For One </span>
            {/* <br className="hidden lg:block" />
            <span>Give Back</span> */}
          </h2>
          <div className=" sm:text-left   sm:mt-0">
            <p className="text-base sm:text-lg max-w-xl lg:ml-7 ml-0 lg:text-xl mb-4 ">
              A platfrom where past student of ijebu-ode grammer school ,1998 set ,reconnects ,collaborate ,and contribute towards the development of our alma mater and the community
            </p>
            <div className="space-x-4 lg:ml-7 ml-0">
              <Link href="/about">
                <button className="border border-white shadow-lg bg-purple-400 text-black  hover:text-white font-bold py-2 px-4 rounded-md">
                  Read More
                </button>
              </Link>
            
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
