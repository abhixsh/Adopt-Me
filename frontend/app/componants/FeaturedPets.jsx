"use client";

import { useState } from "react";
import { Button } from "@/app/componants/ui/button";
import PetCard from "@/app/componants/ui/PetCard";
import PetDetailsModal from "@/app/componants/ui/PetDetailsModal";
import { petsData } from "@/app/componants/data/petData";

const FeaturedPets = () => {
    const [selectedPet, setSelectedPet] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Featured pets - showing only 3 for the homepage
    const featuredPets = petsData.slice(0, 3);

    const openPetDetails = (pet) => {
        setSelectedPet(pet);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closePetDetails = () => {
        setIsModalOpen(false);
        setSelectedPet(null);
        document.body.style.overflow = 'auto';
    };

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
                    {featuredPets.map((pet) => (
                        <PetCard 
                            key={pet.id} 
                            pet={pet} 
                            onClick={openPetDetails} 
                        />
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

            {isModalOpen && selectedPet && (
                <PetDetailsModal 
                    pet={selectedPet} 
                    onClose={closePetDetails} 
                />
            )}
        </section>
    );
};

export default FeaturedPets;