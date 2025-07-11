"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"

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
    confirmPassword: "",
  })

  // Add handleChange function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const [profileImage, setProfileImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

// Removed top-level await fetch logic; form submission is handled in handleSubmit.


  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return false
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long")
      return false
    }
    // Removed phone number validation
    const currentYear = new Date().getFullYear()
    if (
      parseInt(formData.AdmissionYear) > currentYear ||
      parseInt(formData.graduationYear) > currentYear
    ) {
      setError("Please enter valid years")
      return false
    }
    if (parseInt(formData.AdmissionYear) >= parseInt(formData.graduationYear)) {
      setError("Graduation year must be after admission year")
      return false
    }
    return true
  }

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  if (!validateForm()) return
  setIsLoading(true)
  setError("")

  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      AdmissionYear,
      graduationYear,
      YearJoined,
    } = formData

    const payload = {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      AdmissionYear,
      graduationYear,
      YearJoined,
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    const data = await response.json()

    if (!response.ok) throw new Error(data.message || "Signup failed")

// Save to localStorage
localStorage.setItem("authToken", data.data.token);
localStorage.setItem("userData", JSON.stringify(data.result.user));
setSuccess(true)
  } catch (err) {
    setError(err instanceof Error ? err.message : "An unexpected error occurred")
  } finally {
    setIsLoading(false)
  }
}



  const handleGoogleSignup = () => {
    console.log("Google signup clicked")
  }

  const router = useRouter()

  useEffect(() => {
    if (success) {
      const timeout = setTimeout(() => {
        router.push("/dashboard")
      }, 3000) // Redirect after 3 seconds
      return () => clearTimeout(timeout)
    }
  }, [success, router])
  if (success)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">
            JOGSOBA '98
          </h1>
          <p className="text-lg text-gray-600">ASSOCIATION MEMBERSHIP PORTAL</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-purple-800 mb-2">Registration Successful!</h2>
            <p className="text-purple-600 mb-6">
              Your account has been created successfully. Redirecting you to the login page...
            </p>
          
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">
            JOGSOBA '98
          </h1>
          <p className="text-lg text-gray-600 mb-2">ASSOCIATION</p>
          <p className="text-lg text-gray-600 mb-4">MEMBERSHIP PORTAL</p>
          <p className="text-sm text-gray-500">Create your account to join the community</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-purple-100 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-20"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-20"></div>

          <form className="relative z-10" onSubmit={handleSubmit}>
             <div className="text-center my-3">
                {imagePreview ? (
                  <Image
                    src={imagePreview}
                    alt="Profile Preview"
                    width={100}
                    height={100}
                    className="mx-auto mb-4 rounded-full object-cover shadow-md"
                  />
                ) : (
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center text-purple-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v4m0 0v4m0-4H8m4 0h4M5 20h14a2 2 0 002-2V7a2 2 0 00-2-2h-4l-2-2H9L7 5H5a2 2 0 00-2 2v11a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) {
                      setProfileImage(file)
                      setImagePreview(URL.createObjectURL(file))
                    }
                  }}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 mx-auto"
                />
              </div>

            <div className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="firstName">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="lastName">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter email"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phoneNumber">
                  Phone Number *
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 08012345678 or +2348012345678"
                />
              </div>

              {/* Academic Years */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="admissionYear">
                    Admission Date *
                  </label>
                  <input
                    id="admissionYear"
                    name="AdmissionYear"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    type="date"
                    value={formData.AdmissionYear}
                    onChange={handleChange}
                    required
                    placeholder="Select admission date"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="graduationYear">
                    Graduation Date *
                  </label>
                  <input
                    id="graduationYear"
                    name="graduationYear"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    type="date"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    required
                    placeholder="Select graduation date"
                  />
                </div>
              </div>

              {/* Year Joined Association */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="yearJoined">
                  Date Joined Association *
                </label>
                <input
                  id="yearJoined"
                  name="YearJoined"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  type="date"
                  value={formData.YearJoined}
                  onChange={handleChange}
                  required
                  placeholder="Select date joined"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
                  Password *
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    onClick={() => setShowPassword((v) => !v)}
                  >
                      {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="confirmPassword">
                  Confirm Password *
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    placeholder="Re-enter password"
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    onClick={() => setShowConfirmPassword((v) => !v)}
                  >
                      {showPassword ?"👁️" :"🙈"  }
                  </button>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">{error}</div>
            )}

            {/* Submit Button */}
            <div className="mt-5">
              <button
                type="submit"
                disabled={isLoading}
                className="btn text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 w-full shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center py-3 px-6 rounded-lg font-medium"
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
          <div className="flex items-center my-5 before:border-t before:border-gray-200 before:grow before:mr-3 after:border-t after:border-gray-200 after:grow after:ml-3">
            <div className="text-xs text-gray-400 italic">Or</div>
          </div>

          {/* Social login */}
          {/* <button
            type="button"
            onClick={handleGoogleSignup}
            className="btn text-gray-600 bg-white hover:text-gray-900 w-full shadow group relative flex after:flex-1 border border-gray-200 py-3 px-6 rounded-lg font-medium"
          >
            <div className="flex-1 flex items-center">
              <svg
                className="w-4 h-4 fill-gray-400 group-hover:fill-rose-500 shrink-0 transition"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.679 6.545H8.043v3.273h4.328c-.692 2.182-2.401 2.91-4.363 2.91a4.727 4.727 0 1 1 3.035-8.347l2.378-2.265A8 8 0 1 0 8.008 16c4.41 0 8.4-2.909 7.67-9.455Z" />
              </svg>
            </div>
            <span className="flex-auto pl-3">Continue With Google</span>
          </button> */}

          <div className="text-center mt-6">
            <div className="text-xs text-gray-500">
              By signing up you agree with our{" "}
              <a className="underline hover:no-underline" href="#0">
                Terms
              </a>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              Already have an account?{" "}
              <Link className="underline hover:no-underline text-purple-700" href="/login">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
