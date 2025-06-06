"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import DropdownMenu from "@/components/Dropdown";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
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
    { label: "Secreteriat", href: "/constitution" },
  ];

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`group inline-flex h-8 w-8 items-center justify-center bg-gray-100 text-center text-gray-800 transition ${
          mobileNavOpen && "active"
        }`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="pointer-events-none h-4 w-4 fill-current"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-expanded=true]]:rotate-[315deg] group-[[aria-expanded=true]]:[x:0] group-[[aria-expanded=true]]:[y:7]"
            y="2"
            x="7"
            width="9"
            height="2"
            rx="1"
          ></rect>
          <rect
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-[[aria-expanded=true]]:rotate-45"
            y="7"
            width="16"
            height="2"
            rx="1"
          ></rect>
          <rect
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-[[aria-expanded=true]]:rotate-[135deg] group-[[aria-expanded=true]]:[x:0] group-[[aria-expanded=true]]:[y:7]"
            y="12"
            width="9"
            height="2"
            rx="1"
          ></rect>
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute left-0 top-full z-20 w-full rounded-xl bg-gray-100 shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="p-2 text-sm">
            <li>
              <Link
                href="/"
                className="flex rounded-lg px-2 py-1.5 text-gray-700 pointer-events-auto"
                onClick={() => setMobileNavOpen(false)}
              >
                Home
              </Link>
            </li>
             <li
                className="flex rounded-lg px-2  py-1.5 text-gray-700 pointer-events-auto"
              >
                <DropdownMenu
                  title="About us"
                  items={membershipItems1}
                  className=""
                />
              </li>
            <li>
              <Link
                href="/payment"
                className="flex rounded-lg px-2 py-1.5 text-gray-700 pointer-events-auto"
                onClick={() => setMobileNavOpen(false)}
              >
                Payment
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex rounded-lg px-2 py-1.5 text-gray-700 pointer-events-auto"
                onClick={() => setMobileNavOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="flex rounded-lg px-2 py-1.5 text-gray-700 pointer-events-auto"
                onClick={() => setMobileNavOpen(false)}
              >
                Events
              </Link>
            </li>
            <li className="flex  rounded-lg   text-gray-700 pointer-events-auto">
              <DropdownMenu
                title="Membership"
                items={membershipItems}
                className="text-black"
              />
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  );
}
