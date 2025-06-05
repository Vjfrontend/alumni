"use client"
import React from 'react';
import Image from 'next/image';
import GoogleMap from '@/components/GoogleMap';
import ContactForm from '@/components/ContactForm';
import Button from '@/components/ui/button'; // Adjust the path based on your project structure
import Link from 'next/link';

const Contact = () => {
  return (
  <>
                <title>Contact</title>

  <div className="relative h-[500px] w-full">
          <Image src="/images/14.jpg" alt="School building" fill className="object-cover brightness-75" priority />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-white text-lg font-bold mb-1">JOGSOBA &apos;98</h1>
            <h2 className="text-purple-400 text-4xl font-bold mb-3">Contact</h2>
            <p className="text-white lg:text-2xl text-base max-w-4xl mb-4 px-4">
              A prestigious alumni group of students of IGBOBI OKE GRAMMAR SCHOOL, founded on the premise of giving back
              to the society towards the advancement of our alma mater and the community at large.
            </p>
            <Link href="#contact">
           
            <Button 
              className="bg-purple-400 text-black font-medium px-8 rounded" 
              label="CONTACT" 
              onClick={() => console.log('Explore button clicked')} 
            />
             </Link>
          </div>
        </div>
    <div className="flex flex-col md:flex-row justify-center items-center mt-28 max-w-7xl mx-auto bg-white ">
    <div className="w-full md:w-1/2 flex justify-center p-4">
      <GoogleMap latitude={37.7749} longitude={-122.4194} zoom={10} />
    </div>
    <div className="w-full md:w-1/2 flex justify-center p-4">
      <ContactForm />
    </div>
  </div>
  
  </>
  );
};

export default Contact;