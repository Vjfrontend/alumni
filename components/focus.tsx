import React from "react";

function Focus() {
    return (
        <div className="relative mt-6 bg-white/70  shadow-black/[0.03]">
          <div className="flex justify-center">
            <h2 className="text-[#030442] font-bold text-center text-xl mb-7">
              Our Focus Area
            </h2>
          </div>
          <div className="flex flex-wrap justify-center">
          <div className="items-center mx-6 rounded-md shadow-md p-8 w-full md:w-1/2 lg:w-auto mb-4">
              <div className="mb-1 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="#030442"
                  viewBox="0 0 256 256"
                >
                  <path d="M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64ZM160,88h40a8,8,0,0,1,0,16H160a8,8,0,0,1,0-16Zm48,40a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,128Zm0,32a8,8,0,0,1-8,8H160a8,8,0,0,1,0-16h40A8,8,0,0,1,208,160Z"></path>
                </svg>
              </div>
              <h1 className="text-black text-center">QUALITY EDUCATION</h1>
            </div>
            <div className="items-center mx-6 rounded-md shadow-md p-8 w-full md:w-1/2 lg:w-auto mb-4">
              <div className="mb-1 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="#030442"
                  viewBox="0 0 256 256"
                >
                  <path d="M24,184H232a8,8,0,0,0,0-16h-8V152a96.12,96.12,0,0,0-88-95.66V40h16a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16h16V56.34A96.12,96.12,0,0,0,32,152v16H24a8,8,0,0,0,0,16Zm24-32a80,80,0,0,1,160,0v16H48Zm192,56a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H232A8,8,0,0,1,240,208Z"></path>
                </svg>
              </div>
              <h1 className="text-black text-center">FOOD AND NUTRITION</h1>
            </div>
            <div className="items-center mx-6 rounded-md shadow-md p-8 w-full md:w-1/2 lg:w-auto mb-4">
              <div className="mb-1 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="#030442"
                  viewBox="0 0 256 256"
                >
                  <path d="M220,160a12,12,0,1,1-12-12A12,12,0,0,1,220,160Zm-4.55,39.29A48.08,48.08,0,0,1,168,240H144a48.05,48.05,0,0,1-48-48V151.49A64,64,0,0,1,40,88V40a8,8,0,0,1,8-8H72a8,8,0,0,1,0,16H56V88a48,48,0,0,0,48.64,48c26.11-.34,47.36-22.25,47.36-48.83V48H136a8,8,0,0,1,0-16h24a8,8,0,0,1,8,8V87.17c0,32.84-24.53,60.29-56,64.31V192a32,32,0,0,0,32,32h24a32.06,32.06,0,0,0,31.22-25,40,40,0,1,1,16.23.27ZM232,160a24,24,0,1,0-24,24A24,24,0,0,0,232,160Z"></path>
                </svg>
              </div>
              <h1 className="text-black text-center">QUALITY HEALTH</h1>
            </div>
            <div className="items-center mx-6 rounded-md shadow-md p-8 w-full md:w-1/2 lg:w-auto mb-4">
              <div className="mb-1 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="#030442"
                  viewBox="0 0 256 256"
                >
                  <path d="M248,120a48.05,48.05,0,0,0-48-48H160.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,32,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,159.12,214l11,7.33A16,16,0,0,0,194.5,212l11.77-44.36A48.07,48.07,0,0,0,248,120ZM48,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C134.65,155,90.84,164.07,48,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM200,152H168V88h32a32,32,0,1,1,0,64Z"></path>
                </svg>
              </div>
              <h1 className="text-black text-center">CHILD RIGHTS ADVOCACY</h1>
            </div>
          </div>
        </div>
      );}

export default Focus;
