import PackageCard from "@/components/Home/PackageCard";
import Breadcrumb from "@/components/Blog/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";
import { getTours } from "@/sanityQueries";
import { urlFor } from "@/sanity/lib/image";

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

const Allpackages = async () => {
  const tours = await getTours();
  return (
    <>
      <Breadcrumb page="" pageTitle="Our Packages" bgUrl="/assets/background/pashupati.webp" />

      {/*========== FEATURED PACKAGE STYLE ONE START==========*/}
      <div className="bg-gradient-to-t to-[#FFF1EC] from-white z-1 relative lg:pt-30 pt-24 ">
        <div className="container">
          <div className="grid grid-cols-12 lg:gap-12 gap-base">
            <div className="lg:col-span-12 col-span-12 grid md:grid-cols-3 grid-cols-1 gap-base">
              {tours.map((tour) => (
                <PackageCard
                  key={tour._id}
                  title={tour.title}
                  tourImage={urlFor(tour.tourImage.asset).url()} // Resolve image URL
                  price={tour.price}
                  day={tour.day}
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
