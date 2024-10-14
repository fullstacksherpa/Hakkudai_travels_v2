import { PackageDataOne } from "@/constants";
import PackageCard from "./PackageCard";
import { Tour } from "@/utils/interface";
import { urlFor } from "@/sanity/lib/image"; // Assuming you have a helper to generate image URLs

interface PackageProps {
  tours: Tour[]; // Define the 'tours' prop as an array of Tour objects
}

const Package = ({ tours }: PackageProps) => {
  console.log(tours);
  return (
    <div className="package_style__one lg:pt-30 pt-24 lg:pb-30 pb-24 z-1 relative">
      <div className="container">
        <div className="text-center lg:pb-[60px] pb-[40px]">
          <h5 className="section-sub-title-v1">{PackageDataOne.sub_title}</h5>
          <h2 className="section-title-v1">{PackageDataOne.title}</h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {tours.slice(0, 5).map((tour) => (
            <PackageCard
              key={tour._id}
              slug={tour.slug.current}
              title={tour.title}
              tourImage={urlFor(tour.tourImage.asset).url()} // Resolve image URL
              price={tour.price}
              day={tour.day}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Package;
