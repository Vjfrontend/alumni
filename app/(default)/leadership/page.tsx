import Image from "next/image";

function LeadershipPage() {
    const members = [
        { name: "Michael Akinyemi", position: "President" },
        { name: "Lateef Aebambo", position: "Vice President" },
        { name: "Niyi Ajanlekoko", position: "Secretary" },
        { name: "Tomiwa Kuroji", position: "Financial Secretary" },
        { name: "Moyosore Okunariwo", position: "Social Secretary" },
        { name: "Odusote Wole", position: "Chief Whip/Social Media Admin" },
    ];
      const regimes = [
        {
          title: "Inaugural Regime",
          members: [
            { role: "President", name: "Adenuga Lekan" },
            { role: "Vice President", name: "Ojoye Olamide" },
            { role: "General Secretary", name: "Ajanlekoko Niyi" },
            { role: "Social Secretary", name: "Femi Okuyelu" },
            { role: "Financial Secretary", name: "Remi Oladipupo" },
            { role: "Chief Whip", name: "Goke Sokoya" },
            { role: "Admin", name: "Olalekan Ayodele" },
            { role: "Founder", name: "Ogunmade Babafemi" },
          ],
        },
        {
          title: "2nd Regime",
          members: [
            { role: "President", name: "Femi Okuyelu" },
            { role: "Vice President", name: "Adeboye Kunle" },
            {
              role: "General Secretary",
              name: "Owolabi Adewale (relieved by Tope Fatubaro after relocation)",
            },
            { role: "Social Secretary", name: "Femi Dada" },
            { role: "Financial Secretary", name: "Tomiwa Kuroju" },
            { role: "Chief Whip", name: "Goke Sokoya" },
            { role: "Admin", name: "Olalekan Ayodele" },
            { role: "Founder", name: "Ogunmade Babafemi" },
          ],
        },
      ];
  return (
    <div className="bg-gray-100">
      <div className="relative h-[450px] w-full">
             <Image src="/images/14.jpg" alt="School building" fill className="object-cover brightness-75" priority />
             <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
               <h1 className="text-white text-xl font-bold mb-1">JOGSOBA &apos;98</h1>
               <h2 className="text-purple-400 text-4xl font-bold mb-3">Leadership</h2>
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
     
    <main className="min-h-screen ">
        {/* Purple header */}
        <div className="w-full h-20 bg-purple-400"></div>

        {/* Content area with light gray background */}
        <div className="bg-[#f2f2f2] py-12 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-12">
              <h2 className="text-xl font-bold mb-1">COMMITTEE MEMBERS</h2>
              <div className="w-12 h-0.5 bg-black mx-auto"></div>
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
         <div className="text-center mb-12">

        <h2 className="text-xl font-bold mb-1">LEADERSHIP HISTORY</h2>
         </div>
      </main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-6xl  mx-auto">
        
        {regimes.map((regime, i) => (
          <div key={i}>
            <h2 className="text-2xl font-bold mb-4">
              {regime.title} Executive Members
            </h2>
            <div className="space-y-4">
              {regime.members.map((member, j) => (
                <div key={j} className="bg-gray-50 p-4 rounded shadow-sm">
                  <p className="text-lg font-semibold">{member.role}</p>
                  <p className="text-gray-700">{member.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <main className="min-h-screen max-w-6xl mx-auto">
        {/* Purple header */}
        <div className="w-full h-20 bg-purple-400"></div>

        {/* Content area with light gray background */}
        <div className="bg-[#f2f2f2] py-12 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section title */}
            <div className="text-center mb-12">
              <h2 className="text-xl font-bold mb-1">BOARD OF TRUSTEES</h2>
              <div className="w-12 h-0.5 bg-black mx-auto"></div>
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
    </div>
  );
}

export default LeadershipPage;
