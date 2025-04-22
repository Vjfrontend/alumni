import Image from "next/image";

const images = Array(8).fill({
  src: "/images/vj.jpg", // Make sure the image is placed in the public folder
  year: 2003,
});

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:px-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">GALLERY</h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
          <button className="font-semibold text-black underline">All</button>
          <button className="hover:text-black">Old Memories</button>
          <button className="hover:text-black">Events</button>
          <button className="hover:text-black">Recent</button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={img.src}
              alt={`Gallery image ${index}`}
              width={400}
              height={400}
              layout="responsive"
              objectFit="cover"
            />
            <div className="p-3 text-center">
              <p className="font-semibold text-lg text-gray-700">{img.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
