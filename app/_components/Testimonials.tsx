"use client";
import Image from "next/image";
import React from "react";

export default function Testimonials() {
  return (
    <>
      <div className="text-6xl font-bold mb-10 p-10">Testimonials</div>
      <div className=" h-screen flex flex-col max-w-lg mx-auto">
        <div className="flex-1  p-4">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-end">
              <div className="pr-1 font-light text-gray-100">You</div>
            </div>

            <div className="flex justify-end">
              <div className="bg-[#1e84f9] font-light p-2 rounded-lg max-w-xs">
                Great! I&apos;d like to know you better. What have you worked
                with till now?
              </div>
            </div>

            <div className="flex">
              <div>
                <div className="justify-end"></div>
                <div className="flex">
                  <div className=" grid place-items-end">
                    <div className="avatar h-8 w-8 mr-1  ">
                      <div className="w-24 rounded-full">
                        <Image
                          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          alt="profile image"
                          height={8}
                          width={8}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="pr-1 font-light pb-2 text-slate-400 text-sm">
                      Surya (UI/UX Lead, snipeit.ai)
                    </div>
                    <div className=" bg-[#1C1C1C] text-white p-2 rounded-lg max-w-xs">
                      Sai has been a great individual to work with! He has
                      always been able to deliver what he been requested.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              <div>
                <div className="justify-end"></div>
                <div className="flex">
                  <div className=" grid place-items-end">
                    <div className="avatar h-8 w-8 mr-1  ">
                      <div className="w-24 rounded-full">
                        <Image
                          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          alt="profile image"
                          height={8}
                          width={8}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="pr-1 font-light pb-2 text-slate-400">
                      Hey
                    </div>
                    <div className=" bg-[#1C1C1C] text-white p-2 rounded-lg max-w-xs">
                      Not too bad, just a bit busy. How about you?
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              <div>
                <div className="justify-end"></div>
                <div className="flex">
                  <div className=" grid place-items-end">
                    <div className="avatar h-8 w-8 mr-1  ">
                      <div className="w-24 rounded-full">
                        <Image
                          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          alt="profile image"
                          height={8}
                          width={8}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="pr-1 font-light pb-2 text-slate-400">
                      Eshaan (Design)
                    </div>
                    <div className=" bg-[#1C1C1C] text-white p-2 rounded-lg max-w-xs">
                      Not too bad, just a bit busy. How about you?
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              <div>
                <div className="justify-end"></div>
                <div className="flex">
                  <div className=" grid place-items-end">
                    <div className="avatar h-8 w-8 mr-1  ">
                      <div className="w-24 rounded-full">
                        <Image
                          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          alt="profile image"
                          height={8}
                          width={8}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="pr-1 font-light pb-2 text-slate-400">
                      Eshaan (Design)
                    </div>
                    <div className=" bg-[#1C1C1C] text-white p-2 rounded-lg max-w-xs">
                      Not too bad, just a bit busy. How about you?
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
                Sure
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
                Thanks
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
                😁
              </div>
            </div>

            <div className="flex">
              <div className="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
                Okay
              </div>
            </div>

            <div className="flex">
              <div className="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
                😄
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
