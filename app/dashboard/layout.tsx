"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Menu, X, LogOut, Home, User, CreditCard, Users, Calendar, FileText, Bell } from "lucide-react"
import Link from "next/link"

interface Member {
  email: string
  name: string
  membershipId: string
  status: string
  firstName?: string
  lastName?: string
}

const dashboardNavigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "My Profile", href: "/dashboard/profile", icon: User },
  { name: "Payments & Dues", href: "/dashboard/donation", icon: CreditCard },
  { name: "Membership Status", href: "/dashboard/membership-status", icon: Users },
  { name: "Events & Meetings", href: "/dashboard/events", icon: Calendar },
  { name: "Documents", href: "/dashboard/documents", icon: FileText },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [member, setMember] = useState<Member | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = () => {
    try {
      // Check multiple sources for authentication token
      const token = getAuthToken()

      if (!token) {
        console.log("No authentication token found")
        redirectToLogin()
        return
      }

      // Validate and decode token
      const memberData = validateToken(token)

      if (memberData) {
        setMember(memberData)
      } else {
        console.log("Invalid token")
        redirectToLogin()
        return
      }
    } catch (error) {
      console.error("Authentication error:", error)
      redirectToLogin()
      return
    }

    setLoading(false)
  }

  const getAuthToken = (): string | null => {
    if (typeof window === "undefined") return null

    // Try localStorage first (from our login page)
    const localStorageToken = localStorage.getItem("authToken")
    if (localStorageToken) {
      return localStorageToken
    }

    // Try cookies as fallback (for legacy compatibility)
    const cookieToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("dashboard-auth="))
      ?.split("=")[1]

    if (cookieToken) {
      return cookieToken
    }

    // Try sessionStorage as another fallback
    const sessionToken = sessionStorage.getItem("authToken")
    if (sessionToken) {
      return sessionToken
    }

    return null
  }

  const validateToken = (token: string): Member | null => {
    try {
      // Handle mock tokens from our login page
      // if (token.startsWith("mock-")) {
      //   if (token.includes("admin")) {
      //     return {
      //       email: "admin@jogsoba98.com",
      //       name: "Admin User",
      //       membershipId: "ADMIN-001",
      //       status: "admin",
      //       firstName: "Admin",
      //       lastName: "User",
      //     }
      //   } else {
      //     return {
      //       email: "test@example.com",
      //       name: "Test User",
      //       membershipId: "TEST-001",
      //       status: "active",
      //       firstName: "Test",
      //       lastName: "User",
      //     }
      //   }
      // }

      // Handle JWT tokens
      if (token.startsWith("eyJ")) {
        try {
          const payload = JSON.parse(atob(token.split(".")[1]))
          return {
            email: payload.email || payload.sub,
            name: payload.name || `${payload.firstName || ""} ${payload.lastName || ""}`.trim(),
            membershipId: payload.membershipId || payload.id || "MEMBER-001",
            status: payload.role || payload.status || "active",
            firstName: payload.firstName,
            lastName: payload.lastName,
          }
        } catch (jwtError) {
          console.error("JWT decode error:", jwtError)
          return null
        }
      }

      // Handle base64 encoded tokens (legacy format)
      if (token.length > 10) {
        try {
          const decoded = Buffer.from(token, "base64").toString()
          const [email, membershipId] = decoded.split(":")

          if (email && membershipId) {
            return {
              email,
              name: email === "admin@jogsoba98.com" ? "Admin User" : "Joshua Davids Praise",
              membershipId,
              status: email === "admin@jogsoba98.com" ? "admin" : "active",
            }
          }
        } catch (base64Error) {
          console.error("Base64 decode error:", base64Error)
        }
      }

      return null
    } catch (error) {
      console.error("Token validation error:", error)
      return null
    }
  }

  const redirectToLogin = () => {
    // Clear any existing tokens
    if (typeof window !== "undefined") {
      localStorage.removeItem("authToken")
      sessionStorage.removeItem("authToken")
      document.cookie = "dashboard-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
    }

    // Redirect to our main login page
    router.push("/login")
  }

  const handleLogout = () => {
    // Clear all authentication tokens
    if (typeof window !== "undefined") {
      localStorage.removeItem("authToken")
      sessionStorage.removeItem("authToken")
      document.cookie = "dashboard-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
    }

    setMember(null)
    router.push("/login")
  }

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7B3F9D] mx-auto"></div>
          <p className="mt-4 text-gray-600">Checking authentication...</p>
        </div>
      </div>
    )
  }

  // Redirect if no member data
  if (!member) {
    redirectToLogin()
    return null
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50 overflow-visible">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 bottom-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 bg-[#7B3F9D]">
          <h1 className="text-xl font-bold text-white">JOGSOBA '98</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-purple-100 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Member Info */}
        <div className="p-4 border-b border-gray-200 bg-purple-50">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-[#7B3F9D] flex items-center justify-center">
              <span className="text-white font-medium text-sm">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
              </span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{member.name}</p>
              <p className="text-xs text-gray-500">ID: {member.membershipId}</p>
              <p className="text-xs text-purple-600 capitalize font-medium">{member.status} Member</p>
            </div>
          </div>
        </div>

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
                    ? "bg-purple-100 text-purple-900 border-r-4 border-purple-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <Icon
                  className={`mr-3 h-5 w-5 flex-shrink-0 ${
                    isActive ? "text-purple-600" : "text-gray-400 group-hover:text-gray-500"
                  }`}
                />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <LogOut className="mr-3 h-5 w-5 text-gray-400" />
            Sign out
          </button>
        </div>
      </div>

      <div className="w-full">
        <div className="sticky top-0 z-10 bg-white shadow-sm w-full border-b border-gray-200">
          <div className="flex items-center justify-between w-full px-4 py-5">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
            >
              <Menu className="h-6 w-6" />
            </button>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                Welcome back, {member.firstName || member.name.split(" ")[0]}!
              </span>
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
