import Link from "next/link";
import Image from "next/image";

const WhatsappButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-[100000]">
      <Link aria-label="Chat on WhatsApp" href="https://wa.me/9779851359964" target="_blank">
        <Image
          alt="Chat on WhatsApp"
          src="/assets/WhatsAppButtonGreenSmall.png"
          width="130"
          height="36"
          className="backdrop-blur-md"
        />
      </Link>
    </div>
  );
};

export default WhatsappButton;
