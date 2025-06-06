"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
// Utility function to conditionally join class names
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

interface DropdownProps {
  title: string;
  items: {
    label: string;
    href: string;
  }[];
  className?: string;
}

export default function DropdownMenu({
  title,
  items,
  className = "",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn("relative lg:mx-4 -mx-3", className)} ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={cn(
          "flex items-center font-medium text-sm px-3 py-2 rounded-md transition duration-150 ease-in-out",
          isOpen
            ? "bg-[#030442]/10 border-b-2 border-[#030442]"
            : "border-b-2 border-transparent hover:bg-[#030442]/5"
        )}
      >
        {title}
        <ChevronDown
          className={cn(
            "ml-1 h-4 w-4 transition-transform duration-200",
            isOpen ? "rotate-180" : ""
          )}
        />
      </button>

      {isMounted && isOpen && (
        <ul className="absolute mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50 animate-in fade-in slide-in-from-top-5 duration-200">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#030442] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
