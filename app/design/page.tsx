import Image from "next/image";


const Design = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-white shadow">
  
      </header>

      <main className="flex-grow max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
  <span className="hover:text-yellow-500 transition-colors duration-300">Our Design Services</span>
</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image 
              src="/living room.jpeg" 
              alt="Modern Living Room" 
              width={400} 
              height={300} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Modern Living Room</h3>
              <p className="mt-2 text-gray-600">Experience comfort and style with our modern living room designs&apos; perfect for relaxation and gatherings.</p>
            </div>
          </div>
          
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image 
              src="/cozy room.jpeg" 
              alt="Cozy Bedroom" 
              width={400} 
              height={300} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Cozy Bedroom</h3>
              <p className="mt-2 text-gray-600">Transform your bedroom into a cozy retreat with our stylish and personalized designs.</p>
            
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image 
              src="/dinig room.jpeg" 
              alt="Elegant Dining Room" 
              width={400} 
              height={300} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Elegant Dining Room</h3>
              <p className="mt-2 text-gray-600">Create memorable dining experiences with our elegant dining room designs that combine beauty and functionality.</p>
             
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image 
              src="/kitchen.jpeg" 
              alt="kitchen" 
              width={400} 
              height={300} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Kitchen</h3>
              <p className="mt-2 text-gray-600">This is our signature kitchen design&apos; blending modern aesthetics with timeless elegance.</p>
             
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image 
              src="/basement.jpeg" 
              alt="basement" 
              width={400} 
              height={300} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Basement Flooring</h3>
              <p className="mt-2 text-gray-600">Elevate your basement's style and comfort with flooring that combines durability and warmth&apos; perfect for any space.</p>
             
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image 
              src="/movie area.jpeg" 
              alt="movie" 
              width={400} 
              height={300} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Cinema Sanctuary</h3>
              <p className="mt-2 text-gray-600">Transform your home into a Cinema Sanctuary&apos; where every movie night becomes a luxurious escape into the world of film.</p>
             
            </div>
          </div>
        </div>
      </main>

 
    </div>
  );
};

export default Design;
