"use client";

import Link from "next/link";
import { useState } from "react";
import {collection, addDoc} from 'firebase/firestore'
import {database} from './firebase'
import { toast } from "react-toastify";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation check
    if (!name || !email || !message || !phone) {
      toast.error("fill out all fields")
      alert('Please fill in all fields before submitting.');
      return;
    }
    try {
      const ReviewColl = collection(database, 'Reviews');
      await addDoc(ReviewColl, {
        name,
        email,
        message,
        phone,

      });
      // Optionally, clear the form fields or provide user feedback here
      setName('');
      setEmail('');
      setMessage('');
      setPhone('');

      alert('Review submitted successfully!');
      
    } catch (error) {
      console.error('Error adding document: ', error.message);
      alert('Error submitting review. Please try again.');
    }
  };
          // const Reviews = addDoc(ReviewColl)

  
  return (
    <div id="contact" className="min-h-screen flex items-center justify-center bg-[#030442] text-white p-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl mt-8 font-bold">GET IN TOUCH</h2>
          <h1 className="text-4xl font-bold mt-2">Hey! Let's Talk</h1>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <form className=" text-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="fullName"
                >
                  FULL NAME
                </label>
                <input
                  className="w-full px-3 py-2 bg-transparent border rounded"
                  type="text"
                  id="fullName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Full Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  EMAIL
                </label>
                <input
                  className="w-full px-3 py-2 bg-transparent border rounded"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="phone">
                  PHONE
                </label>
                <input
                  className="w-full px-3 py-2 border bg-transparent rounded"
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  YOUR MESSAGE
                </label>
                <textarea
                  className="w-full px-3 py-2 border bg-transparent rounded h-32"
                  id="message"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="text-end">
                <button className="bg-white text-[#030442] text-center px-4 py-1 rounded hover:bg-gray-100" >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="w-full lg:mt-14 mt-0 lg:w-1/2 px-4">
            <div className="space-y-4">
              <div>
                <div className="flex items-center">
                  <div className=" mt-10 absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#FAFAFA"
                      viewBox="0 0 256 256"
                    >
                      <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-14">
                  <h3 className="text-lg ">CALL US</h3>
                  <p>
                  0806 113 6912
                    <br />
                    07039799773
                    <br />
                    07035946704
                  </p>
                </div>
              </div>
              <div className="mt-10 absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#FAFAFA"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                </svg>
              </div>
              <div className="ml-14">
  <h3 className="text-lg">SEND US AN EMAIL</h3>
  <a 
    href="mailto:Oluwoleoloruntobicarefoundation@gmail.com" 
    className="mt-2 "
  >
    Oluwoleoloruntobicarefoundation@gmail.com
  </a>
</div>

              <div className="mt-10 absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#FAFAFA"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                </svg>
              </div>
              <div className="ml-14">
                <h3 className="text-lg">VISIT US</h3>
                <p>
                84,Ifelere phase 2,gaa akanbi ilorin.
                </p>
              </div>
              <div className="mt-4 ml-14 text-center">
                <h3 className="text-lg text-center">FOLLOW US ON</h3>
                <div className="flex space-x-4 mt-2 justify-center">
                  <Link href="#" className="text-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#FAFAFA"
                      viewBox="0 0 256 256"
                    >
                      <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                    </svg>
                  </Link>
                  <a href="#" className="text-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#FAFAFA"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#FAFAFA"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#FAFAFA"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
