"use client";
import { CarouselAutoplay } from "@/sections/_examples/extra/carousel-view/carousel-autoplay";
import { ScrollToViewTemplate } from "../_examples/component-template";

export interface ISlice {
  id: string;
  title: string;
  coverUrl: string;
  description: string;
}

export const DEFAULT_SLICE = {
  id: "",
  title: "",
  coverUrl: "",
  description: "",
};

export function GallerySlide() {
  const slides: ISlice[] = [
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Bathrooms01.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Bathrooms02.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ketchen01.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ketchen02.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ketchen03.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ketchen04.JPG" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ketchen05.JPG" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ketchen06.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ketchen07.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ketchen08.png" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Others01.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Others02.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Others03.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Others04.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Others05.JPG" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Others06.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ShopFitting01.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ShopFitting02.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ShopFitting03.JPG" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ShopFitting04.JPG" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ShopFitting05.JPG" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ShopFitting06.JPG" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ShopFitting07.JPG" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ShopFitting08.JPG" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ShopFitting09.JPG" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Wardrobes01.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Wardrobes02.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Wardrobes03.png" },
  ];

  return (
    <div className="mt-10">
      <CarouselAutoplay data={slides} />
    </div>
  );
}
