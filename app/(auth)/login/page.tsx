"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    if (!formData.email.trim()) {
      setError("Please enter your email address")
      return false
    }

    if (!formData.password.trim()) {
      setError("Please enter your password")
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address")
      return false
    }

    return true
  }

  const realLogin = async () => {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL

    if (!backendUrl) {
      throw new Error("Backend URL not configured. Set NEXT_PUBLIC_API_URL in your .env file.")
    }

    const apiEndpoint = `${backendUrl}/auth/login`
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 30000)

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      const responseText = await response.text()

      if (!response.ok) {
        let message = `Login failed with status ${response.status}`
        try {
          const json = JSON.parse(responseText)
          message = json.message || json.error || message
        } catch {
          if (responseText) {
            message = responseText.length > 200 ? responseText.slice(0, 200) + "..." : responseText
          }
        }
        throw new Error(message)
      }

      return JSON.parse(responseText)
    } catch (err) {
      clearTimeout(timeoutId)
      throw err
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!validateForm()) return

    setIsLoading(true)

    try {
      const result = await realLogin()
      if (result.data.token) {
        // Store token for authentication
        localStorage.setItem("authToken", result.data.token)
      } else {
        setError("No token received from server. Please contact support.")
        setIsLoading(false)
        return
      }

      setSuccess(true)
      setFormData({ email: "", password: "" })

      setTimeout(() => {
        window.location.href = "/dashboard"
      }, 2000)
    } catch (err) {
      if (typeof err === "object" && err !== null && "name" in err && (err as any).name === "AbortError") {
        setError("Request timed out. Please check your internet connection and try again.")
      } else if (err instanceof TypeError && err.message.includes("fetch")) {
        setError("Network error. Please check your internet connection or contact support.")
      } else if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("An unexpected error occurred during login")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    setError("Google login is not yet implemented")
  }

// ...Keep your success screen and form JSX here — unchanged, just remove all Mock Mode UI

// 💡 You can now safely remove:
// - useMockMode state
// - mockLogin function
// - Mock Mode toggle UI
// - any "(Mock Mode)" text indicators

  // Success state
  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-[#7B3F9D] mb-8">
              JOGSOBA &apos;98
              <br />
              ASSOCIATION
              <br />
              MEMBERSHIP
              <br />
              PORTAL
            </h1>
            <div className="max-w-[25rem] mx-auto p-6 rounded-lg shadow-2xl bg-gradient-to-b from-green-100 to-green-50/70">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-green-800 mb-2">Login Successful!</h2>
                <p className="text-green-600 mb-6">
                  Welcome back! You have been successfully logged in to the membership portal.
                </p>
                <p className="text-sm text-green-600">Redirecting to dashboard...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Main login form
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Page header */}
        <div className="text-center">
          <h1 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-[#7B3F9D]">
            JOGSOBA &apos;98
            <br />
            ASSOCIATION
            <br />
            MEMBERSHIP
            <br />
            PORTAL
          </h1>
          <p className="mt-4 text-sm text-gray-600">Sign in to your membership account</p>
        </div>

        {/* Form */}
        <div className="max-w-[25rem] mx-auto p-6 rounded-lg shadow-2xl bg-gradient-to-b from-zinc-100 to-zinc-50/70 relative before:absolute before:-top-12 before:-left-16 before:w-96 before:h-96 before:bg-zinc-900 before:opacity-[.15] before:rounded-full before:blur-3xl before:-z-10">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-zinc-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#7B3F9D] focus:border-transparent"
                  type="email"
                  placeholder="mark@acmecorp.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="password">
                    Password *
                  </label>
                  <Link
                    className="text-sm font-medium text-zinc-500 underline hover:no-underline ml-2"
                    href="/reset-password"
                  >
                    Forgot?
                  </Link>
                </div>
                <input
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 border border-zinc-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#7B3F9D] focus:border-transparent"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <pre className="whitespace-pre-wrap text-sm">{error}</pre>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-5">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#7B3F9D] hover:bg-[#6B2F8D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7B3F9D] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing In...
                  </>
                ) : (
                  "Log In"
                )}
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center my-5 before:border-t before:border-zinc-200 before:grow before:mr-3 after:border-t after:border-zinc-200 after:grow after:ml-3">
            <div className="text-xs text-zinc-400 italic">Or</div>
          </div>

          {/* Social login */}
          <div className="flex justify-center items-center ">
            {/* <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn text-zinc-600 bg-white hover:text-zinc-900 shadow group relative flex items-center px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7B3F9D]"
            >
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 fill-zinc-400 group-hover:fill-rose-500 shrink-0 transition"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.679 6.545H8.043v3.273h4.328c-.692 2.182-2.401 2.91-4.363 2.91a4.727 4.727 0 1 1 3.035-8.347l2.378-2.265A8 8 0 1 0 8.008 16c4.41 0 8.4-2.909 7.67-9.455Z" />
                </svg>
              </div>
              <span className="pl-3">Continue With Google</span>
            </button> */}
            <h2>
              <Link className="text-sm font-medium text-zinc-500 underline hover:no-underline" href="/signup">
                Sign up
              </Link>
            </h2>
          </div>

          <div className="text-center mt-6">
            <div className="text-xs text-zinc-500">
              By logging in you agree with our{" "}
              <a className="underline hover:no-underline" href="#0">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
