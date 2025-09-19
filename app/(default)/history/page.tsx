import Image from "next/image";

function HistoryPage() {
  return (
    <div className="bg-gray-100">
      <div className="relative h-[450px] w-full">
             <Image src="/images/about1 (2).jpg" alt="School building" fill className="object-cover brightness-75" priority />
             <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
               <h1 className="text-white text-xl font-bold mb-1">JOGSOBA &apos;98</h1>
               <h2 className="text-purple-400 text-4xl font-bold mb-3">HISTORY</h2>
               <p className="text-white text-xs lg:text-2xl max-w-4xl mb-4">
                 a platform where past students of ijebu-ode grammar school, 1998 set, reconnect, collaborate and contribute towards the development of our alma mater and the community.
               </p>
               {/* <Button
                 label="EXPLORE"
                 className="bg-purple-400 text-black font-medium px-8 rounded"
                 onClick={() => console.log("Explore button clicked")}
               /> */}
             </div>
           </div>
     
      <div className="max-w-7xl mx-auto space-y-16  py-12 px-4">
        <h3 className="text-3xl font-bold text-gray-800 text-center">
          The History of Ijebu-Ode Grammar School
        </h3>

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              The Foundation Students
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              The foundation students were 14: Emmanuel J. Idowu, David O.
              Segun, Emmanuel S. Ajayi, Jonathan W. Awonusi, Jonathan T.
              Adebogun, Emmanuel D. Degun, Ezekiel Ajayi later known as E.
              SAwolana, Michael A. Awote, Theophilus A. A Sadare, Victor A.
              Gansallo, Herbert A. Gansallo, John A. Osifeso and Josiah
              Osibogun. principals of: I. Abeokuta Grammar School (founded
              January, 1908) Late W.R.B Kuye ii. ljebu-ode Grammar School
              (founded Jan, 1913) Late Rev. I. O Ransome-Kuti iii. Ibadan
              Grammar School (founded March, 1913) Late Rev. (later Bishop) A.
              B. Akinyele iv. Ondo Boy's High School, Ondo (founded 1919) Late
              Rev. Canon M. C. Adeyemi who first suggested the idea of the
              brotherhood at a meeting held at St. Andrew's College, Oyo. The
              four schools are the foundation members of the brotherhood, other
              members joined later at different periods. To date, there are
              twelve schools in the group and they are all in the former Western
              State of Nigeria. With the creation of Oyo, Ondo, Ogun and Osun
              State, the AIONIAN Schools are: AIONIAN BROTHERHOOD January, 1923
              by the C.M.S. (The Anglican Mission).
            </p>
          </div>
          <div className="relative md:w-1/2 h-[300px] w-full">
            <Image
              src="/images/about1 (1).jpg"
              alt="School Building"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="relative md:w-1/2 h-[300px] w-full">
            <Image
              src="/images/about1 (4).jpg"
              alt="AIONIAN Brotherhood"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="md:w-1/2">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              AIONIAN Brotherhood
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              The school is a member of AIONIAN Group of schools. The first
              principal was Rev. S. J Gansallo. The school is The AIONIAN
              brotherhood was founded in 1930 by OYO STATE 1. Ibadan Grammar
              School, Ibadan OSUN STATE 1. Oduduwa College, lle-ife 2. Mesa
              Grammar School, llesa . Gbongan/Ode-Omu Gram. Sch., Gbongan . Ondo
              Boys's High School, Ondo . Imade College, Owo Victory College,
              Ikare 7. Manuwa Memorial Grammar Sch., lju-Ondo OGUN STATE 1.
              Abeokuta Grammar School, Abeokuta 2. ljebu-ode Grammar School,
              Ijebu-Ode 3. Remo Secondary School, Sagamu 4. Yewa College, llaro
              Schools in the brotherhood have in common an annual sports
              festival and academic competitions which is held in rotation among
              the houses as each school is called. JOGS for example is known as
              ljebu- Ode House.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Member Schools
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              AIONIAN BROTHERHOOD The school is a member of AIONIAN Group of
              schools. The AIONIAN brotherhood was founded in 1930 by principals
              of: I. Abeokuta Grammar School (founded January, 1908) Late W.R.B
              Kuye ii. ljebu-ode Grammar School (founded Jan, 1913) Late Rev. I.
              O Ransome-Kuti iii. Ibadan Grammar School (founded March, 1913)
              Late Rev. (later Bishop) A. B. Akinyele iv. Ondo Boy's High
              School, Ondo (founded 1919) Late Rev. Canon M. C. Adeyemi who
              first suggested the idea of the brotherhood at a meeting held at
              St. Andrew's College, Oyo.
            </p>
          </div>
          <div className="relative md:w-1/2 h-[300px] w-full">
            <Image
              src="/images/about1 (3).jpg"
              alt="Member Schools"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryPage;
