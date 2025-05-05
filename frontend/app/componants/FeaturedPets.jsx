"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/app/componants/ui/button";

const pets = [
    {
        id: "MaxDog",
        name: "Max",
        type: "Dog",
        location: "San Francisco, CA",
        breed: "Golden Retriever",
        age: "2 years old",
        image: "https://via.placeholder.com/300x200?text=Max",
        description:
            "Max is a friendly and energetic Golden Retriever who loves to play fetch and go for long walks. He's great with children and other pets. He's fully vaccinated and house-trained.",
    },
    {
        id: "LunaCat",
        name: "Luna",
        type: "Cat",
        location: "Los Angeles, CA",
        breed: "Siamese",
        age: "1.5 years old",
        image: "https://via.placeholder.com/300x200?text=Luna",
        description:
            "Luna is a beautiful Siamese cat with striking blue eyes. She's playful but also enjoys quiet time and cuddling. She's litter-trained and gets along well with other cats.",
    },
    {
        id: "BuddyDog",
        name: "Buddy",
        type: "Dog",
        location: "Seattle, WA",
        breed: "Labrador Mix",
        age: "3 years old",
        image: "https://via.placeholder.com/300x200?text=Buddy",
        description:
            "Buddy is a sweet and gentle Labrador mix who loves people. He's great on walks and enjoys playing in the yard. He's looking for an active family who can give him plenty of exercise.",
    },
];

const FeaturedPets = () => {
    return (
        <section className="w-full py-12 sm:py-16 md:py-20 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="space-y-4 text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Featured Pets</h2>
                    <p className="max-w-[600px] text-gray-500 md:text-lg mx-auto">
                        Meet some of our adorable pets looking for their forever homes.
                    </p>
                </div>

                <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {pets.map((pet) => (
                        <div
                            key={pet.id}
                            className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100"
                        >
                            {/* Pet Image Container */}
                            <div className="relative h-48 sm:h-56 w-full">
                                <Image
                                    src={pet.image}
                                    alt={pet.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                {/* Pet Type Badge */}
                                <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                                    {pet.type}
                                </span>

                            </div>

                            {/* Pet Info */}
                            <div className="flex flex-col flex-grow p-4 sm:p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{pet.name}</h3>
                                    <span className="text-sm font-medium text-purple-600">{pet.age}</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-1">{pet.location}</p>
                                <p className="text-sm font-medium text-gray-700 mb-2">{pet.breed}</p>
                                
                                <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                                    {pet.description}
                                </p>
                                
                                <Button 
                                    className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-auto"
                                >
                                    View Details
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 sm:mt-12 text-center">
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-purple-600 text-purple-600 hover:bg-gray-100 hover:text-purple-700"
                    >
                        View All Pets
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedPets;
