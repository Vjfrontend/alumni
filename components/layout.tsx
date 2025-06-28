"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Payment and Dues", href: "/" },
  { name: "Constitution", href: "/" },
  { name: "General Meeting", href: "/" },
  { name: "Committee Meeting", href: "/" },
  { name: "Membership Status", href: "/" },
  { name: "Old Boys Data", href: "/" },
  { name: "Be On a Committee", href: "/" },
]

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-300 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden w-6 h-6 text-gray-700">
                {sidebarOpen ? <X /> : <Menu />}
              </button>
              <Link href="/">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-wide">JOGSOBA '98</h1>
              </Link>
            </div>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="hidden lg:block w-6 h-6 text-gray-700">
              <Menu />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex relative">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar */}
        <aside
          className={`
            fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white border-r-2 border-gray-200 shadow-sm transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          `}
        >
          <div className="p-4 sm:p-6 pt-4 lg:pt-6">
            <nav className="space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    block w-full text-left px-4 py-3 font-medium rounded border transition-colors
                    ${
                      pathname === item.href
                        ? "bg-gray-800 text-white"
                        : "text-gray-700 hover:bg-gray-100 border-gray-300"
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white lg:ml-0">{children}</main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white border-t-4 border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* Logo and Description */}
            <div className="md:border-r border-gray-600 md:pr-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-500 border-2 border-yellow-400 flex items-center justify-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-800 border border-gray-600"></div>
                </div>
                <span className="font-bold text-lg sm:text-xl">JOGSOBA '98</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                A platform where past students of IJEBU-ODE GRAMMAR SCHOOL 1998 Set, reconnect, collaborate, and
                contribute towards the development of our alma mater and the community.
              </p>
            </div>

            {/* Useful Links */}
            <div className="md:border-r border-gray-600 md:pr-8">
              <h4 className="text-lg sm:text-xl font-bold mb-6 border-b border-gray-600 pb-2">USEFUL LINKS</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/join-committee"
                    className="text-gray-300 hover:text-white border-b border-transparent hover:border-white pb-1 text-sm sm:text-base"
                  >
                    Committee
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-300 hover:text-white border-b border-transparent hover:border-white pb-1 text-sm sm:text-base"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-gray-300 hover:text-white border-b border-transparent hover:border-white pb-1 text-sm sm:text-base"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-6 border-b border-gray-600 pb-2">CONTACT US</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base">Phone: +98/654 321 000</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base break-all">Email: youremail@mail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-yellow-500 text-black text-center py-3 border-t-2 border-yellow-400">
          <p className="font-bold tracking-wide text-sm sm:text-base px-4">Copyright © 2024 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}
