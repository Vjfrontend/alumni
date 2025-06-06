"use client";
import Image from "next/image";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  

  return (
    <main className="min-h-screen  bg-white">
      <title>about us</title>

      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/images/14.jpg"
          alt="School building"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-white text-lg font-bold mb-1">
            JOGSOBA &apos;98
          </h1>
          <h2 className="text-purple-400 text-4xl font-bold mb-3">History Of Jogsoba’98 </h2>
          {/* <p className="text-white lg:text-2xl text-base max-w-4xl mb-4 px-4">
            We, the members of the Ijebu-Ode Grammar School Old Boys
            Association, 1998 Set — a non-profit and non-political organization
            — do hereby firmly and solemnly resolve to establish for ourselves a
            Constitution and to be governed by the provisions contained therein.
          </p> */}
          {/* <Link href="/signup">
            <Button
              className="bg-purple-400 text-black font-medium px-8 rounded"
              label="EXPLORE"
              onClick={() => console.log("Explore button clicked")}
            />
          </Link> */}
        </div>
      </div>
      <div className="max-w-6xl mt-3 mx-auto">
        <h1
          className="text-lg  text-gray-800 text-center my-8 px-4">
          The foundation students were 14: Emmanuel J. Idowu, David O. Segun,
          Emmanuel S. Ajayi, Jonathan W. Awonusi, Jonathan T. Adebogun, Emmanuel
          D. Degun, Ezekiel Ajayi later known as E. SAwolana, Michael A. Awote,
          Theophilus A. A Sadare, Victor A. Gansallo, Herbert A. Gansallo, John
          A. Osifeso and Josiah Osibogun. principals of: I. Abeokuta Grammar
          School (founded January, 1908) Late W.R.B Kuye ii. ljebu-ode Grammar
          School (founded Jan, 1913) Late Rev. I. O Ransome-Kuti iii. Ibadan
          Grammar School (founded March, 1913) Late Rev. (later Bishop) A. B.
          Akinyele iv. Ondo Boy's High School, Ondo (founded 1919) Late Rev.
          Canon M. C. Adeyemi who first suggested the idea of the brotherhood at
          a meeting held at St. Andrew's College, Oyo. The four schools are the
          foundation members of the brotherhood, other members joined later at
          different periods. To date, there are twelve schools in the group and
          they are all in the former Western State of Nigeria. With the creation
          of Oyo, Ondo, Ogun and Osun State, the AIONIAN Schools are: AIONIAN
          BROTHERHOOD January, 1923 by the C.M.S. (The Anglican Mission).
        </h1>
      </div>
    </main>
  );
}
