"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    AdmissionYear: "",
    graduationYear: "",
    YearJoined: "",
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsLoading(true)
  setError("")

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const fullUrl = `${apiUrl}/auth/signup`

    console.log("Submitting to:", fullUrl)
    console.log("Form data:", formData)

    const response = await fetch(fullUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const contentType = response.headers.get("content-type")
    const responseBody = contentType?.includes("application/json")
      ? await response.json()
      : await response.text()

    if (!response.ok) {
      throw new Error(
        typeof responseBody === "string"
          ? responseBody
          : responseBody.message || `HTTP ${response.status}: ${response.statusText}`
      )
    }

    setSuccess(true)
    console.log("Signup successful:", responseBody)

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      AdmissionYear: "",
      graduationYear: "",
      YearJoined: "",
      email: "",
      password: "",
    })
  } catch (err) {
    console.error("Signup error:", err)
    setError(err instanceof Error ? err.message : "An error occurred during signup")
  } finally {
    setIsLoading(false)
  }
}

  const handleGoogleSignup = () => {
    // Implement Google OAuth signup logic here
    console.log("Google signup clicked")
  }

  if (success) {
    return (
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
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
            <h2 className="text-2xl font-bold text-green-800 mb-2">Registration Successful!</h2>
            <p className="text-green-600 mb-6">
              Your account has been created successfully. You can now log in to access the membership portal.
            </p>
            <Link href="/login" className="btn text-white bg-[#7B3F9D] hover:bg-[#6B2F8D] shadow">
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Page header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <h1 className="font-inter-tight text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-[#7B3F9D]">
          JOGSOBA &apos;98
          <br />
          ASSOCIATION
          <br />
          MEMBERSHIP
          <br />
          PORTAL
        </h1>
      </div>

      {/* Form */}
      <div className="max-w-[25rem] mx-auto p-6 rounded-lg shadow-2xl bg-gradient-to-b from-zinc-100 to-zinc-50/70 relative before:absolute before:-top-12 before:-left-16 before:w-96 before:h-96 before:bg-zinc-900 before:opacity-[.15] before:rounded-full before:blur-3xl before:-z-10">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  className="form-input text-sm w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3F9D] focus:border-transparent"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  className="form-input text-sm w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3F9D] focus:border-transparent"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                className="form-input text-sm w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3F9D] focus:border-transparent"
                type="email"
                placeholder="mark@acmecorp.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                className="form-input text-sm w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3F9D] focus:border-transparent"
                type="tel"
                placeholder="08123456789"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            {/* Academic Years */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="AdmissionYear">
                  Admission Year
                </label>
                <input
                  id="AdmissionYear"
                  name="AdmissionYear"
                  className="form-input text-sm w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3F9D] focus:border-transparent"
                  type="text"
                  placeholder="1998"
                  value={formData.AdmissionYear}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="graduationYear">
                  Graduation Year
                </label>
                <input
                  id="graduationYear"
                  name="graduationYear"
                  className="form-input text-sm w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3F9D] focus:border-transparent"
                  type="text"
                  placeholder="2004"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Year Joined Association */}
            <div>
              <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="YearJoined">
                Year Joined Association
              </label>
              <input
                id="YearJoined"
                name="YearJoined"
                className="form-input text-sm w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3F9D] focus:border-transparent"
                type="text"
                placeholder="2024"
                value={formData.YearJoined}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-zinc-800 font-medium mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                className="form-input text-sm w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B3F9D] focus:border-transparent"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Error Message */}
          {error && <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>}

          {/* Submit Button */}
          <div className="mt-5">
            <button
              type="submit"
              disabled={isLoading}
              className="btn text-zinc-100 bg-[#7B3F9D] hover:bg-[#6B2F8D] w-full shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
                  Creating Account...
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center my-5 before:border-t before:border-zinc-200 before:grow before:mr-3 after:border-t after:border-zinc-200 after:grow after:ml-3">
          <div className="text-xs text-zinc-400 italic">Or</div>
        </div>

        {/* Social login */}
        <button
          type="button"
          onClick={handleGoogleSignup}
          className="btn text-zinc-600 bg-white hover:text-zinc-900 w-full shadow group relative flex after:flex-1"
        >
          <div className="flex-1 flex items-center">
            <svg
              className="w-4 h-4 fill-zinc-400 group-hover:fill-rose-500 shrink-0 transition"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.679 6.545H8.043v3.273h4.328c-.692 2.182-2.401 2.91-4.363 2.91a4.727 4.727 0 1 1 3.035-8.347l2.378-2.265A8 8 0 1 0 8.008 16c4.41 0 8.4-2.909 7.67-9.455Z" />
            </svg>
          </div>
          <span className="flex-auto pl-3">Continue With Google</span>
        </button>

        <div className="text-center mt-6">
          <div className="text-xs text-zinc-500">
            By signing up you agree with our{" "}
            <a className="underline hover:no-underline" href="#0">
              Terms
            </a>
          </div>
          <div className="text-xs text-zinc-500 mt-2">
            Already have an account?{" "}
            <Link className="underline hover:no-underline text-[#7B3F9D]" href="/login">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
