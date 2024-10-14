// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function Hero() {
//   const images = [
//     "/assets/background/img_1.webp",
//     "/assets/background/img_2.webp",
//     "/assets/background/img_3.webp",
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isFading, setIsFading] = useState(false); // State to control fade animation

//   // Automatically slide images every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsFading(true); // Start zoom and fade-out animation
//       setTimeout(() => {
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Update image
//         setIsFading(false); // Start fade-in animation
//       }, 1000); // Delay for the zoom/fade-out effect
//     }, 4000); // 2 seconds interval

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <main className="relative flex h-[calc(100vh-70px)] w-screen flex-col justify-center items-center">
//       <div className="absolute w-full h-full">
//         {/* Background Image with zoom and fade animation */}
//         <div
//           className={`w-full h-full transition-all duration-500 ${
//             isFading ? " scale-110" : "opacity-100 scale-100"
//           }`}>
//           <Image
//             key={currentImageIndex}
//             className="w-full h-full object-cover object-center"
//             sizes="100vw"
//             fill
//             alt="Background Image"
//             src={images[currentImageIndex]}
//           />
//         </div>

//         {/* Overlay to shade the background */}
//         <div className="absolute inset-0 bg-black/50" />

//         {/* Centered text */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
//           <h2 className="text-4xl text-white">Beautiful landscape</h2>
//           <p className="text-2xl mt-4 text-purple-200">The magic of nature</p>
//         </div>
//       </div>

//       {/* Dots at the bottom to indicate the current slide */}
//       <div className="absolute bottom-5 flex justify-center space-x-2">
//         {images.map((_, index) => (
//           <div
//             key={index}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               currentImageIndex === index ? "bg-white" : "bg-gray-400"
//             }`}></div>
//         ))}
//       </div>
//     </main>
//   );
// }
// app/hero/page.tsx or app/hero/page.js (depending on whether you're using TypeScript)
import { client } from "@/sanity/lib/client";

// Fetch data directly in the server component
const query = `*[_type == "video"][0]{
  title,
  "videoUrl": videoFile.asset->url
}`;

export default async function Hero() {
  // Fetch video data directly in the component
  const videoData = await client.fetch(query);

  return (
    <main className="relative flex h-[calc(100vh-70px)] w-screen flex-col justify-center items-center">
      <div className="absolute w-full h-full">
        {/* Background video fetched from Sanity */}
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src={videoData.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay to shade the background */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Centered text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
          <h2 className="text-xl text-white">
            Explore the Wonders of Nepal with Customizable Tours
          </h2>
          <p className="text-2xl mt-4 text-purple-200">The magic of nature</p>
        </div>
      </div>
    </main>
  );
}
