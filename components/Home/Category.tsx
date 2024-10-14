import { CategoryDataOne } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";

const Category = () => {
  return (
    <div className="tour_type_style__one lg:pt-30 py-12 relative z-1 ">
      <div className="container">
        <div className="text-center lg:pb-[60px] pb-[40px]">
          <h5 className="section-sub-title-v1">{CategoryDataOne.sub_title}</h5>
          <h2 className="section-title-v1">{CategoryDataOne.Title}</h2>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-base">
          {CategoryDataOne.categorys.map((item) => (
            <div className="sm:text-left text-center wow fadeInUp" key={item.id}>
              <div className="lg:max-w-[80px] max-w-[60px] sm:mx-0 mx-auto">
                <Image src={item.icon} width={100} height={100} alt="icon" className="" />
              </div>
              <h4 className="card-title-alpha lg:mt-6 mt-4">
                <Link href="/package-sidebar">{item.title}</Link>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
