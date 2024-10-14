"use client";

import { useState, useEffect } from "react";

export default function Hero({ videoUrl }) {
  // State to manage text visibility
  const [showText, setShowText] = useState(true);

  // UseEffect to hide the text after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false); // Hide text after 5 seconds
    }, 3000);

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative flex h-[calc(100vh-70px)] w-screen flex-col justify-center items-center">
      <div className="absolute w-full h-full">
        {/* Background video fetched from Sanity */}
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay to shade the background */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Centered text */}
        {showText && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
            <h2 className="text-xl text-white">
              Explore the Wonders of Nepal
              <br /> with Customizable Tours
            </h2>
          </div>
        )}
      </div>
    </main>
  );
}
