import { PackageDataOne } from "@/constants/index";
import Image from "next/image";
import PackageCard from "./PackageCard";
import Link from "next/link";

const Package = () => {
  return (
    <div className="package_style__one lg:pt-30 pt-24 lg:pb-30 pb-24 z-1 relative">
      <div className="absolute bottom-[10%] left-[2%] max-w-[13%] z-minus lg:inline-block hidden">
        <img src="/assets/backgound/leaf-illustration-2.png" alt="leaf" />
      </div>
      <div className="absolute top-[7%] right-0 max-w-[14%] z-minus lg:inline-block hidden">
        <img src="/assets/background/tree-illustration.png" alt="leaf" />
      </div>
      <div className="container">
        <div className="text-center lg:pb-[60px] pb-[40px]">
          <h5 className="section-sub-title-v1">{PackageDataOne.sub_title}</h5>
          <h2 className="section-title-v1">{PackageDataOne.title}</h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-base">
          {PackageDataOne?.packages
            .slice(0, 5)
            .map((item, index) => (
              <PackageCard
                key={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
                duration={item.duration}
              />
            ))}

          <div
            className="bg-primary-1  bg-center bg-no-repeat bg-cover text-center relative p-base flex items-center justify-center wow fadeInUp"
            data-wow-delay="0.4s">
            <Image src="/assets/images/backgrounds/package-bg.png" alt="background" fill />
            <div className="relative z-3">
              <Link href="/package" className="btn_primary__v1 border border-white mt-base">
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
