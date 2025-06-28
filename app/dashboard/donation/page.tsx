export default function PaymentPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="border-b-3 border-gray-800 pb-2 mb-6 lg:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-wide">PAYMENT AND DUES</h2>
      </div>

      <div className="bg-gray-50 border-2 border-gray-300 rounded p-4 sm:p-6 lg:p-8">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">Membership Dues Payment</h3>

          <div className="space-y-6">
            <div className="border-2 border-gray-300 rounded p-4 sm:p-6">
              <h4 className="font-bold text-gray-800 mb-4 text-lg">Annual Membership Fee</h4>
              <p className="text-gray-700 mb-4">
                Pay your annual membership dues to maintain active status in the association.
              </p>
              <div className="text-2xl font-bold text-purple-700 mb-4">₦50,000</div>
              <button className="w-full bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 border-2 border-purple-800 font-bold tracking-wide shadow-lg transition-colors">
                PAY ANNUAL DUES
              </button>
            </div>

            <div className="border-2 border-gray-300 rounded p-4 sm:p-6">
              <h4 className="font-bold text-gray-800 mb-4 text-lg">Project Contribution</h4>
              <p className="text-gray-700 mb-4">
                Contribute to ongoing school development projects and community initiatives.
              </p>
              <div className="text-2xl font-bold text-purple-700 mb-4">₦100,000</div>
              <button className="w-full bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 border-2 border-purple-800 font-bold tracking-wide shadow-lg transition-colors">
                CONTRIBUTE TO PROJECTS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
