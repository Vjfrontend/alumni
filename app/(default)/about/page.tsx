"use client";
import Image from "next/image";
import Button from "@/components/ui/button";

export default function AboutPage() {
  const members = [
    { name: "Michael Akinyemi", position: "President " },
    { name: "Lateef Aebambo", position: "Vice president" },
    { name: "Niyi Ajanlekoko", position: "Secretary " },
    { name: "Tomiwa Kuroji", position: "Financial Secretary " },
    { name: "Moyosore Okunariwo", position: " Social Secretary" },
    { name: "Odusote Wole", position: "Chief Whip/ Social Media Admin" },
    // { name: "SANDRA RILEY", position: "TEACHER" },
    // { name: "MARIA ARNOLD", position: "TEACHER" },
  ];
  return (
    <main className="min-h-screen bg-white">
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
          <h2 className="text-[#FFD700] text-4xl font-bold mb-3">ABOUT</h2>
          <p className="text-white lg:text-2xl text-base max-w-4xl mb-4 px-4">
            We, the members of the Ijebu-Ode Grammar School Old Boys
            Association, 1998 Set — a non-profit and non-political organization
            — do hereby firmly and solemnly resolve to establish for ourselves a
            Constitution and to be governed by the provisions contained therein.
          </p>
          <Button
            className="bg-[#FFD700] hover:bg-[#E6C200] text-black font-medium px-8 rounded"
            label="EXPLORE"
            onClick={() => console.log("Explore button clicked")}
          />
        </div>
      </div>

      {/* About Content */}
      <div className=" py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-4">
          {/* Left Column - Image */}
          <div className="relative h-[300px] md:h-auto">
            <Image
              src="/images/student.jpg"
              alt="School group photo"
              fill
              className="object-cover rounded-md md:rounded-lg"
            />
          </div>

          {/* Right Column - Text */}
          <div className="flex flex-col justify-center bg-gray-100 p-8 space-y-4">
            <h3 className="text-xl font-bold text-gray-700">
              The History of ijebu-ode Grammer School
            </h3>
            <div className="text-sm text-gray-600 space-y-4">
              <h3 className="text-sm font-bold text-gray-700">
                {" "}
                THE FOUNDATION STUDENTS
              </h3>
              <p>
                The foundation students were 14: Emmanuel J. Idowu, David O.
                Segun, Emmanuel S. Ajayi, Jonathan W. Awonusi, Jonathan T.
                Adebogun, Emmanuel D. Degun, Ezekiel Ajayi later known as E.
                SAwolana, Michael A. Awote, Theophilus A. A Sadare, Victor A.
                Gansallo, Herbert A. Gansallo, John A. Osifeso and
                Josiah Osibogun.
              </p>
              <p>
                principals of: I. Abeokuta Grammar School (founded January,
                1908) Late W.R.B Kuye ii. ljebu-ode Grammar School (founded Jan,
                1913) Late Rev. I. O Ransome-Kuti iii. Ibadan Grammar School
                (founded March, 1913) Late Rev. (later Bishop) A. B. Akinyele
                iv. Ondo Boy's High School, Ondo (founded 1919) Late Rev. Canon
                M. C. Adeyemi who first suggested the idea of the brotherhood at
                a meeting held at St. Andrew's College, Oyo. The four schools
                are the foundation members of the brotherhood, other members
                joined later at different periods. To date, there are twelve
                schools in the group and they are all in the former Western
                State of Nigeria. With the creation of Oyo, Ondo, Ogun and Osun
                State, the AIONIAN Schools are: AIONIAN BROTHERHOOD January,
                1923 by the C.M.S. (The Anglican Mission). The school is a
                member of AIONIAN Group of schools. The first principal was Rev.
                S. J Gansallo. The school is The AIONIAN brotherhood was founded
                in 1930 by OYO STATE 1. Ibadan Grammar School, Ibadan OSUN STATE
                1. Oduduwa College, lle-ife 2. Mesa Grammar School, llesa .
                Gbongan/Ode-Omu Gram. Sch., Gbongan . Ondo Boys's High School,
                Ondo . Imade College, Owo Victory College, Ikare 7. Manuwa
                Memorial Grammar Sch., lju-Ondo OGUN STATE 1. Abeokuta Grammar
                School, Abeokuta 2. ljebu-ode Grammar School, Ijebu-Ode 3. Remo
                Secondary School, Sagamu 4. Yewa College, llaro Schools in the
                brotherhood have in common an annual sports festival and
                academic competitions which is held in rotation among the houses
                as each school is called. JOGS for example is known as ljebu-
                Ode House.
              </p>
              <p>
                AIONIAN BROTHERHOOD The school is a member of AIONIAN Group of
                schools. The AIONIAN brotherhood was founded in 1930 by
                principals of: I. Abeokuta Grammar School (founded January,
                1908) Late W.R.B Kuye ii. ljebu-ode Grammar School (founded Jan,
                1913) Late Rev. I. O Ransome-Kuti iii. Ibadan Grammar School
                (founded March, 1913) Late Rev. (later Bishop) A. B. Akinyele
                iv. Ondo Boy's High School, Ondo (founded 1919) Late Rev. Canon
                M. C. Adeyemi who first suggested the idea of the brotherhood at
                a meeting held at St. Andrew's College, Oyo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <main className="min-h-screen">
        {/* Purple header */}
        <div className="w-full h-20 bg-[#5D2D91]"></div>

        {/* Content area with light gray background */}
        <div className="bg-[#f2f2f2] py-12 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-12">
              <h2 className="text-xl font-bold mb-1">COMMITTEE MEMBERS</h2>
              <div className="w-12 h-0.5 bg-black mx-auto">
              </div>
            </div>

            {/* Members grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {members.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Profile photo placeholder */}
                  <div className="w-24 h-24 rounded-full bg-[#0a1026] mb-3"></div>

                  {/* Member card */}
                  <div className="bg-white shadow-md w-full max-w-[150px] py-3 px-4 text-center">
                    <h3 className="font-bold text-sm">{member.name}</h3>
                    <div className="w-12 h-0.5 bg-[#ff3366] mx-auto my-1"></div>
                    <p className="text-gray-500 text-xs">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
