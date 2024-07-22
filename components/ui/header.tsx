// import Link from "next/link";
// import MobileMenu from "./mobile-menu"; // Ensure this component is properly imported
// import oocf from "@/public/images/oocf.jpg";
// import Image from "next/image";
// const Header = () => {
//   return (
//     <header className="fixed z-30 bg-opacity-50 backdrop-blur-md rounded-md top-0 shadow-md w-full">
//       <div className="px-4 sm:px-6 mx-auto  border-b-2">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           <Image
//             className="rounded-full"
//             src={oocf}
//             width={60}
//             height={60}
//             alt="oocf"
//           />

//           {/* Desktop navigation */}
//           <nav className="hidden md:flex ">
//             {/* Desktop menu links */}
//             <ul className="flex grow justify-center flex-wrap items-center">
//               <li>
//                 <Link
//                   className="font-medium text-sm text-[#030442] border-b-2 border-transparent  hover:border-b-white hover:-translate-y-1 transition-transform duration-300  rounded-md px-2  mx-4 lg:mx-5"
//                   href="#"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="font-medium text-sm text-[#030442] border-b-2 border-transparent rounded-md hover:border-b-white  px-2  mx-4 lg:mx-5 transition duration-150 ease-in-out"
//                   href="#"
//                 >
//                   About
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   className="font-medium text-sm text-[#030442] border-b-2 border-transparent px-2  rounded-md hover:border-b-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
//                   href="#"
//                 >
//                   Impact
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="font-medium text-sm text-[#030442] border-b-2 border-transparent px-2  rounded-md hover:border-b-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
//                   href="#"
//                 >
//                   Outreach
//                 </Link>
//               </li>

//               <li>
//                 <Link
//                   className="font-medium text-sm text-[#030442] border-b-2 border-transparent px-2  rounded-md hover:border-b-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
//                   href="#"
//                 >
//                   Testimonials
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="font-medium text-sm text-[#030442] border-b-2 border-transparent px-2  rounded-md hover:border-b-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
//                   href="#"
//                 >
//                   Media
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   className="font-medium text-sm text-[#030442] border-b-2 border-transparent px-2  rounded-md hover:border-b-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
//                   href="#"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </nav>

//           <MobileMenu />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import oocf from "@/public/images/oocf.jpg";
import Image from "next/image";

import MobileMenu from "./mobile-menu";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Image
              className="rounded-full"
              src={oocf}
              width={0}
              height={40}
              alt="oocf"
            />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex ">
            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              <li>
                <Link
                  className="font-medium text-sm text-[#030442] border-b-2 border-transparent  hover:border-b-white hover:-translate-y-1 transition-transform duration-300  rounded-md px-2  mx-4 lg:mx-5"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-[#030442] border-b-2 border-transparent rounded-md hover:border-b-white  px-2  mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="#about"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  className="font-medium text-sm text-[#030442] border-b-2 border-transparent px-2  rounded-md hover:border-b-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="#impact"
                >
                  Impact
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-[#030442] border-b-2 border-transparent px-2  rounded-md hover:border-b-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/outreach"
                >
                  Outreach
                </Link>
              </li>

              <li>
                <Link
                  className="font-medium text-sm text-[#030442] border-b-2 border-transparent px-2  rounded-md hover:border-b-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="#testimonials"
                >
                  Testimonials
                </Link>
              </li>
              {/* <li>
                <Link
                  className="font-medium text-sm text-[#030442] border-b-2 border-transparent px-2  rounded-md hover:border-b-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="#"
                >
                  Media
                </Link>
              </li> */}
              <li>
                <Link
                  className="font-medium text-sm text-[#030442] border-b-2 border-transparent px-2  rounded-md hover:border-b-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="#contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
