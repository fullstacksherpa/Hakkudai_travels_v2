import Image from "next/image";

export default function Hero() {
  return (
    <main className="relative flex h-[calc(100vh-70px)] w-screen flex-col justify-center items-center">
      <div className="absolute w-full h-full">
        <Image
          className="w-full h-full object-cover object-center"
          sizes="100vw"
          fill
          alt="Background Image"
          src={`/assets/background/img_1.webp`}
        />

        <div className="absolute bottom-8 left-10 py-3 px-6 bg-[#0000007c]">
          <h2 className="text-4xl">Beautiful landscape</h2>
          <p className="text-2xl mt-4 text-purple-200">The magic of nature</p>
        </div>
      </div>
    </main>
  );
}
