"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

const MEMBER_CATEGORIES = {
  new: {
    title: "New Member",
    description: "Welcome! Sign up for a new membership today.",
    button: "Join Now",
    image: "/images/vj.jpg",
  },
  old: {
    title: " MEMBERSHIP PORTAL",
    description: "Welcome back! Please sign in.",
    button: "Sign In",
    image: "/images/vj.jpg",
  },
};

export default function Home() {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrentPage((prev) => Math.min(prev + 1, 1)),
    onSwipedRight: () => setCurrentPage((prev) => Math.max(prev - 1, 0)),
    trackMouse: true, // enables swipe with mouse on desktop for testing
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[250px] md:h-[500px] w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/14.jpg"
            alt="Membership background"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 flex h-full flex-col justify-center p-4 sm:p-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pt-8 text-purple-400 tracking-wide">
            membership portal
          </h1>
          <div className="mt-4">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full bg-purple-400 px-4 sm:px-6 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <span className="text-lg font-semibold">Join Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Membership Categories Section */}
      <section className="bg-gray-100 py-8 sm:py-12 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Membership Categories
          </h2>
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="h-1 w-16 bg-gray-800"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="md:grid md:grid-cols-2 gap-6 sm:gap-8">
              {!isMobile ? (
                <>
                  <MemberCard data={MEMBER_CATEGORIES.new} link="/login" />
                  <MemberCard data={MEMBER_CATEGORIES.old} link="/signup" />
                </>
              ) : (
                <div {...swipeHandlers}>
                  {currentPage === 0 && (
                    <MemberCard data={MEMBER_CATEGORIES.new} link="/signup" />
                  )}
                  {currentPage === 1 && (
                    <MemberCard data={MEMBER_CATEGORIES.old} link="/login" />
                  )}
                </div>
              )}
            </div>

            {/* Pagination Dots */}
            {isMobile && (
              <div className="flex justify-center mt-8 space-x-2">
                {[0, 1].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`h-2 w-2 rounded-full ${
                      currentPage === page ? "bg-purple-400" : "bg-gray-300"
                    } hover:bg-gray-400 focus:outline-none`}
                    aria-label={`Page ${page + 1}`}
                  ></button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

// Reusable Member Card Component
type MemberCardProps = {
  data: {
    title: string;
    description: string;
    button: string;
    image: string;
  };
  link: string;
};

function MemberCard({ data, link }: MemberCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] mb-6 md:mb-0">
      <div className="relative h-48 sm:h-60 w-full">
        <Image
          src={data.image || "/placeholder.svg"}
          alt={data.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{data.title}</h3>
        <p className="text-gray-700 mb-4 flex-grow">{data.description}</p>
        <Link
          href={link}
          className="inline-flex items-center justify-center rounded-full bg-purple-400 px-6 py-2 text-sm font-medium text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 self-start"
        >
          {data.button}
        </Link>
      </div>
    </div>
  );
}
