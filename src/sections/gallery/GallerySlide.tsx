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
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Ketchen01.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Ketchen02.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Ketchen03.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Ketchen04.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Ketchen05.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Ketchen06.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Ketchen07.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Ketchen08.png" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Others01.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Others02.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Others03.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Others04.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Others05.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/Others06.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ShopFitting01.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ShopFitting02.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ShopFitting03.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ShopFitting04.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ShopFitting05.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ShopFitting06.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ShopFitting07.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ShopFitting08.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/Gallery/ShopFitting09.jpg" },
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
