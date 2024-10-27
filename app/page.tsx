import Image from "next/image";
import React from 'react';
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center">
      <div className="flex w-full max-w-6xl mx-auto">
        <div className="relative w-1/2">
          <Image 
            src="/home1.jpeg" 
            alt="Home Image"
            layout="responsive" 
            width={1400}  // Increased width
            height={900}  // Increased height
            objectFit="cover" 
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1 p-6 md:p-8 bg-white rounded-lg shadow-lg ml-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Your <span className="text-yellow-400">Vision</span> Our <span className="text-yellow-400 ">Design</span>
          </h1>
          <p className="mt-2 text-gray-800 text-base md:text-sm"> {/* Decreased font size */}
            &apos;Welcome&apos; Your home is a canvas waiting to be transformed. With our tailored interior design services&apos; we bring your vision to life&apos; creating spaces that are both beautiful and functional. Let's design your dream together.
          </p>
          <div className="mt-4">
            <span className="block text-gray-800 font-medium">Check our design</span>
            <Link 
        href="/design" 
        className="mt-6 inline-block px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
      >
        Explore Our Designs
      </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
