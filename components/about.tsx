import React from "react";
import Image from "next/image";
import ab from "@/public/images/logo1.png";
import Link from "next/link";

function About() {
  return (
    <div id="about" className="   shadow-black/[0.03]  mt-20 ">
      <div className="relative flex flex-col-reverse  lg:flex-row-reverse items-center mt-16 mx-auto  ">
        <div className="lg:w-1/2  bg-gray-100 lg:order-last mt-8 lg:mt-0  ">
          <Image
            src={ab}
            layout="fit"
            // width={700}
            // height={200}
            className="object-contain rounded-lg  h-80 "
            alt=""
          />
          {/* <button className="bg-[#030442] mt-4 rounded-md p-2 text-white hidden sm:block ">more about us</button> */}
        </div>

        <div className="lg:w-1/2 lg:order-first   bg-purple-400 lg:p-20 p-8">
          <div className="text-center lg:text-left">
            <div className="flex text-center">
              <h2 className="text-yellow-400 font-mono text-center text-3xl pb-3">
                {" "}
                Mission
              </h2>
            </div>
          </div>
          <div className=" mb-4  ">
            <p className="text-black ">
              to build a strong networkof alumni,fater educational and
              professional growth ,and contribute meaningfully to the
              development of ijebu-ode grammer school and society at large
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
