"use client";
import { Parallax } from "react-parallax";

const HeroThree = () => {
  return (
    <>
      <Parallax
        bgImage={"/assets/background/pokhara.webp"}
        strength={-150}
        bgImageAlt="background"
        bgClassName="object-cover"
        className="relative overflow-hidden z-[1] before:content-[''] before:absolute before:inset-0 before:bg-dark-1 before:bg-opacity-50 before:z-[1]">
        <div className="lg:pb-40 pb-9 lg:pt-[260px] pt-48 relative z-3">
          <div className="container">
            <div className="max-w-[900px] mx-auto text-center text-white">
              <h1 className="xl:text-7xl lg:text-4xl text-3xl font-bold leading-1.9 hero-glow-text">
                Experience Nepal
              </h1>
              <div className="max-w-[700px] mx-auto">
                <p className="lg:text-[25px] md:text-2md text-base pt-4 leading-1.7">
                  Where endless Himalayas meets vibrant culture and limitless adventure
                </p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default HeroThree;
