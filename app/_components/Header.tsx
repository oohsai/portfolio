"use client";
import Link from "next/link";
import React from "react";

export function Header() {
  return (
    <div className="w-full p-5">
      <div className="flex">
        <Link href={"/"}>oohsai</Link>
        <div className="flex absolute top-0 right-0 p-5">
          <Link href={"/projects"} className="pr-5">
            Projects
          </Link>
          <Link href={"/contact"} className="pr-5">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
