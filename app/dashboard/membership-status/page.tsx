export default function MembershipStatusPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="border-b-3 border-gray-800 pb-2 mb-6 lg:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-wide">MEMBERSHIP STATUS</h2>
      </div>

      <div className="bg-gray-50 border-2 border-gray-300 rounded p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border-2 border-gray-300 rounded p-6 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Current Status</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                  <span className="font-bold">Membership Type:</span>
                  <span className="text-purple-700 font-bold">Active Member</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                  <span className="font-bold">Last Payment:</span>
                  <span>January 2024</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                  <span className="font-bold">Next Due Date:</span>
                  <span>January 2025</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">Outstanding Balance:</span>
                  <span className="text-purple-700 font-bold">₦0</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-300 rounded p-6 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Payment History</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                  <span>Annual Dues 2024</span>
                  <span className="text-purple-700">₦50,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                  <span>Project Contribution</span>
                  <span className="text-purple-700">₦100,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-300 pb-2">
                  <span>Annual Dues 2023</span>
                  <span className="text-purple-700">₦45,000</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 border-2 border-gray-800 font-bold tracking-wide shadow-lg transition-colors">
                VIEW FULL HISTORY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
