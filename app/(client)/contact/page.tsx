import Breadcrumb from "@/components/Blog/Breadcrumb";
import { Container } from "@/components/layouts/Container";
import { Section } from "@/components/layouts/Section";
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
      <Section className="bg-[#022c22]">
        <Container>
          <div className="pt-3">
            <div className="text-center lg:pb-[60px] pb-[40px]">
              <h5 className="section-sub-title-v1">Get in Touch</h5>
              <h2
                className="font-medium lg:text-3xl text-lg md:text-2xl text-white
              ">
                Feel Free to Contact with us
              </h2>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-base">
            <div className="bg-[#bef264] rounded-3xl p-5 text-[#1f2e05] ">
              <h4 className="text-dark-1 lg:text-2md text-md font-semibold">Email Us</h4>
              <ul className="text-dark-3 space-y-1 text-base font-medium mt-2">
                <li>
                  <a
                    href="mailto:hakkudaitoursandtravel@gmail.com"
                    className="hover:text-primary-1 text-[#1f2e05] underline underline-offset-4">
                    hakkudaitoursandtravel@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-[#bef264] rounded-3xl p-5 text-[#1f2e05] ">
              <h4 className="text-dark-1 lg:text-2md text-md font-semibold">Call us</h4>
              <ul className="text-dark-3 space-y-1 text-base font-medium mt-2">
                <li>
                  <a href="tel:+9779851359964" className="underline underline-offset-4">
                    +977-9851359964
                  </a>
                </li>
                <li>
                  <a href="tel:+9779745296964" className="underline underline-offset-4">
                    +977-9745296964
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-[#bef264] rounded-3xl p-5 text-[#1f2e05]">
              <h4 className="text-dark-1 lg:text-2md text-md font-semibold">Location</h4>
              <ul className="text-dark-3 space-y-1 text-base font-medium mt-2">
                <li>Bhaktapur, Nepal</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
      {/*========== CONTACT US STYLE END ==========*/}
    </>
  );
};

export default Contact;
