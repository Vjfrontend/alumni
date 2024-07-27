// import Image from 'next/image'
// import Link from 'next/link'

// import HeroImage from '@/public/images/hero-image.png'

// export default function Hero() {
//   return (
//     <section className="relative">
//       {/* Bg */}
//       <div className="absolute inset-0 rounded-bl-[100px] bg-gray-50 pointer-events-none -z-10" aria-hidden="true" />
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="pt-32 pb-12 md:pt-40 md:pb-20">
//           {/* Hero content */}
//           <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row">
//             {/* Content */}
//             <div className="md:w-[640px]">
//               {/* Copy */}
//               <h1 className="h1 font-cabinet-grotesk mb-6" data-aos="fade-right" data-aos-delay="100">
//                 The platform for creative{' '}
//                 <span className="relative inline-flex text-blue-500">
//                   <svg
//                     className="absolute left-0 top-full -mt-4 max-w-full -z-10"
//                     width="220"
//                     height="24"
//                     viewBox="0 0 220 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M134.66 13.107c-10.334-.37-20.721-.5-31.12-.291l-2.6.06c-4.116.04-8.193.602-12.3.749-14.502.43-29.029 1.196-43.514 2.465-6.414.63-12.808 1.629-19.04 2.866-7.93 1.579-16.113 3.71-23.367 5.003-2.211.374-3.397-1.832-2.31-4.906.5-1.467 1.838-3.456 3.418-4.813a16.047 16.047 0 0 1 6.107-3.365c16.88-4.266 33.763-6.67 51.009-7.389C71.25 3.187 81.81 1.6 92.309.966c11.53-.65 23.097-.938 34.66-.96 7.117-.054 14.25.254 21.36.318l16.194.803 4.62.39c3.85.32 7.693.618 11.53.813 8.346.883 16.673.802 25.144 2.159 1.864.276 3.714.338 5.566.873l.717.225c6.162 1.977 7.92 3.64 7.9 7.197l-.003.203c-.017.875.05 1.772-.112 2.593-.581 2.762-4.066 4.12-8.637 3.63-13.696-1.06-27.935-3.332-42.97-4.168-11.055-.83-22.314-1.459-33.596-1.603l-.022-.332Z"
//                       fill="#D1D5DB"
//                       fillRule="evenodd"
//                     />
//                   </svg>
//                   minds
//                 </span>
//                 .
//               </h1>
//               <p className="text-xl text-gray-500 mb-10" data-aos="fade-right" data-aos-delay="200">
//                 Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
//               </p>
//               {/* Buttons */}
//               <div
//                 className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-20"
//                 data-aos="fade-right"
//                 data-aos-delay="300"
//               >
//                 <div>
//                   <Link className="btn text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm" href="/signup">
//                     Join The Community
//                   </Link>
//                 </div>
//                 <div>
//                   <Link className="btn text-gray-600 bg-white hover:bg-blue-100 hover:text-blue-600 w-full shadow-sm" href="/signin">
//                     Sign In
//                   </Link>
//                 </div>
//               </div>
//               {/* Stats */}
//               <div className="inline-flex items-center space-x-4 md:space-x-6" data-aos="fade-right" data-aos-delay="400">
//                 <div>
//                   <div className="font-cabinet-grotesk text-2xl font-extrabold">27M</div>
//                   <div className="text-gray-500">Inspiration</div>
//                 </div>
//                 <svg className="fill-gray-300" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     d="M2.039 0c.099.006 1.237.621 1.649.787.391.17.735.41 1.067.667.682.515 1.387.995 2.089 1.48.102.071.196.153.284.245l.497-.172 1.76-.342.13-.097a.402.402 0 0 1 .206-.09l.107-.012c.218-.035.677-.132 1.143-.122l1.11-.062c.16-.001 1.67.295 1.691.339a.639.639 0 0 1 .026.129c.018.125-.035.29.09.352.045.022.167.292.084.41l-.137.203a.726.726 0 0 1-.147.164 5.18 5.18 0 0 1-.658.404l-.182.089a.534.534 0 0 0-.257.327c-.046.133-.134.134-.204.189-.376.26-.736.581-1.102.868L11 5.965l.219.284.55.784c.093.129.187.255.286.375.052.073.137.1.147.242.022.324.182.399.314.529.184.179.363.368.528.581.081.107.123.285.179.437.049.138-.138.362-.186.37-.137.023-.128.197-.178.312a.618.618 0 0 1-.058.116c-.03.034-1.375-.105-1.67-.162l-.09-.028-1.004-.368c-.552-.157-1.05-.462-1.167-.498-.117-.043-.19-.173-.275-.278l-1.604-.847c-.138-.113-.294-.199-.433-.311l-.162.083-.174.068c-.8.26-1.602.514-2.39.808-.385.15-.778.278-1.198.327-.439.038-1.692.294-1.788.271a3.114 3.114 0 0 1-.505-.227c-.09-.049-.306-.58-.324-.78-.056-.628.013-1.007.285-.96.11.02.29-.51.395-.536.06-.016.165-.088.287-.182l.334-.266c.157-.126.297-.234.363-.252.697-.205 1.325-.62 2.004-.878l.063-.035.07-.057-.01-.013a.425.425 0 0 0-.094-.115c-.586-.448-1.082-1.031-1.7-1.434-.058-.036-.165-.181-.284-.349L1.55 2.72c-.12-.168-.233-.316-.3-.356-.095-.056-.131-.619-.24-.632C.734 1.696.765 1.31.982.725 1.05.537 1.396.09 1.495.07c.192-.037.38-.07.544-.07Z"
//                     fillRule="evenodd"
//                   />
//                 </svg>
//                 <div>
//                   <div className="font-cabinet-grotesk text-2xl font-extrabold">44K</div>
//                   <div className="text-gray-500">Collections</div>
//                 </div>
//                 <svg className="fill-gray-300" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     d="M2.039 0c.099.006 1.237.621 1.649.787.391.17.735.41 1.067.667.682.515 1.387.995 2.089 1.48.102.071.196.153.284.245l.497-.172 1.76-.342.13-.097a.402.402 0 0 1 .206-.09l.107-.012c.218-.035.677-.132 1.143-.122l1.11-.062c.16-.001 1.67.295 1.691.339a.639.639 0 0 1 .026.129c.018.125-.035.29.09.352.045.022.167.292.084.41l-.137.203a.726.726 0 0 1-.147.164 5.18 5.18 0 0 1-.658.404l-.182.089a.534.534 0 0 0-.257.327c-.046.133-.134.134-.204.189-.376.26-.736.581-1.102.868L11 5.965l.219.284.55.784c.093.129.187.255.286.375.052.073.137.1.147.242.022.324.182.399.314.529.184.179.363.368.528.581.081.107.123.285.179.437.049.138-.138.362-.186.37-.137.023-.128.197-.178.312a.618.618 0 0 1-.058.116c-.03.034-1.375-.105-1.67-.162l-.09-.028-1.004-.368c-.552-.157-1.05-.462-1.167-.498-.117-.043-.19-.173-.275-.278l-1.604-.847c-.138-.113-.294-.199-.433-.311l-.162.083-.174.068c-.8.26-1.602.514-2.39.808-.385.15-.778.278-1.198.327-.439.038-1.692.294-1.788.271a3.114 3.114 0 0 1-.505-.227c-.09-.049-.306-.58-.324-.78-.056-.628.013-1.007.285-.96.11.02.29-.51.395-.536.06-.016.165-.088.287-.182l.334-.266c.157-.126.297-.234.363-.252.697-.205 1.325-.62 2.004-.878l.063-.035.07-.057-.01-.013a.425.425 0 0 0-.094-.115c-.586-.448-1.082-1.031-1.7-1.434-.058-.036-.165-.181-.284-.349L1.55 2.72c-.12-.168-.233-.316-.3-.356-.095-.056-.131-.619-.24-.632C.734 1.696.765 1.31.982.725 1.05.537 1.396.09 1.495.07c.192-.037.38-.07.544-.07Z"
//                     fillRule="evenodd"
//                   />
//                 </svg>
//                 <div>
//                   <div className="font-cabinet-grotesk text-2xl font-extrabold">2M+</div>
//                   <div className="text-gray-500">Creatives</div>
//                 </div>
//               </div>
//             </div>
//             {/* Image */}
//             <div
//               className="max-w-sm mx-auto md:max-w-none md:absolute md:left-[40rem] md:ml-16 lg:ml-32 xl:ml-52 mt-12 md:-mt-12"
//               data-aos="fade-left"
//               data-aos-duration="1100"
//             >
//               <Image src={HeroImage} className="md:max-w-none" width="584" height="659" priority alt="Hero Illustration" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// import Link from "next/link";
// import carousel04 from "../public/images/annie-spratt-cVEOh_JJmEE-unsplash.jpg";
// import carousel05 from "../public/images/bill-wegener-8ldqRkOk5oo-unsplash.jpg";
// import carousel07 from "../public/images/Property 1=Rectangle 1.png";

// const slides = [
//   {
//     url: carousel04,
//   },
//   {
//     url: carousel05,
//   },
//   {
//     url: carousel07,
//     // title: "A fulfilled life for every child",
//     // description: "Join us to restore hope to underprivileged and underserved children",
//     // buttonText: "Get Involved",
//     // buttonLink: "/get-involved",
//   },
// ];
// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className="relative bg-[#F5FFFA]">
//       <div className="mx-auto justify-center flex ">
//         {/* Image */}
//         {/* <div className="relative w-[100%] h-[80vw] pt-20 sm:h-[50vw] lg:h-[40vw]">
//   <Image
//     src={slides[currentIndex].url}
//     layout="fill"
//     className="object-cover"
//     alt=""
//   />
//   <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-white/80 to-transparent"></div>
// </div> */}
//         <div className="relative w-[100%] h-[80vw] pt-20 sm:h-[50vw] lg:h-[40vw]">
//           <Image
//             src={slides[currentIndex].url}
//             layout="fill"
//             className="object-cover"
//             alt=""
//           />
//           <div className="absolute bottom-0 w-full h-6 bg-gradient-to-t from-white/70 to-transparent "></div>
//         </div>

//         <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col sm:flex-row lg:items-center  justify-center sm:items-start space-y-4 sm:space-y-0 text-white lg:mt-0 mt-8">
//           <h2 className="text-xl ml-8 sm:text-4xl lg:text-6xl font-semibold text-center  sm:text-left">
//             <span>A fulfilled life</span>
//             <br className="hidden lg:block" />
//             <span className=" ml-1">for every <span className="text-[#030442]">child</span></span>
//           </h2>
//           <div className="text-center sm:text-left lg:text-right  lg:ml-80 mt-4 sm:mt-0">
//             <p className="text-base sm:text-lg text-center   lg:text-xl mb-4 ">
//               <span>Join us to restore hope to underprivileged and</span>
//               <br />
//               <span>underserved children</span>
//             </p>
//             <div className="space-x-4 justify-center flex">
//               <Link href="#">
//                 <button className="border border-white shadow-lg bg-white text-black hover:bg-[#030442] hover:text-white font-bold py-2 px-4 rounded-md">
//                   Get in touch
//                 </button>
//               </Link>
//               <Link href="#">
//                 <button className="border border-white  shadow-lg  hover:bg-[#030442] text-white font-bold py-2 px-4 rounded-md">
//                   Donate
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//         {/* <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col sm:flex-row lg:items-center text-center sm:items-start space-y-4 sm:space-y-0 text-white lg:mt-0 mt-8">
//       <h2 className="text-xl sm:text-4xl lg:text-6xl mr-8 font-semibold text-center sm:text-left">
//         <span>A fulfilled life</span>
//         <br className="hidden lg:block" />
//         <span className="ml-1">for every child</span>
//       </h2>
//       <div className="text-center sm:text-left lg:text-right  lg:ml-80 mt-4 sm:mt-0">
//         <p className="text-base sm:text-lg  text-center lg:text-xl mb-4">
//           <span>Join us to restore hope to underprivileged and</span>
//           <br />
//           <span>underserved children</span>
//         </p>
//         <div className="flex justify-center sm:justify-start space-x-4">
//           <Link href="#">
//             <button className="border border-white bg-white text-black font-bold py-2 px-4 rounded-md">
//               Get in touch
//             </button>
//           </Link>
//           <Link href="#">
//             <button className="border border-white text-white font-bold py-2 px-4 rounded-md">
//               Donate
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div> */}
//       </div>
//     </div>
//   );
// };

// export default Hero;
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import Link from "next/link";
import carousel04 from "../public/images/annie-spratt-cVEOh_JJmEE-unsplash.jpg";
import carousel05 from "../public/images/bill-wegener-8ldqRkOk5oo-unsplash.jpg";
import carousel07 from "../public/images/annie-spratt-cVEOh_JJmEE-unsplash.jpg";

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
      <div className="mx-auto ">
        
        <div className="relative w-[100%] h-[80vw] pt-20 sm:h-[50vw] lg:h-[40vw]">
          <Image
            src={slides[currentIndex].url}
            layout="fill"
            className="object-cover"
            alt=""
          />
          <div className="absolute bottom-0 w-full h-6 bg-gradient-to-t from-white/70 to-transparent "></div>
        </div>

        <div className="absolute top-1/2 transform -translate-y-1/2  flex-col sm:flex-row  lg:ml-12 font-gamaamli  ml-3 sm:items-start space-y-4 sm:space-y-0 text-white lg:mt-10  mt-7">
          <h2 className="text-xl lg:ml-8  ml-0 sm:text-4xl lg:text-6xl  font-regular  font-bold mb-7 sm:text-left ">
            <span>Empowering Lives,</span>
            <br className="hidden lg:block" />
             Enriching <span className="text-[#030442]">Childhoods</span>
          </h2>
          <div className=" sm:text-left   sm:mt-0">
            <p className="text-base sm:text-lg  lg:ml-7 ml-0 lg:text-xl mb-4 ">
              <span>Join us in restoring hope to underserved and </span>
              <br />
              <span>underprivileged children.</span>
            </p>
            <div className="space-x-4 lg:ml-7 ml-0">
              <Link href="#contact">
                <button className="border border-white shadow-lg bg-white text-black hover:bg-[#030442] hover:text-white font-bold py-2 px-4 rounded-md">
                  Get in touch
                </button>
              </Link>
              <Link href="#">
                <button className="border border-white  shadow-lg  hover:bg-[#030442] text-white font-bold py-2 px-4 rounded-md">
                  Donate
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
