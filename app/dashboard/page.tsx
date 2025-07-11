"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Calendar, CreditCard, Users, TrendingUp, Bell, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function DashboardHome() {
  const router = useRouter()
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("authToken")
      if (!token) {
        router.replace("/login")
      }
    }
  }, [router])

  return (
    <div>
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to Your Dashboard</h1>
        <p className="mt-2 text-gray-600">Manage your JOGSOBA '98 membership and stay connected with fellow alumni</p>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg border-l-4 border-green-500">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Membership Status</dt>
                  <dd className="text-lg font-semibold text-green-600">Active</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg border-l-4 border-blue-500">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CreditCard className="h-6 w-6 text-blue-500" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Dues Status</dt>
                  <dd className="text-lg font-semibold text-blue-600">Paid 2024</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg border-l-4 border-purple-500">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Calendar className="h-6 w-6 text-purple-500" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Events Attended</dt>
                  <dd className="text-lg font-semibold text-purple-600">5 this year</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg border-l-4 border-yellow-500">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Contributions</dt>
                  <dd className="text-lg font-semibold text-yellow-600">₦150,000</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/dashboard/payments"
              className="relative rounded-lg border-2 border-dashed border-gray-300 p-6 hover:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
            >
              <div className="text-center">
                <CreditCard className="mx-auto h-8 w-8 text-green-600" />
                <span className="mt-2 block text-sm font-medium text-gray-900">Pay Annual Dues</span>
                <span className="mt-1 block text-sm text-gray-500">₦50,000 for 2024</span>
              </div>
            </Link>

            <Link
              href="/dashboard/profile"
              className="relative rounded-lg border-2 border-dashed border-gray-300 p-6 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              <div className="text-center">
                <Users className="mx-auto h-8 w-8 text-blue-600" />
                <span className="mt-2 block text-sm font-medium text-gray-900">Update Profile</span>
                <span className="mt-1 block text-sm text-gray-500">Keep your info current</span>
              </div>
            </Link>

            <Link
              href="/dashboard/events"
              className="relative rounded-lg border-2 border-dashed border-gray-300 p-6 hover:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
            >
              <div className="text-center">
                <Calendar className="mx-auto h-8 w-8 text-purple-600" />
                <span className="mt-2 block text-sm font-medium text-gray-900">Upcoming Events</span>
                <span className="mt-1 block text-sm text-gray-500">3 events this month</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Activity & Announcements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="flow-root">
              <ul className="-mb-8">
                <li>
                  <div className="relative pb-8">
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                          <CreditCard className="h-4 w-4 text-white" />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-500">Annual dues payment processed</p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">Dec 1</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="relative pb-8">
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                          <Users className="h-4 w-4 text-white" />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-500">Profile information updated</p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">Nov 28</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="relative">
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center ring-8 ring-white">
                          <Calendar className="h-4 w-4 text-white" />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-500">Registered for Annual Reunion</p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">Nov 25</div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Announcements */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Latest Announcements</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="border-l-4 border-green-400 bg-green-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Bell className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">
                      <strong>Annual Reunion 2024</strong> - Registration is now open! Join us on December 28th.
                    </p>
                    <p className="text-xs text-green-600 mt-1">Posted 2 days ago</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-400 bg-blue-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Bell className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>New Scholarship Program</strong> - Applications open for 2025 academic year.
                    </p>
                    <p className="text-xs text-blue-600 mt-1">Posted 1 week ago</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-yellow-400 bg-yellow-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Bell className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Dues Reminder</strong> - 2024 annual dues are due by December 31st.
                    </p>
                    <p className="text-xs text-yellow-600 mt-1">Posted 2 weeks ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
