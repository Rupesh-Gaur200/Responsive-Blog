
import React from 'react'; 
import image1 from '../assets/imag1.jpg'; 

function Home() {
    return (
        <>
            <div class="relative">
  <img src={image1} alt="Home image" class="w-full h-auto" />

  <div className="absolute inset-0 flex justify-center items-center gap-4">
    <button className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      log in
    </button>
    
    <button className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Sign in</button>
  </div>
</div>
           
        </>
    );
}

export default Home;
