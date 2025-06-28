"use client"

import type React from "react"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Menu, X, LogOut, Home, User, CreditCard, Users, Calendar, FileText, Settings, Bell } from "lucide-react"
import Link from "next/link"

interface Member {
  email: string
  name: string
  membershipId: string
  status: string
}

const dashboardNavigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "My Profile", href: "/dashboard/profile", icon: User },
  { name: "Payments & Dues", href: "/dashboard/donation", icon: CreditCard },
  { name: "Membership Status", href: "/dashboard/membership-status", icon: Users },
  { name: "Events & Meetings", href: "/dashboard/events", icon: Calendar },
  { name: "Documents", href: "/dashboard/documents", icon: FileText },
  // { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // const [member, setMember] = useState<Member | null>(null)
  // const [loading, setLoading] = useState(true)

  const router = useRouter()
  const pathname = usePathname()

  // const isLoginPage = pathname === "/dashboard/login"

  // useEffect(() => {
  //   if (!isLoginPage) {
  //     checkAuth()
  //   } else {
  //     setLoading(false)
  //   }
  // }, [isLoginPage])

  // const checkAuth = () => {
  //   const token = document.cookie
  //     .split("; ")
  //     .find((row) => row.startsWith("dashboard-auth="))
  //     ?.split("=")[1]

  //   if (token) {
  //     try {
  //       const decoded = Buffer.from(token, "base64").toString()
  //       const [email, membershipId] = decoded.split(":")

  //       setMember({
  //         email,
  //         name: email === "admin@jogsoba98.com" ? "Admin User" : "Joshua Davids Praise",
  //         membershipId,
  //         status: email === "admin@jogsoba98.com" ? "admin" : "active",
  //       })
  //     } catch (error) {
  //       console.error("Invalid token")
  //       handleLogout()
  //     }
  //   } else {
  //     router.push("/dashboard/login")
  //   }
  //   setLoading(false)
  // }

  // const handleLogout = () => {
  //   document.cookie = "dashboard-auth=; path=/dashboard; expires=Thu, 01 Jan 1970 00:00:01 GMT"
  //   setMember(null)
  //   router.push("/dashboard/login")
  // }

  // if (isLoginPage) {
  //   return children
  // }

  // if (loading) {
  //   return (
  //     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
  //       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
  //     </div>
  //   )
  // }

  // if (!member) {
  //   return null
  // }

  return (

  <div className=" flex flex-col lg:flex-row bg-gray-50">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`absolute inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 bg-purple-400">
          <h1 className="text-xl font-bold text-white">JOGSOBA '98</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-green-100 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Member Info */}
        {/* <div className="p-4 border-b border-gray-200 bg-green-50">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center">
              <span className="text-white font-medium text-sm">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{member.name}</p>
              <p className="text-xs text-gray-500">ID: {member.membershipId}</p>
              <p className="text-xs text-green-600 capitalize font-medium">{member.status} Member</p>
            </div>
          </div>
        </div> */}

        <nav className="mt-4 px-2 space-y-1">
          {dashboardNavigation.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "bg-green-100 text-purple-900 border-r-4 border-purple-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Icon
                  className={`mr-3 h-5 w-5 flex-shrink-0 ${
                    isActive
                      ? "text-purple-400"
                      : "text-gray-400 group-hover:text-gray-500"
                  }`}
                />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          {/* <button
            onClick={handleLogout}
            className="w-full flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <LogOut className="mr-3 h-5 w-5 text-gray-400" />
            Sign out
          </button> */}
          <Link
            href="/"
            className="mt-2 w-full flex items-center px-2 py-2 text-sm font-medium text-redgi-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <Home className="mr-3 h-5 w-5 text-red-400" />
            LogOut
          </Link>
        </div>
      </div>

      <div className="w-full">
        <div className="sticky top-0 z-10 bg-white shadow-sm  w-full border-b border-gray-200">
          <div className="flex items-center justify-between  w-full px-4 py-5">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
            >
              <Menu className="h-6 w-6" />
            </button>

            <div className="flex items-center space-x-1">
              <span className="text-sm text-gray-500">Member Dashboard</span>
              <Bell className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <main className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  )
}
