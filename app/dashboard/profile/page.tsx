"use client"

import { useState } from "react"

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "Joshua Davids Praise",
    email: "member@jogsoba98.com",
    phone: "08021212312123",
    yearJoinedSchool: "1992",
    yearJoinedAssociation: "2020",
    yearOfGraduation: "1998",
    address: "",
    occupation: "",
    company: "",
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleSave = () => {
    // Save profile logic here
    setIsEditing(false)
    // You would typically make an API call here
  }

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
            <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gray-200 rounded-full border-2 border-gray-300 flex items-center justify-center text-2xl font-bold text-gray-600">
              {profile.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full p-3 border-2 border-gray-300 rounded"
                  />
                ) : (
                  <p className="p-3 bg-white border-2 border-gray-300 rounded">{profile.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full p-3 border-2 border-gray-300 rounded"
                  />
                ) : (
                  <p className="p-3 bg-white border-2 border-gray-300 rounded">{profile.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Phone Number</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full p-3 border-2 border-gray-300 rounded"
                  />
                ) : (
                  <p className="p-3 bg-white border-2 border-gray-300 rounded">{profile.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Year Joined School</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.yearJoinedSchool}
                    onChange={(e) => setProfile({ ...profile, yearJoinedSchool: e.target.value })}
                    className="w-full p-3 border-2 border-gray-300 rounded"
                  />
                ) : (
                  <p className="p-3 bg-white border-2 border-gray-300 rounded">{profile.yearJoinedSchool}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Year Joined Association</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.yearJoinedAssociation}
                    onChange={(e) => setProfile({ ...profile, yearJoinedAssociation: e.target.value })}
                    className="w-full p-3 border-2 border-gray-300 rounded"
                  />
                ) : (
                  <p className="p-3 bg-white border-2 border-gray-300 rounded">{profile.yearJoinedAssociation}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-800 mb-2">Year of Graduation</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.yearOfGraduation}
                    onChange={(e) => setProfile({ ...profile, yearOfGraduation: e.target.value })}
                    className="w-full p-3 border-2 border-gray-300 rounded"
                  />
                ) : (
                  <p className="p-3 bg-white border-2 border-gray-300 rounded">{profile.yearOfGraduation}</p>
                )}
              </div>
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
          </div>
        </div>
      </div>
    </div>
  )
}
