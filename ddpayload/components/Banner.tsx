import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";
import { useRouter } from 'next/router'
import ShortUniqueId from 'short-unique-id';


const Banner = () => {
  
  const router = useRouter()

  const createGenerator = () => {

    const uid = new ShortUniqueId();
    const generatorId = uid();

    router.push(`/generator/${generatorId}`)
  }



  return (
    <div className="relative " id="header md:my-auto">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-24 lg:px-8 xl:mt-32">
            <div className="sm:text-center lg:text-left">
              <div className="lg:pt-20">
                <span className="block xl:inline text-gray-200 lg:text-6xl tracking-tight font-extrabold text-3xl md:text-4xl">
                    Generate <br className="hidden lg:flex" />
                    <span className="block text-[#F4ABC4] xl:inline">
                    Dummy Data APIs
                    </span>
                    <br className="hidden lg:flex" />
                    to use on your applications
                </span>{" "}
              </div>
              <p className="mt-8 text-gray-600 text-lg font-bold to build">🤫 Takes less than a minute</p>
              <br />
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button
                    onClick={createGenerator}
                    className="w-full flex items-center justify-center px-10 py-2 border border-transparent text-base font-medium rounded-md text-black bg-gray-200 hover:bg-[#F4ABC4] md:py-4 md:text-lg md:px-10"
                  >
                    Generate 🚀
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3"></div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 py-2 flex justify-center items-center">
        <Image
          className="h-46 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={logo}
          alt="header"
        />
      </div>
    </div>
  );
};

export default Banner;
