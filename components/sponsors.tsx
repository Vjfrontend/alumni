import React from 'react'

function Sponsors() {
  const sponsors = [
    { id: 1, logo: '/images/logo 1.png' },
    { id: 2, logo: '/images/logo 2.png' },
    { id: 3, logo: '/images/logo 3.png' },
  ];

  return (
    <div className="container mx-auto p-6 bg-transparent mb-10">
<h2 className='text-xl  font-bold text-center mb-6'> Our Sponsor And Partners</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-2">
        {sponsors.map(sponsor => (
          <div key={sponsor.id} className=" p-2 bg-transparent rounded-lg  flex items-center justify-center">
            <img src={sponsor.logo} alt="Sponsor Logo" className="h-20 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors
