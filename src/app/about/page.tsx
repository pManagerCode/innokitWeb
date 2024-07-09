import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Innokit",
  description: "This is About Page for INNOVATIVE KITCHEN SYDNEY",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Innokit Pty Ltd is a proud, respectable and professional kitchen design business with a strong reputation for service, innovation and quality workmanship. Our company specialises in kitchen and joinery within multi-residential, high-end residential and commercial projects.

As part of our unique service, we manufacture, fabricate, supply and install all products. This process allows us to efficiently manage our production process to ensure premium standard and high-quality products. Our highly experienced and professional team will take you through the process from start to finish to provide you with the solutions you need."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
