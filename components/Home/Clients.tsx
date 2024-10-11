import Marquee from "react-fast-marquee";
import { ClientsDataOne } from "@/constants/index";
import Image from "next/image";
const Clients = () => {
  return (
    <Marquee pauseOnHover={true} className="border-primary-1  border-b overflow-hidden">
      {ClientsDataOne.clients.map((item) => (
        <div
          className="partner-logo-item xl:min-w-[330px] lg:min-w-[290px] md:min-w-[200px] min-w-[170px] text-center"
          key={item.id}>
          <Image
            src={item.logo}
            alt="pratners"
            height={140}
            width={290}
            className="lg:max-w-[300px] max-w-[200px] mx-auto object-cover"
          />
        </div>
      ))}
    </Marquee>
  );
};

export default Clients;
