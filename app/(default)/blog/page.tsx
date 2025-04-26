"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/ui/button"; // Adjust the path based on your project structure
import Image from "next/image";

interface Post {
  id: number;
  title: string;
  description: string;
  cover_image: string;
  url: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://dev.to/api/articles?per_page=6')
      .then(res => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="">
                      <title>blog</title>

         <div className="relative h-[450px] w-full">
                <Image src="/images/school.jpg" alt="School building" fill className="object-cover brightness-75" priority />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <h1 className="text-white text-xl  font-bold  mb-1">JOGSOBA &apos;98</h1>
                  <h2 className="text-[#FFD700] text-4xl font-bold mb-3">Blog</h2>
                  <p className="text-white text-xs lg:text-2xl max-w-lg mb-4">
              a platform where past studnt of ijebu-ode grammer school,1998 set ,reconnect,collaborate  and contribute towards the developmentof our alma mateer and the community.
        
                  </p>
                  <Button label="EXPLORE" className="bg-[#FFD700] hover:bg-[#E6C200] text-black font-medium px-8 rounded" onClick={() => console.log('Explore button clicked')} />
                </div>
              </div>
      <div className="max-w-7xl mx-auto my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={post.cover_image || `https://source.unsplash.com/400x200/?technology,people&sig=${post.id}`}
                alt="Blog cover"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2 truncate">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{post.description?.substring(0, 100)}...</p>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
