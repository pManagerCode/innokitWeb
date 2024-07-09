
import Breadcrumb from "@/components/Common/Breadcrumb";
import {GallerySlide} from "@/sections/gallery/GallerySlide";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Innokit",
  description: "This is Gallery Page for INNOVATIVE KITCHEN SYDNEY",
};

const GalleryPage = () => {
  return (
    <>
      <Breadcrumb pageName="Gallery" description="" />

      <GallerySlide />
    </>
  );
};

export default GalleryPage;
