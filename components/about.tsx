import React from "react";
import Image from "next/image";
import ab from "@/public/images/newlogo.png";
import Link from "next/link";

function About() {
  return (
    <div id="about" className="bg-gray-100  shadow-black/[0.03]  mt-20 ">
      <div className="relative flex flex-col-reverse  lg:flex-row items-center mt-16 mx-auto max-w-[90%] ">
        <div className="lg:w-1/2 lg:order-last   lg:ml-6">
          <Image
            src={ab}
            layout="fit"
            // width={700}
            // height={200}
            className="object-contain rounded-lg  h-80 shadow-lg "
            alt=""
          />
          {/* <button className="bg-[#030442] mt-4 rounded-md p-2 text-white hidden sm:block ">more about us</button> */}
        </div>

        <div className="lg:w-1/2 lg:order-first lg:mr-6">
          <div className="text-center lg:text-left">
            <div className="flex text-center">
              <h2 className="text-[#030442] font-bold text-center text-xl pb-3">
                {" "}
                About us
              </h2>
            </div>

            <h2 className="text-[#030442] text-lg  font-bold">
              Welcome to Oluwole Oloruntobi Care Foundation
            </h2>
          </div>
          <div className=" mb-4">
            <p className="text-black ">
              The Oluwole Oloruntobi Care Foundation (OOCF) is a
              non-governmental organization dedicated to creating empowerment
              programs for youths, women, and children, focusing on health,
              safety, livelihood, and support for the less privileged in
              society.
            </p>
          </div>

          <button className="bg-[#030442] rounded-md p-2 mt-4 text-white  hover:bg-white hover:text-[#030442] shadow-lg  mb-3 ">
            <Link href="/more-about"> More About Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
