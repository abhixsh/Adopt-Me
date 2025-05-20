"use client";

import { Heart, MapPin } from "lucide-react";
import { Button } from "@/app/componants/ui/button";

const PetCard = ({ pet, onClick }) => {
    return (
        <div
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200"
        >
            {/* Pet Image */}
            <div className="relative h-48 w-full">
                <div className="absolute top-2 right-2 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${pet.type === "Dog" ? "bg-purple-600" : "bg-purple-600"}`}>
                        {pet.type}
                    </span>
                </div>
                <div className="absolute top-2 left-2 z-10">
                    <button className="p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-100">
                        <Heart className="h-4 w-4 text-gray-400 hover:text-red-500" />
                    </button>
                </div>
                <img
                    src={pet.main_photo || "/placeholder-pet.jpg"}
                    alt={pet.name}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{pet.name}</h2>
                <div className="flex items-center text-gray-500 text-sm mt-1 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{pet.location}</span>
                </div>

                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{pet.breed}</span>
                    <span className="text-sm text-gray-600">{pet.age} {pet.age === 1 ? 'year' : 'years'}</span>
                </div>

                <p className="text-sm text-gray-600 line-clamp-3 mb-4 h-14">
                    {pet.description}
                </p>

                <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => onClick(pet)}
                >
                    View Details
                </Button>
            </div>
        </div>
    );
};

export default PetCard;