import React from "react";

function Focus() {
  return (
    <div className="relative bg-gray-100 shadow-black/[0.03] mt-24">
      <div className="flex flex-wrap justify-center">
        {/* Members */}
        <div className="items-center  rounded-md shadow-md p-8 w-full  lg:w-auto mb-4">
          <div className="mb-4 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="#000000"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a4 4 0 00-3-3.87M9 20h6M4 20H1v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75M12 14h0"
              />
            </svg>
          </div>
          <h1 className="text-purple-600 text-center font-bold text-lg">
            3250 +
          </h1>
          <h1 className="text-purple-600 text-center">Members</h1>
        </div>

        {/* Pictures */}
        <div className="items-center mx-6 rounded-md shadow-md p-8 w-full md:w-1/2 lg:w-auto mb-4">
          <div className="mb-4 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="#000000"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4-4a3 3 0 014.243 0L20 4M4 20h16"
              />
            </svg>
          </div>
          <h1 className="text-purple-600 text-center font-bold text-lg">
            23250 +
          </h1>
          <h1 className="text-purple-600 text-center">Pictures</h1>
        </div>

        {/* Events */}
        <div className="items-center mx-6 rounded-md shadow-md p-8 w-full md:w-1/2 lg:w-auto mb-4">
          <div className="mb-4 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="#000000"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3M3 11h18M5 20h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1 className="text-purple-600 text-center font-bold text-lg">
            325 +
          </h1>
          <h1 className="text-purple-600 text-center">Events</h1>
        </div>

        {/* Awards */}
        <div className="items-center mx-6 rounded-md shadow-md p-8 w-full md:w-1/2 lg:w-auto mb-4">
          <div className="mb-4 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="#000000"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2L15 8l6 1-4.5 4.4 1 6-5.5-3-5.5 3 1-6L3 9l6-1 3-6z"
              />
            </svg>
          </div>
          <h1 className="text-purple-600 text-center font-bold text-lg">
            6000 +
          </h1>
          <h1 className="text-purple-600 text-center">Awards</h1>
        </div>
      </div>
    </div>
  );
}

export default Focus;
