"use client";
import { Tilt } from "react-tilt";
import { DEFAULT_SLICE, ISlice } from "../gallery/GallerySlide";
import { Stack } from "@mui/material";
import { CarouselAutoplay } from "../_examples/extra/carousel-view/carousel-autoplay";
import { useState } from "react";

export function Projects() {
  const data = {
    "Kirribilli Residential Project": [
      {
        ...DEFAULT_SLICE,
        coverUrl: "/Projects/Kirribilli Residential Project/1.jpg",
      },
      {
        ...DEFAULT_SLICE,
        coverUrl: "/Projects/Kirribilli Residential Project/2.jpg",
      },
    ],
    "Mary St Auburn Project (160 units)": [
      {
        ...DEFAULT_SLICE,
        coverUrl: "/Projects/Mary St Auburn Project (160 units)/1.jpg",
      },
      {
        ...DEFAULT_SLICE,
        coverUrl: "/Projects/Mary St Auburn Project (160 units)/2.jpg",
      },
      {
        ...DEFAULT_SLICE,
        coverUrl: "/Projects/Mary St Auburn Project (160 units)/3.jpg",
      },
      {
        ...DEFAULT_SLICE,
        coverUrl: "/Projects/Mary St Auburn Project (160 units)/4.png",
      },
    ],
    "Sans Souci Project": [
      { ...DEFAULT_SLICE, coverUrl: "/Projects/Sans Souci Project/1.jpg" },
      { ...DEFAULT_SLICE, coverUrl: "/Projects/Sans Souci Project/2.jpg" },
      { ...DEFAULT_SLICE, coverUrl: "/Projects/Sans Souci Project/3.jpg" },
      { ...DEFAULT_SLICE, coverUrl: "/Projects/Sans Souci Project/4.jpg" },
    ],
    "Schofield Project (306 units)": [
      {
        ...DEFAULT_SLICE,
        coverUrl: "/Projects/Schofield Project (306 units)/1.jpg",
      },
      {
        ...DEFAULT_SLICE,
        coverUrl: "/Projects/Schofield Project (306 units)/2.jpg",
      },
      {
        ...DEFAULT_SLICE,
        coverUrl: "/Projects/Schofield Project (306 units)/3.jpg",
      },
      {
        ...DEFAULT_SLICE,
        coverUrl: "/Projects/Schofield Project (306 units)/4.jpg",
      },
    ],
  };

  const [slides, setSlides] = useState<ISlice[]>([...data["Kirribilli Residential Project"],...data["Mary St Auburn Project (160 units)"],...data["Sans Souci Project"],...data["Schofield Project (306 units)"]]);
  function handleClick(projectName: string) {
    const newSlides = data[projectName];
    setSlides(newSlides);
  }

  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  const style = {
    height: 150,
    width: 300,
    background: "lightslategray",
    fontSize: "x-large",
    padding: "36px",
    textAlign: "center",
    cursor: "pointer",
  };

  return (
    <>
      <div className="container mb-10">
        <Stack direction="row" spacing={5}>
          <div
            onMouseEnter={() => handleClick("Kirribilli Residential Project")}
          >
            <Tilt options={defaultOptions} style={style}>
              <div>Kirribilli Residential Project</div>
            </Tilt>
          </div>

          <div
            onMouseEnter={() =>
              handleClick("Mary St Auburn Project (160 units)")
            }
          >
            <Tilt options={defaultOptions} style={style}>
              <div>Mary St Auburn Project (160 units)</div>
            </Tilt>
          </div>

          <div onMouseEnter={() => handleClick("Sans Souci Project")}>
            <Tilt options={defaultOptions} style={style}>
              <div>Sans Souci Project</div>
            </Tilt>
          </div>

          <div
            onMouseEnter={() => handleClick("Schofield Project (306 units)")}
          >
            <Tilt options={defaultOptions} style={style}>
              <div>Schofield Project (306 units)</div>
            </Tilt>
          </div>
        </Stack>
      </div>

      <CarouselAutoplay data={slides} />
    </>
  );
}
