"use client"

import { Search, Heart, PawPrint } from "lucide-react"

export default function FeatureCard() {
    return (
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
                        <p className="max-w-[900px] text-gray-500 text-sm sm:text-base md:text-lg mx-auto">
                            Our platform connects pet lovers with animals in need of a loving home.
                        </p>
                    </div>
                </div>

                <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12">
                    <div className="flex flex-col items-center space-y-3 rounded-xl border border-purple-100 p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-purple-100">
                            <Search className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold">Search</h3>
                        <p className="text-center text-gray-500 text-sm sm:text-base">
                            Browse pets by type and location to find your perfect match.
                        </p>
                        <div className="pt-2 mt-auto">
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-3 rounded-xl border border-purple-100 p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-purple-100">
                            <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold">Connect</h3>
                        <p className="text-center text-gray-500 text-sm sm:text-base">
                            Submit an adoption request to connect with the pet's owner or shelter.
                        </p>
                        <div className="pt-2 mt-auto">
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-3 rounded-xl border border-purple-100 p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white sm:col-span-2 lg:col-span-1 sm:max-w-md mx-auto lg:max-w-none lg:mx-0 w-full">
                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-purple-100">
                            <PawPrint className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold">Adopt</h3>
                        <p className="text-center text-gray-500 text-sm sm:text-base">
                            Complete the adoption process and welcome your new pet home.
                        </p>
                        <div className="pt-2 mt-auto">
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}