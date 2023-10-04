import React, { useState, useEffect } from 'react';
import image1 from '../assets/imag1.jpg';

function Home() {
    const [typedText, setTypedText] = useState('');
    const welcomeText = 'Best Writer For creating blog Articles...';

    useEffect(() => {
       
        const typeText = () => {
            const textLength = welcomeText.length;
            let currentLength = 0;

            const typeInterval = setInterval(() => {
                if (currentLength <= textLength) {
                    setTypedText(welcomeText.slice(0, currentLength));
                    currentLength++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 50); 
        };

        typeText();
    }, []);

    return (
        <div className="relative shadow-lg">
            <img src={image1} alt="Home image" className="w-full h-auto" />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-6">
                <h1 className="text-Gray-100 text-4xl font-bold p-4 rounded ">
                    {typedText}
                </h1>

                <div className="mt-4">
                    <button className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                        Log in
                    </button>
                    <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;

