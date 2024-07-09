import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact US | Innokit",
  description: "This is Contact Page for INNOVATIVE KITCHEN SYDNEY",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Us" description="KEEP IN TOUCH WITH US" />

      <div className="container">
        <div className="w-full ">
          <div className="mb-12 lg:mb-16">
            <ul>
              <li>Address: 95 Market Street, Smithfield, NSW 2164</li>
              <li>Email: Info@innokit.com.au</li>
              <li>Phone: 0416 168 810</li>
            </ul>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default ContactPage;
