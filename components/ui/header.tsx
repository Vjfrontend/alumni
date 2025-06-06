"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import oocf from "@/public/images/logo.png";
import Image from "next/image";

import MobileMenu from "./mobile-menu";
import { usePathname } from "next/navigation";
import DropdownMenu from "@/components/Dropdown";

export default function Header({ className = "" }: { className?: string }): React.ReactElement {
  const [top, setTop] = useState<boolean>(true);
  // const pathname = usePathname();
  // // const pathname = router.pathname
  // console.log(pathname);
  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  const membershipItems = [
    { label: "JOIN NOW", href: "/signup" },
    { label: "Members", href: "/membership/new" },
    { label: "OLD BOYS DATA", href: "/login" },
    { label: "Be on a committee", href: "/signup" },
  ];
const membershipItems1 = [
    { label: "Leadership", href: "/leadership" },
    { label: "History of Ijebu ode Grammar school", href: "/history" },
    { label: "History Of Jogsoba’98", href: "/about" },
    { label: "Secreteriat", href: "constitution" },
  ];

  return (
    <header className={`absolute  z-30 w-full  bg-purple-400  p-3 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className=" flex h-14 items-center justify-between gap-3 rounded-2xl  before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100), before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center justify-start">
             <Link
                  className="font-medium text-sm text-[#fafafa] border-b-2 border-transparent   hover:-translate-y-1 transition-transform duration-300  rounded-md px-2  mx-4 lg:mx-5"
                  href="/"
                >
            <Image
              className="rounded-full "
              src={oocf}
              width={60}
              height={60}
              alt="oocf"
            />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex ">
            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              <li>
                <Link
                  className="font-medium text-sm text-[#fafafa] border-b-2 border-transparent  hover:border-b-[#030442] hover:-translate-y-1 transition-transform duration-300  rounded-md  mx-4 lg:mx-5"
                  href="/"
                >
                  Home
                </Link>
              </li>
              
                 <li className="font-medium mt-1 text-sm text-[#fafafa] border-b-2 border-transparent  hover:-translate-y-1 transition-transform duration-300  rounded-md px-2  ">
                <DropdownMenu
                  title="About us"
                  items={membershipItems1}
                  className="text-[#fafafafa]"
                />
              </li>

              <li>
                <Link
                  className="font-medium text-sm text-[#fafafafa] border-b-2 border-transparent px-2  rounded-md hover:border-b-[#030442] mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/payment"
                >
                  Payment
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium text-sm text-[#fafafafa] border-b-2 border-transparent px-2  rounded-md hover:border-b-[#030442] mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  className="font-medium text-sm text-[#fafafafa] border-b-2 border-transparent px-2  rounded-md hover:border-b-[#030442] mx-4 lg:mx-5 transition duration-150 ease-in-out"
                  href="/gallery"
                >
                  Events
                </Link>
              </li>

              <li className="flex items-center">
                <DropdownMenu
                  title="Membership"
                  items={membershipItems}
                  className="text-[#fafafafa]"
                />
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
