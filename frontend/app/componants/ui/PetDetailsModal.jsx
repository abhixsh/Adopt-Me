"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/app/componants/ui/button";

const PetDetailsModal = ({ pet, onClose }) => {
    if (!pet) return null;

    return (
        <div className="fixed inset-0 backdrop-blur-sm z-50 flex justify-center items-start overflow-y-auto">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full my-8 mx-4 max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b flex justify-between items-center">
                    <h2 className="text-xl font-bold">{pet.name}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                            <Image
                                src={pet.image}
                                alt={pet.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute top-3 right-3">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-purple-600`}>
                                    {pet.type}
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {pet.additionalImages && pet.additionalImages.map((img, index) => (
                                <div key={index} className="relative h-32 md:h-36 rounded-lg overflow-hidden">
                                    <Image
                                        src={img}
                                        alt={`${pet.name} photo ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">{pet.name}</h1>
                                <div className="flex items-center text-gray-500 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>{pet.location}</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div className="bg-gray-50 p-3 rounded-lg">
                                <p className="text-xs text-gray-500 mb-1">Breed</p>
                                <p className="font-medium">{pet.breed}</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                                <p className="text-xs text-gray-500 mb-1">Age</p>
                                <p className="font-medium">{pet.age}</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                                <p className="text-xs text-gray-500 mb-1">Gender</p>
                                <p className="font-medium">{pet.gender || "Unknown"}</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                                <p className="text-xs text-gray-500 mb-1">Size</p>
                                <p className="font-medium">{pet.size || "Medium"}</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-3">About {pet.name}</h2>
                            <p className="text-gray-700 whitespace-pre-line">
                                {pet.description}
                            </p>
                        </div>

                        {pet.ownerInfo && (
                            <div>
                                <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="font-medium mb-2">{pet.ownerInfo.name}</p>
                                    <div className="space-y-2 text-sm">
                                        <p className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            {pet.ownerInfo.phone}
                                        </p>
                                        <p className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            {pet.ownerInfo.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                            Call Now
                        </Button>
                        <Button className="flex-1" variant="outline">
                            Ask a Question by email
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetailsModal;