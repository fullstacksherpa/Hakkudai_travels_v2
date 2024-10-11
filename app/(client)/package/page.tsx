import PackageCard from "@/components/Home/PackageCard";
import Breadcrumb from "@/components/Blog/Breadcrumb";
import { PackageDataOne } from "@/constants/index";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Packages | Nepal Tours",
  description:
    "Travel Nepal with our base packages and unlimited customization as per your tastes.",
  keywords: [
    "Nepal tour",
    " Nepal travel",
    "Nepal booking trip",
    "Nepal abs trek",
    " Nepal mount everest",
    "lumbini",
    "trip",
    "pokhara",
    "holiday",
    "Nepal mountain",
    "vacation",
  ],
};

const Allpackages = () => {
  return (
    <>
      <Breadcrumb page="" pageTitle="Our Packages" bgUrl="/assets/background/pashupati.webp" />

      {/*========== FEATURED PACKAGE STYLE ONE START==========*/}
      <div className="bg-gradient-to-t to-[#FFF1EC] from-white z-1 relative lg:pt-30 pt-24 ">
        <div className="absolute top-[10%] right-0 max-w-[14%] z-minus lg:inline-block hidden">
          <img src="./assets/images/illustration/tree-illustration.png" alt="leaf" />
        </div>
        <div className="absolute top-[5%] left-[1%] max-w-[9%] z-minus lg:inline-block hidden">
          <img src="./assets/images/illustration/bird-illustration.png" alt="leaf" />
        </div>
        <div className="container">
          <div className="grid grid-cols-12 lg:gap-12 gap-base">
            <div className="lg:col-span-12 col-span-12 grid md:grid-cols-3 grid-cols-1 gap-base">
              {PackageDataOne.packages.slice(0, 8).map((item, index) => (
                <PackageCard
                  key={item.id}
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  duration={item.duration}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*========== FEATURED PACKAGE STYLE ONE END==========*/}
    </>
  );
};

export default Allpackages;
