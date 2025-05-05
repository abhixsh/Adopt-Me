
"use client";

import Image from "next/image";
import Link from "next/link";
import { PawPrint, Search, Heart } from "lucide-react";
import { Button } from "@/app/componants/ui/button";

export default function Hero() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <section className="w-full py-6 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-[#f8f5ff]">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">

            {/* Left Column */}
            <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  Find Your Perfect Furry Friend
                </h1>
                <p className="max-w-[600px] text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-4">
                  Connect with shelters and pet owners to adopt your new best friend. Browse pets, submit adoption
                  requests, and bring home a new family member.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6">
                <Link href="/browse" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto text-sm sm:text-base">
                    <Search className="mr-2 h-4 w-4" />
                    Browse Pets
                  </Button>

                </Link>
                <Link href="/add-pet" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto text-sm sm:text-base border-purple-600 text-purple-600 hover:bg-gray-100 hover:text-purple-700"
                  >
                    <PawPrint className="mr-2 h-4 w-4" />
                    List a Pet
                  </Button>


                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md sm:shadow-lg relative">
                <div className="relative h-48 sm:h-56 md:h-64 w-full">
                  <Image
                    src="/api/placeholder/400/400"
                    alt="French Bulldog"
                    fill
                    className="object-cover rounded-t-2xl sm:rounded-t-3xl"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-700 flex items-center bg-white bg-opacity-80 p-1 sm:p-2 rounded-lg text-xs sm:text-sm">
                  <span className="font-semibold">14k+</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs ml-1">Adoptions</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md sm:shadow-lg relative">
                <div className="relative h-48 sm:h-56 md:h-64 w-full">
                  <Image
                    src="/api/placeholder/400/400"
                    alt="Corgi"
                    fill
                    className="object-cover rounded-t-2xl sm:rounded-t-3xl"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-sm sm:shadow-md flex items-center space-x-2 sm:space-x-3 pr-4 sm:pr-6">
                  <div className="bg-gray-800 rounded-full p-1 sm:p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-5 sm:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M2.166 4.999A11.954 11.954 000010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-xs sm:text-sm md:text-base">Already Certified</p>
                    <p className="text-xs text-gray-600 hidden sm:block">It has been legalized.</p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
