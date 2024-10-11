import Breadcrumb from "@/components/Blog/Breadcrumb";
import ContactForm from "@/components/ui/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Arid - Travel & Tourism HTML/Tailwind CSS Template",
  description: "Welcome, Arid - Travel & Tourism HTML/Tailwind CSS Template",
  keywords: [
    "tour",
    "travel",
    "booking",
    "rental",
    "nextJs",
    "tailwind",
    "trip",
    "beach",
    "holidy",
    "cruise",
    "vacation",
  ],
};

const Contact = () => {
  return (
    <>
      {/*========== CONTACT US STYLE START ==========*/}
      <div className="lg:pt-30 pt-24  relative z-1 bg-gradient-to-t to-[#FFF1EC] from-white">
        <div className="absolute top-[7%] right-0 max-w-[14%] z-minus lg:inline-block hidden">
          <img src="./assets/background/tree-illustration.png" alt="leaf" />
        </div>
        <div className="container">
          <div className="lg:pt-16 pt-9">
            <div className="text-center lg:pb-[60px] pb-[40px]">
              <h5 className="section-sub-title-v1">Get in Touch</h5>
              <h2 className="section-title-v1">Feel Free to Contact with us</h2>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-base">
            <div className="shadow-custom-1 bg-white lg:py-8 py-7 px-base wow fadeInUp">
              <div className="flex">
                <div className="mr-[15px] shrink-0 lg:text-3xl text-2xl text-[#219FFF]">
                  <i className="bi bi-envelope-at" />
                </div>
                <div>
                  <h4 className="text-dark-1 lg:text-2md text-md font-semibold">Email Us</h4>
                  <ul className="text-dark-3 space-y-1 text-base font-medium mt-2">
                    <li>
                      <a
                        href="mailto:hakkudaitoursandtravel@gmail.com"
                        className="hover:text-primary-1 duration-200">
                        hakkudaitoursandtravel@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="shadow-custom-1 bg-white lg:py-8 py-7 px-base wow fadeInUp"
              data-wow-delay="0.2s">
              <div className="flex">
                <div className="mr-[15px] shrink-0 lg:text-3xl text-2xl text-[#17BD8D]">
                  <i className="bi bi-telephone-forward" />
                </div>
                <div>
                  <h4 className="text-dark-1 lg:text-2md text-md font-semibold">Call us</h4>
                  <ul className="text-dark-3 space-y-1 text-base font-medium mt-2">
                    <li>
                      <a href="tel:+9779851359964" className="hover:text-primary-1 duration-200">
                        +977-9851359964
                      </a>
                    </li>
                    <li>
                      <a href="tel:+9779745296964" className="hover:text-primary-1 duration-200">
                        +977-9745296964
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="shadow-custom-1 bg-white lg:py-8 py-7 px-base wow fadeInUp"
              data-wow-delay="0.4s">
              <div className="flex">
                <div className="mr-[15px] shrink-0 lg:text-3xl text-2xl text-[#F53D6B]">
                  <i className="bi bi-geo-alt" />
                </div>
                <div>
                  <h4 className="text-dark-1 lg:text-2md text-md font-semibold">Location</h4>
                  <ul className="text-dark-3 space-y-1 text-base font-medium mt-2">
                    <li>Bhaktapur, Nepal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*========== CONTACT US STYLE END ==========*/}
    </>
  );
};

export default Contact;
