"use client";
import React from "react";

export function Header() {
  return (
    <div className="w-full p-5">
      <div className="flex">
        <div>oohsai</div>
        <div className="flex absolute top-0 right-0 p-5">
          <div className="pr-5">About</div>
          <div className="pr-5">Skills</div>
          <div className="pr-5">Projects</div>
          <div className="pr-5">Contacts</div>
        </div>
      </div>
    </div>
  );
}
