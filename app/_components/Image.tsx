"use client";
import React from "react";
import Image from "next/image";
import Cloudflare from "../../public/picofme (3).png";

export default function ImageInfo() {
  return (
    <div className="flex min-h-screen items-center justify-center ">
      <Image
        className="rounded-full w-[50vh]"
        src={Cloudflare}
        alt="Picture of the author"
      />
    </div>
  );
}
