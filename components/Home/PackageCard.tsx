import Image from "next/image";
import Link from "next/link";
import { TourCardInterface } from "@/utils/interface";

const PackageCard = ({ title, price, day, tourImage, slug }: TourCardInterface) => {
  return (
    <div className="group/card package-card-style-one wow fadeInUp">
      {/* Link wrapping the whole card */}
      <Link href={`/package/${slug.current}`}>
        <div className="overflow-hidden relative">
          <Image
            width={4466}
            height={500}
            placeholder="blur"
            blurDataURL="/assets/images/blur-placeholder.png"
            src={tourImage}
            alt={title}
            className="w-full group-hover/card:scale-105 duration-300"
          />
        </div>
        <h3 className="card-title-alpha group-hover/card:text-primary-1 lg:mt-6 mt-5">{title}</h3>
        <ul className="flex flex-wrap lg:text-[15px] text-[13px] font-medium text-dark-2 mt-4 package-feature">
          <li>
            <span className="text-primary-1">
              <i className="bi bi-people" />
            </span>
          </li>
          <li>
            <span className="text-primary-1">
              <i className="bi bi-clock" />
            </span>
            <span className="text-black ">{day} Days</span>
          </li>
          <li>
            <span className="text-primary-1">
              <i className="bi bi-coin" />
            </span>
            <span>
              <span className="text-primary-1 font-bold">Rs.{price}</span>
            </span>
          </li>
        </ul>
      </Link>
    </div>
  );
};

export default PackageCard;
