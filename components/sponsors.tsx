'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const posts = [
  {
    title: "Post Title Goes Here",
    date: "30 June 2019",
    author: "admin",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    image: "/placeholder.png", // Replace with real image
  },
  {
    title: "Post Title Goes Here",
    date: "30 June 2019",
    author: "admin",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    image: "/placeholder.png", // Replace with real image
  },
];

export default function NewsCarousel() {
  return (
    <section className="p-16 bg-gray-50 z-10 text-center relative">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Recent Update</h2>
      <div className="flex justify-center mb-6">
        <span className="w-16 h-1 bg-gray-400 inline-block rounded"></span>
      </div>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20} // Default space between slides
        slidesPerView={1} // Default to 1 on small screens
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 slide on small screens
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2, // 2 slides on larger screens
            spaceBetween: 30,
          },
        }}
        className="max-w-full mx-auto"
      >
        {posts.map((post, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-900" />
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-2">by {post.author} | {post.date}</p>
                <p className="text-gray-600 mb-4">{post.content}</p>
                {/* <button className="bg-purple-400  text-white px-4 py-2 rounded-full text-sm font-semibold">
                  READ MORE
                </button> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
