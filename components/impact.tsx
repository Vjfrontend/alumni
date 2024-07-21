import React from "react";

function Impact() {
//   return (
//   <div className="relative mt-8 bg-[#030442]">
//     <div className="flex justify-center">
//       <h2 className="text-white font-bold text-center text-xl pt-8 mb-7">
//         Our Impact In Numbers
//       </h2>
//     </div>
//     <div className="flex flex-wrap justify-center">
//       <div className="items-center mx-6 flex shadow-md mb-6 md:mb-0">
//         <div className="text-center">
//           <h1 className="text-white">19577</h1>
//           <h1 className="text-white">Children Impacted</h1>
//         </div>
//         <div className="mb-1 flex justify-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="84"
//             height="84"
//             fill="#FAFAFA"
//             viewBox="0 0 256 256"
//           >
//             <path d="M136,24V232a8,8,0,0,1-16,0V24a8,8,0,0,1,16,0Z"></path>
//           </svg>
//         </div>
//       </div>
//       <div className="items-center mx-6 flex shadow-md mb-6 md:mb-0">
//         <div className="text-center">
//           <h1 className="text-white">10</h1>
//           <h1 className="text-white">Educational Campaign</h1>
//         </div>
//         <div className="mb-1 flex justify-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="84"
//             height="84"
//             fill="#FAFAFA"
//             viewBox="0 0 256 256"
//           >
//             <path d="M136,24V232a8,8,0,0,1-16,0V24a8,8,0,0,1,16,0Z"></path>
//           </svg>
//         </div>
//       </div>
//       <div className="items-center mx-6 flex shadow-md mb-6 md:mb-0">
//         <div className="text-center">
//           <h1 className="text-white">10</h1>
//           <h1 className="text-white">Health Campaign</h1>
//         </div>
//         <div className="mb-1 flex justify-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="84"
//             height="84"
//             fill="#FAFAFA"
//             viewBox="0 0 256 256"
//           >
//             <path d="M136,24V232a8,8,0,0,1-16,0V24a8,8,0,0,1,16,0Z"></path>
//           </svg>
//         </div>
//       </div>
//       <div className="items-center mx-6 flex shadow-md">
//         <div className="text-center">
//           <h1 className="text-white">10</h1>
//           <h1 className="text-white">Advocacy walk</h1>
//         </div>
//       </div>
//     </div>
//   </div>
// );
return (
  <div id="impact" className="relative mt-8 bg-[#030442] shadow-lg">
    <div className="flex justify-center">
      <h2 className="text-white font-bold text-center text-xl pt-8 mb-7">
        Our Impact In Numbers
      </h2>
    </div>
    <div className="flex  flex-col lg:flex-row justify-center">
      <div className="items-center mx-4 flex-col  flex lg:flex-row  mb-6 lg:mb-0">
        <div className="text-center">
          <h1 className="text-white text-xl">577</h1>
          <h1 className="text-white">Children Impacted</h1>
        </div>
        <div className="mb-1 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            height="84"
            fill="#FAFAFA"
            viewBox="0 0 256 256"
          >
            <path d="M136,24V232a8,8,0,0,1-16,0V24a8,8,0,0,1,16,0Z"></path>
          </svg>
        </div>
      </div>
      <div className="items-center mx-4 flex-col  flex lg:flex-row  mb-6 lg:mb-0">
        <div className="text-center">
          <h1 className="text-white text-xl">40</h1>
          <h1 className="text-white">Educational Campaign</h1>
        </div>
        <div className="mb-1 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            height="84"
            fill="#FAFAFA"
            viewBox="0 0 256 256"
          >
            <path d="M136,24V232a8,8,0,0,1-16,0V24a8,8,0,0,1,16,0Z"></path>
          </svg>
        </div>
      </div>
      <div className="items-center mx-4 flex-col  flex lg:flex-row  mb-6 lg:mb-0">
        <div className="text-center">
          <h1 className="text-white text-xl">100</h1>
          <h1 className="text-white">Health Campaign</h1>
        </div>
        <div className="mb-1 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            height="84"
            fill="#FAFAFA"
            viewBox="0 0 256 256"
          >
            <path d="M136,24V232a8,8,0,0,1-16,0V24a8,8,0,0,1,16,0Z"></path>
          </svg>
        </div>
      </div>
      <div className="items-center mx-4 flex-col  flex lg:flex-row  mb-6 lg:mb-0">
        <div className="text-center">
          <h1 className="text-white text-xl">20</h1>
          <h1 className="text-white">Advocacy walk</h1>
        </div>
      </div>
    </div>
  </div>
);


}

export default Impact;
