import React from "react";
import Image from "next/image";
import ab from "@/public/images/logo.png";
import Link from "next/link";

function About() {
  return (
    <div id="about" className="   shadow-black/[0.03]  mt-20 ">
      <div className="relative flex flex-col-reverse  lg:flex-row-reverse items-center mt-16 mx-auto  ">
        <div className="lg:w-1/2   lg:order-last mt-8 lg:mt-0  ">
          <Image
            src={ab}
            layout="fit"
            width={700}
            height={200}
            className="object-contain rounded-lg  h-80 "
            alt=""
          />
          {/* <button className="bg-[#030442] mt-4 rounded-md p-2 text-white hidden sm:block ">more about us</button> */}
        </div>

        <div className="lg:w-1/2 lg:order-first   bg-purple-400 lg:p-20 p-8">
          <div className="text-center lg:text-left">
            <div className="flex text-center">
              <h2 className="text-black font-bold text-center  text-3xl pb-3">
                {" "}
                Mission
              </h2>
            </div>
          </div>
          <div className=" mb-4  ">
            <p className="text-black ">
              To develop and keep social contacts among the old boys of the
              association, alive, active and serve as a forum to promote and
              foster the relationship between the alumni, present students, the
              staff and the management of school with the basic objective to
              exchange ideas, in achieving excellence and professional
              competence and contribute to improve the quality of life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
