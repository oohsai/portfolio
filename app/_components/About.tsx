"use client";

import React from "react";
import Education from "./Education";
import Experience from "./Experience";

export default function About() {
  return (
    <div className="p-10">
      <div className="text-6xl font-bold mb-10">About Me</div>
      <div className="mt-8 text-zinc-400 tracking-wide leading-relaxed">
        I&apos;m a full-stack developer with a passion for building modern,
        responsive, and scalable web applications. I have experience working
        with a variety of technologies, including React, Node.js Express, and
        MongoDB.
      </div>
      <div className="grid grid-cols-2 mt-2">
        <div>
          <Education />
        </div>
        <div>
          <Experience />
        </div>
      </div>
    </div>
  );
}
