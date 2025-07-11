"use client"

import { useEffect, useState } from "react"

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    yearJoinedSchool: "",
    yearJoinedAssociation: "",
    yearOfGraduation: "",
    address: "",
    occupation: "",
    company: "",
  })

  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

 useEffect(() => {
  try {
    const storedUser = localStorage.getItem("userData");

    if (!storedUser) {
      setError("No user data found. Please log in again.");
      setLoading(false);
      return;
    }

    const user = JSON.parse(storedUser);

    setProfile({
      name: `${user.firstName} ${user.lastName}`,
      email: user.email || "",
      phone: user.phoneNumber || "",
      yearJoinedSchool: user.AdmissionYear || "",
      yearJoinedAssociation: new Date(user.YearJoined).getFullYear().toString(),
      yearOfGraduation: user.graduationYear || "",
      address: "",
      occupation: "",
      company: "",
    });

  } catch (err) {
    setError("Error loading profile. Please try again.");
    console.error("Profile load error:", err);
  } finally {
    setLoading(false);
  }
}, []);


  const handleSave = () => {
    // You can also update localStorage here if you want
    setIsEditing(false)
  }

  if (loading) return <p className="p-4 text-center">Loading...</p>
  if (error) return <p className="p-4 text-red-600 text-center">{error}</p>

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex justify-between items-center border-b-3 border-gray-800 pb-2 mb-6 lg:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-wide">PROFILE</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded border-2 border-purple-800 font-bold transition-colors"
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      <div className="bg-gray-50 border-2 border-gray-300 rounded p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10 mb-8">
          <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 border-4 border-gray-400 rounded-full bg-white flex items-center justify-center shadow-inner mx-auto lg:mx-0 flex-shrink-0">
            {(() => {
              try {
                const userData = localStorage.getItem("userData")
                if (userData) {
                  const user = JSON.parse(userData)
                  if (user.image && user.image.url) {
                    return (
                      <img
                        src={user.image.url}
                        alt={`${profile.name} profile`}
                        className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full object-cover border-2 border-gray-300"
                      />
                    )
                  }
                }
              } catch (error) {
                console.error("Error loading profile image:", error)
              }
              
              return (
                <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gray-200 rounded-full border-2 border-gray-300 flex items-center justify-center text-2xl font-bold text-gray-600">
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )
            })()}
          </div>

          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Full Name", key: "name" },
                { label: "Email", key: "email" },
                { label: "Phone Number", key: "phone" },
                { label: "Year Joined School", key: "yearJoinedSchool" },
                { label: "Year Joined Association", key: "yearJoinedAssociation" },
                { label: "Year of Graduation", key: "yearOfGraduation" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-bold text-gray-800 mb-2">{field.label}</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={(profile as any)[field.key]}
                      onChange={(e) =>
                        setProfile((prev) => ({
                          ...prev,
                          [field.key]: e.target.value,
                        }))
                      }
                      className="w-full p-3 border-2 border-gray-300 rounded"
                    />
                  ) : (
                    <p className="p-3 bg-white border-2 border-gray-300 rounded">
                      {(profile as any)[field.key]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {isEditing && (
              <div className="mt-6">
                <button
                  onClick={handleSave}
                  className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded border-2 border-purple-800 font-bold transition-colors"
                >
                  Save Changes
                </button>
              </div>
            )}

            <div className="mt-8">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded"
                onClick={() => {
                  localStorage.removeItem("authToken")
                  localStorage.removeItem("userData")
                  window.location.href = "/login"
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
