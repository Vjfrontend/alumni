"use client";
import Image from "next/image";
import ab from "@/public/images/logo.png";

import React, { useState, useEffect } from "react";

function HistoryPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const posts = [
    {
      title: "school project",
      date: "30 June 2019",
      author: "admin",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
      image: "/images/14.jpg",
    },
    {
      title: "bore hole project",
      date: "30 June 2019",
      author: "admin",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
      image: "/images/14.jpg",
    },
    {
      title: "library project",
      date: "30 June 2019",
      author: "admin",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
      image: "/images/14.jpg",
    },
    {
      title: "community outreach project",
      date: "30 June 2019",
      author: "admin",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
      image: "/images/14.jpg",
    },
  ];

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1024);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset currentPage if isMobile changes
  useEffect(() => {
    setCurrentPage(0);
  }, [isMobile]);

  const slidesPerPage = isMobile ? 1 : 4;
  const totalPages = Math.ceil(posts.length / slidesPerPage);

  const pagedPosts = isMobile
    ? posts.slice(currentPage * slidesPerPage, (currentPage + 1) * slidesPerPage)
    : posts;

  const prevPage = () =>
    setCurrentPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const nextPage = () =>
    setCurrentPage((p) => (p === totalPages - 1 ? 0 : p + 1));

  return (
    <div className="bg-gray-100">
      <div className="relative h-[450px] w-full">
        <Image
          src="/images/14.jpg"
          alt="School building"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-white text-xl font-bold mb-1">JOGSOBA &apos;98</h1>
          <h2 className="text-purple-400 text-4xl font-bold mb-3">Secreteriat</h2>
          <p className="text-white text-xs lg:text-2xl max-w-4xl mb-4">
            a platform where past students of ijebu-ode grammar school, 1998
            set, reconnect, collaborate and contribute towards the development
            of our alma mater and the community.
          </p>
        </div>
      </div>

      <div
        id="about"
        className="shadow-black/[0.03] my-10"
      >
        <div className="relative flex flex-col-reverse lg:flex-row-reverse items-center mt-16 mx-auto">
          <div className="lg:w-1/2 lg:order-last mt-8 lg:mt-0">
            <Image
              src={ab}
              alt="Logo"
              width={700}
              height={200}
              className="object-contain rounded-lg h-80"
            />
          </div>

          <div className="lg:w-1/2 lg:order-first bg-purple-400 lg:p-20 p-8">
            <div className="text-center lg:text-left">
              <h2 className="text-black font-bold text-center text-3xl pb-3">📜 Constitution</h2>
            </div>
            <div className="mb-4">
              <h1 className="font-bold">Our Guiding Principles</h1>
              <p className="text-black">
                The Constitution of the Ijebu-Ode Grammar School Old Boys
                Association, 1998 Set outlines the structure, purpose, and
                values of our association. It serves as the foundational
                document that governs our operations, membership, leadership
                roles, and decision-making processes. As a non-profit,
                non-political body, our Constitution emphasizes unity, service,
                accountability, and lifelong connection to our alma mater.
              </p>
              <a href="/pdf.pdf" download>
                <button className="bg-black my-3 text-white font-medium px-4 py-2 rounded justify-center items-center mx-auto block mb-8">
                  Download PDF
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="py-10 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Meetings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-500 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-xl font-semibold mb-2">General Meeting</h3>
                <p className="text-gray-600">
                  All-staff updates, schedules, and planning discussions.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-green-500 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-3-3h-2v5zM4 4h16M4 8h16M4 12h8M4 16h8M4 20h4"
                  />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Committee Meeting</h3>
                <p className="text-gray-600">
                  Focused discussions by department or specialized teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-16  z-10 text-center relative max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects</h2>
        <div className="flex justify-center mb-6">
          <span className="w-16 h-1 bg-gray-400 inline-block rounded"></span>
        </div>

        {/* Slides container */}
        <div
          className={`grid gap-6 ${
            isMobile ? "grid-cols-1" : "grid-cols-2 grid-rows-2"
          }`}
        >
          {pagedPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="h-48 bg-gray-900 relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  by {post.author} | {post.date}
                </p>
                <p className="text-gray-600 mb-4">{post.content}</p>
                {/* <button className="bg-purple-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  READ MORE
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (only on mobile) */}
        {isMobile && totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={prevPage}
              className="bg-purple-400 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
              aria-label="Previous page"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === currentPage ? "bg-purple-400" : "bg-gray-300"
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
            <button
              onClick={nextPage}
              className="bg-purple-400 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
              aria-label="Next page"
            >
              Next
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default HistoryPage;
