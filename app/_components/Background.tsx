"use client";
import React from "react";
import Intro from "./Intro";
import ImageInfo from "./Image";

export function Background() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" min-h-screen grid grid-cols-2">
        <div>
          <Intro />
        </div>
        <div>
          <ImageInfo />
        </div>
      </div>
    </div>
  );
}
