import React from "react";
import Image from "next/image";
import two from "@/public/images/two2.jpg";
import one from "@/public/images/one.jpg";
import three from "@/public/images/three.jpg";
import four from "@/public/images/four.jpg";
import five from "@/public/images/five .jpg";

import FeaturesPlanet from "@/components/features-planet";

function MoreAbout() {
  return (
    <div className="mt-24 max-w-[80%] mx-auto font-serif">
      <h1 className="font-serif text-lg  mb-6 font-bold text-center  text-[#030442]">
        Our Global Mission And Vision{" "}
      </h1>
      <h2>
        Our vision is to create a society where every child has the opportunity
        to live a fulfilled and meaningful life. We strive to combat poverty by
        providing underserved children with essential educational materials,
        school uniforms, and nutrition. Through these efforts, we aim to empower
        children to overcome obstacles, achieve their goals, and realize their
        full potential. By addressing their fundamental needs, we hope to create
        lasting change and a brighter future for the next generation.
      </h2>
      <FeaturesPlanet />
      <h2 className="text-center text-xl mb-10 font-bold text-[#030442]">
        Meet Our Board Of Trust{" "}
      </h2>
      <div className="flex lg:flex-row flex-col items-center space-x-4  w-full">
        <Image
          src={two}
          layout="intrinsic"
          width={400}
          height={200}
          className="object-contain   rounded-lg "
          alt=""
        />
        <div>
          <h2 className="">
            <span className="text-[#030442]">
              {" "}
              Oluwadamilola Odunola Obadimeji{" "}
            </span>
            is a legal practitioner who has been an attorney for over 12 years.
            She attended the prestigious University of Ilorin and holds a
            master's degree in Law. She is the principal partner of
            Oluwadamilola Obadimeji Consults, a law firm located in Ilorin,
            Kwara State, which specializes in criminal litigation, civil
            litigation, corporate law, property law, and family Law.
            Oluwadamilola Odunola Obadimeji is committed to helping people
            achieve justice in a system that is far too often unfair, and also
            giving back to the society.
          </h2>
        </div>
      </div>

      <div className="flex items-center lg:flex-row flex-col-reverse space-x-4 w-full mt-8">
        <div className="flex-1 text-right lg:text-left">
          <h2 className="">
            <span className="text-[#030442]">Fabiyi Oloruntobi Victor</span> is
            a graduate of Medical Physiology from the University of Ilorin,
            Nigeria. He holds a Master’s in Business Administration (MBA) from
            Ahmadu Bello University, Zaria, Nigeria, and a Certificate in
            Leadership and Management in Health (Cert.LMH) awarded by the
            University of Washington. With over a decade of experience in
            pharmaceutical sales, he currently serves as the Regional Sales
            Manager at Fidson Healthcare plc, one of Nigeria's leading
            pharmaceutical companies.
          </h2>
        </div>
        <div className="flex-shrink-0">
          <Image
            src={one}
            layout="intrinsic"
            width={400}
            height={200}
            className="object-contain rounded-lg"
            alt=""
          />
        </div>
      </div>

      <div className="flex items-center lg:flex-row flex-col space-x-4 mt-8  w-full">
        <Image
          src={three}
          layout="intrinsic"
          width={400}
          height={200}
          className="object-contain   rounded-lg "
          alt=""
        />
        <div>
          <h2 className="">
            <span className="text-[#030442]"> Fabiyi Olasunmbo Dorcas </span>
            is a passionate education enthusiast dedicated to empowering youth
            to achieve their full potential. She holds a B.A. in English
            Literature from the University of Abuja and a Postgraduate Diploma
            in Education from the University of Ilorin. Additionally, she is
            certified by the Teachers Registration Council of Nigeria (TRCN). As
            a committed educator, she currently serves as a Subject Teacher at
            Trillium Learning Centre in Ilorin.
          </h2>
        </div>
      </div>
      <div className="flex items-center lg:flex-row flex-col-reverse space-x-4 w-full mt-8">
        <div className="flex-1 text-right lg:text-left">
          <h2 className="">
            <span className="text-[#030442] ">Oluwasegun </span> is Oluwasegun
            holds a Bachelor degree in Pharmacy from University of Ibadan in
            2011. He also hold An MBA from Obafemi Awolowo University ile Ife
            where he majors in Marketing. Oluwasegun is a seasoned sales man
            having worked with top pharmaceutical company both indigenous and
            multinational. He has work at Biofem Pharmaceuticals ltd, also as
            Specialist Products adviser with Novo Nordisk, He retired as A top
            performer Field sales representative at Merck to start his own
            Community Pharmacy. Lovida Pharmacy has grown to be a household name
            in Ilorin metropolis and Kwara state at Large.
          </h2>
        </div>
        <div className="flex-shrink-0">
          <Image
            src={four}
            layout="intrinsic"
            width={400}
            height={200}
            className="object-contain rounded-lg"
            alt=""
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col items-center space-x-4 mt-8  w-full">
        <Image
          src={five}
          layout="intrinsic"
          width={300}
          height={200}
          className="object-contain   rounded-lg "
          alt=""
        />
        <div>
          <h2 className="">
            <span className="text-[#030442]">
              {" "}
              Alatishe-Muhammad Bilqis Wuraola {" "}
            </span>
            Alatishe-Muhammad Bilqis Wuraola is a distinguished medical doctor
            with extensive qualifications and experience. She obtained her
            M.B.B.S from Ahfad University for Women in Khartoum, Sudan.
            Additionally, she holds a Master's in Public Health (MPH) from the
            University of Ilorin, Nigeria, and an MBA from Ahmadu Bello
            University, Zaria, Nigeria. Dr. Alatishe-Muhammad is also a public
            health consultant and serves as a lecturer at both the University of
            Ilorin and the University of Ilorin Teaching Hospital in Ilorin,
            Kwara State, Nigeria. With over a decade in the medical profession,
            she brings a wealth of expertise to her field. Currently, she is the
            Financial Secretary for the Medical Women Association of Nigeria.
            Her passion lies in improving the well-being of children and others.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default MoreAbout;
