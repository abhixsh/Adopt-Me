"use client"

import { Search, Heart, PawPrint } from "lucide-react"

export default function FeatureCard() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our platform connects pet lovers with animals in need of a loving home.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                            <Search className="h-6 w-6 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold">Search</h3>
                        <p className="text-center text-gray-500">
                            Browse pets by type and location to find your perfect match.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                            <Heart className="h-6 w-6 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold">Connect</h3>
                        <p className="text-center text-gray-500">
                            Submit an adoption request to connect with the pet's owner or shelter.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                            <PawPrint className="h-6 w-6 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold">Adopt</h3>
                        <p className="text-center text-gray-500">
                            Complete the adoption process and welcome your new pet home.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
