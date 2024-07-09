"use client";
import { CarouselAutoplay } from "@/sections/_examples/extra/carousel-view/carousel-autoplay";
import { ScrollToViewTemplate } from "../_examples/component-template";
import { DEFAULT_SLICE, ISlice } from "../gallery/GallerySlide";


export function HomeCarousel() {
  const slides: ISlice[] = [
    { ...DEFAULT_SLICE, coverUrl: "/images/kitchen/1.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/images/kitchen/2.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/images/kitchen/3.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/images/kitchen/4.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/images/kitchen/5.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/images/kitchen/6.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/images/kitchen/7.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/images/kitchen/8.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/images/kitchen/9.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/images/kitchen/10.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/images/kitchen/11.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/images/kitchen/12.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/images/kitchen/13.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/images/kitchen/14.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/images/kitchen/15.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/images/kitchen/16.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/images/kitchen/17.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/images/kitchen/18.jpg" },
    { ...DEFAULT_SLICE, coverUrl: "/images/kitchen/19.jpg" },
    
  ];

  return (
    <div className="mt-10">
      <CarouselAutoplay data={slides} />
    </div>
  );
}
