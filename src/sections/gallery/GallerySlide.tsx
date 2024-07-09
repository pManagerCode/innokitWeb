"use client";
import { CarouselAutoplay } from "@/sections/_examples/extra/carousel-view/carousel-autoplay";
import { ScrollToViewTemplate } from "../_examples/component-template";

interface ISlice {
  id: string;
  title: string;
  coverUrl: string;
  description: string;
}

export function GallerySlide() {
  const slides: ISlice[] = [
    {
      id: "Bathrooms01.jpg",
      title: "Bathrooms01.jpg",
      coverUrl: "/Gallery/Bathrooms01.jpg",
      description: "Bathrooms01.jpg",
    },
    {
      id: "Bathrooms02.jpg",
      title: "Bathrooms02.jpg",
      coverUrl: "/Gallery/Bathrooms02.jpg",
      description: "Bathrooms02.jpg",
    },
    {
      id: "Ketchen01.jpg",
      title: "Ketchen01.jpg",
      coverUrl: "/Gallery/Ketchen01.jpg",
      description: "Ketchen01.jpg",
    },
    {
      id: "Ketchen02.jpg",
      title: "Ketchen02.jpg",
      coverUrl: "/Gallery/Ketchen02.jpg",
      description: "Ketchen02.jpg",
    },
    {
      id: "Ketchen03.jpg",
      title: "Ketchen03.jpg",
      coverUrl: "/Gallery/Ketchen03.jpg",
      description: "Ketchen03.jpg",
    },
    {
      id: "Ketchen04.jpg",
      title: "Ketchen04.jpg",
      coverUrl: "/Gallery/Ketchen04.jpg",
      description: "Ketchen04.jpg",
    },
    {
      id: "Ketchen05.jpg",
      title: "Ketchen05.jpg",
      coverUrl: "/Gallery/Ketchen05.jpg",
      description: "Ketchen05.jpg",
    },
    {
      id: "Ketchen06.jpg",
      title: "Ketchen06.jpg",
      coverUrl: "/Gallery/Ketchen06.jpg",
      description: "Ketchen06.jpg",
    },
    {
      id: "Ketchen07.jpg",
      title: "Ketchen07.jpg",
      coverUrl: "/Gallery/Ketchen07.jpg",
      description: "Ketchen07.jpg",
    },
    {
      id: "Ketchen08.jpg",
      title: "Ketchen08.jpg",
      coverUrl: "/Gallery/Ketchen08.png",
      description: "Ketchen08.jpg",
    },
    {
      id: "Others01.jpg",
      title: "Others01.jpg",
      coverUrl: "/Gallery/Others01.jpg",
      description: "Others01.jpg",
    },
    {
      id: "Others02.jpg",
      title: "Others02.jpg",
      coverUrl: "/Gallery/Others02.jpg",
      description: "Others02.jpg",
    },
    {
      id: "Others03.jpg",
      title: "Others03.jpg",
      coverUrl: "/Gallery/Others03.jpg",
      description: "Others03.jpg",
    },
    {
      id: "Others04.jpg",
      title: "Others04.jpg",
      coverUrl: "/Gallery/Others04.jpg",
      description: "Others04.jpg",
    },
    {
      id: "Others05.jpg",
      title: "Others05.jpg",
      coverUrl: "/Gallery/Others05.jpg",
      description: "Others05.jpg",
    },
    {
      id: "Others06.jpg",
      title: "Others06.jpg",
      coverUrl: "/Gallery/Others06.jpg",
      description: "Others06.jpg",
    },
    {
      id: "ShopFitting01.jpg",
      title: "ShopFitting01.jpg",
      coverUrl: "/Gallery/ShopFitting01.jpg",
      description: "ShopFitting01.jpg",
    },
    {
      id: "ShopFitting02.jpg",
      title: "ShopFitting02.jpg",
      coverUrl: "/Gallery/ShopFitting02.jpg",
      description: "ShopFitting02.jpg",
    },
    {
      id: "ShopFitting03.jpg",
      title: "ShopFitting03.jpg",
      coverUrl: "/Gallery/ShopFitting03.jpg",
      description: "ShopFitting03.jpg",
    },
    {
      id: "ShopFitting04.jpg",
      title: "ShopFitting04.jpg",
      coverUrl: "/Gallery/ShopFitting04.jpg",
      description: "ShopFitting04.jpg",
    },
    {
      id: "ShopFitting05.jpg",
      title: "ShopFitting05.jpg",
      coverUrl: "/Gallery/ShopFitting05.jpg",
      description: "ShopFitting05.jpg",
    },
    {
      id: "ShopFitting06.jpg",
      title: "ShopFitting06.jpg",
      coverUrl: "/Gallery/ShopFitting06.jpg",
      description: "ShopFitting06.jpg",
    },
    {
      id: "ShopFitting07.jpg",
      title: "ShopFitting07.jpg",
      coverUrl: "/Gallery/ShopFitting07.jpg",
      description: "ShopFitting07.jpg",
    },
    {
      id: "ShopFitting08.jpg",
      title: "ShopFitting08.jpg",
      coverUrl: "/Gallery/ShopFitting08.jpg",
      description: "ShopFitting08.jpg",
    },
    {
      id: "ShopFitting09.jpg",
      title: "ShopFitting09.jpg",
      coverUrl: "/Gallery/ShopFitting09.jpg",
      description: "ShopFitting09.jpg",
    },
    {
      id: "Wardrobes01.jpg",
      title: "Wardrobes01.jpg",
      coverUrl: "/Gallery/Wardrobes01.jpg",
      description: "Wardrobes01.jpg",
    },
    {
      id: "Wardrobes02.jpg",
      title: "Wardrobes02.jpg",
      coverUrl: "/Gallery/Wardrobes02.jpg",
      description: "Wardrobes02.jpg",
    },
    {
      id: "Wardrobes03.jpg",
      title: "Wardrobes03.jpg",
      coverUrl: "/Gallery/Wardrobes03.png",
      description: "Wardrobes03.jpg",
    },
  ];



  return (
    <div className="mt-10">

      <CarouselAutoplay data={slides} />
    </div>
  );
}
