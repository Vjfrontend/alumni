"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const carouselItems = [
  {
    id: 1,
    title: "Mountain Adventure",
    image: "/images/1.jpg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Ocean Waves",
    image: "/images/2.jpg",
    color: "from-teal-500 to-blue-500",
  },
  {
    id: 3,
    title: "Forest Path",
    image: "/images/3.jpg",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Desert Sunset",
    image: "/images/4.jpg",
    color: "from-orange-500 to-red-500",
  },
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cubeRef = useRef<HTMLDivElement>(null)
  const [cubeDepth, setCubeDepth] = useState(180)

  useEffect(() => {
    const updateDepth = () => {
      const screenWidth = window.innerWidth
      const depth = screenWidth < 640 ? 130 : screenWidth < 1024 ? 200 : 270
      setCubeDepth(depth)
    }
    updateDepth()
    window.addEventListener("resize", updateDepth)
    return () => window.removeEventListener("resize", updateDepth)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const cube = cubeRef.current
    if (!cube) return
    let startX = 0

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
    }

    const onTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX
      const diff = startX - endX
      if (Math.abs(diff) > 50) diff > 0 ? goToNext() : goToPrev()
    }

    cube.addEventListener("touchstart", onTouchStart)
    cube.addEventListener("touchend", onTouchEnd)

    return () => {
      cube.removeEventListener("touchstart", onTouchStart)
      cube.removeEventListener("touchend", onTouchEnd)
    }
  }, [])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  return (
    <section className="w-full min-h-screen mt-5 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center px-4 md:px-8 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div className="text-white space-y-6 text-center  lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Jogsoba '98
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold">
            One For All. <br /> All For One.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
            A platform where past students of Ijebu-Ode Grammar School, 1998 set,
            reconnect, collaborate, and contribute towards the development of our alma mater and the community.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative">
        <div
  key={currentIndex}
  className="animate-[pop3d_1s_ease-out] transform-style-preserve-3d"
>
  <div className="relative px-6 py-4 bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-2xl font-bold shadow-2xl rounded-xl transform rotate-x-6 rotate-y-[-8deg] scale-[1.02]">
    <div className="absolute -inset-1 flex bg-indigo-500 blur-2xl opacity-30 rounded-xl -z-10"></div>
    {carouselItems[currentIndex].title}
  </div>
</div>


          {/* Cube Carousel */}
          <div
            className="w-full max-w-[90vw] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[440px] aspect-square perspective-[1200px]"
            ref={cubeRef}
          >
            <div
              className="relative w-full h-full transition-transform duration-[700ms] ease-in-out"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(-${currentIndex * 90}deg)`,
              }}
            >
              {carouselItems.map((item, index) => {
                const faceAngle = index * 90
                return (
                  <div
                    key={item.id}
                    className="absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                      transform: `rotateY(${faceAngle}deg) translateZ(${cubeDepth}px)`,
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <div className={`relative w-full h-full bg-gradient-to-br ${item.color}`}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        priority={index === currentIndex}
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
                        {/* <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold">
                          {item.title}
                        </h2> */}
                      </div>
                      <div className="mt-6 flex gap-6">
                        <button
                          onClick={goToPrev}
                          className="p-3 absolute left-0 top-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={goToNext}
                          className="p-3 absolute right-0 top-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            
          </div>
        </div>
      </div>

      {/* Custom Keyframes */}
      <style jsx>{`
        @keyframes pop3d {
          0% {
            opacity: 0;
            transform: rotateX(40deg) rotateY(-30deg) scale(0.5) translateY(50px);
          }
          60% {
            opacity: 1;
            transform: rotateX(-10deg) rotateY(5deg) scale(1.05) translateY(-10px);
          }
          100% {
            transform: rotateX(0deg) rotateY(0deg) scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
