import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
        <section className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full">
                <title>payments</title>

              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/school.jpg"
                  alt="Membership background"
                  fill
                  className="object-cover brightness-75"
                  priority
                />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-center  p-4 sm:p-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pt-8 text-yellow-400 tracking-wide">
                  jogsoba '98 association <br /> payemts and dues
                </h1>
                <div className="mt-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-full bg-red-500 px-4 sm:px-6 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    <span className="text-lg font-semibold">sign in </span>
                  </Link>
                </div>
              </div>
            </section>

      {/* Payment & Dues Section */}
      <section className="bg-purple-800  ">
        <div className="mx-auto ">
        
        

          <div className=" bg-white shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-center mb-6">
                How to make payments
              </h3>
              <div className="flex justify-center mb-4">
                <div className="h-1 w-12 bg-gray-800"></div>
              </div>

              <ul className="list-disc  space-y-3 text-black bg-gray-400 max-w-4xl rounded-md mx-auto p-16">
                <li>
                  Every member who was registered with the association is on
                  automatic payment schedule.
                </li>
                <li>
                  The amount is assigned to you by the association according to
                  its constitution.
                </li>
                <li>
                  Payment can be made using credit and debit cards using the
                  methods noted necessary payments according to their
                  membership.
                </li>
                <li>
                  Donation is open to members and non-members of the
                  association.
                </li>
              </ul>

             
            </div>
          </div>
          <div className=" text-center py-12 px-4">
      <div className="flex justify-center mb-4">
        <div className="w-28 h-28 bg-yellow-300 rounded-full flex items-center justify-center">
          <Image src="/images/icon.png" alt="Relief Icon" width={70} height={70} />
        </div>
      </div>
      <h2 className="text-orange-400 font-bold text-lg">
        JOGSOBA ‘98 ASSOCIATION RELIEF COMMITTEE
      </h2>
      <p className="text-white mt-2 max-w-2xl mx-auto text-sm">
        In keeping with one of the core objectives of JOGSOBA’98 which is the remittance of aid back to the school and community at large.
      </p>
      <div className="mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded font-bold hover:bg-green-600">
          DONATE NOW
        </button>
      </div>
    </div>
          <div className="bg-white p-4 mt-10">
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-400 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">
                  You could also send your donation directly to the
                  association's account
                </h3>
                <p className="text-gray-600 mb-4">
                  Support our initiatives by making a direct bank transfer to
                  our association account.
                </p>
              </div>

              <div className="bg-gray-400 p-6 rounded-lg shadow-md">
                <h4 className="font-semibold mb-3">Account Details</h4>
                <div className="space-y-3">
                  <div className="border-b border-gray-300 pb-2">
                    <p className="text-sm text-gray-500">Account Name</p>
                    <p className="font-medium">jogsoba</p>
                  </div>
                  <div className="border-b border-gray-300 pb-2">
                    <p className="text-sm text-gray-500">Account Number</p>
                    <p className="font-medium">1021321125</p>
                  </div>
                  <div className="border-b border-gray-300 pb-2">
                    <p className="text-sm text-gray-500">Bank Name</p>
                    <p className="font-medium">Jogsoba bank</p>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <Link
                    href="/donate-direct"
                    className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    DONATE NOW
                  </Link>
                </div>
              </div>
            </div>

     <div className="mt-12 max-w-4xl mx-auto bg-white p-6">
  <h3 className="text-xl md:text-2xl font-bold text-center mb-6">
    For Further Enquiries Contact
  </h3>
  <div className="flex justify-center mb-4">
    <div className="h-1 w-12 bg-gray-800"></div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
    <div className="font-medium">President</div>
    <div className="text-blue-600 break-words">email@president.com</div>
    <div className="break-words">1235824756566</div>

    <div className="font-medium">Accountant</div>
    <div className="text-blue-600 break-words">email@acct.com</div>
    <div className="break-words">2536215459532</div>
  </div>
</div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
