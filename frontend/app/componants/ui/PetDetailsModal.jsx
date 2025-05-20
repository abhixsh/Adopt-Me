"use client";

import { X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/app/componants/ui/button";

const PetDetailsModal = ({ pet, onClose }) => {
    if (!pet) return null;
    
    const contactInfo = {
        name: pet.contact_name || "Pet Owner",
        phone: pet.contact_phone || "Not provided",
        email: pet.contact_email || "Not provided"
    };

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
                            <img
                                src={pet.main_photo || "/placeholder-pet.jpg"}
                                alt={pet.name}
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute top-3 right-3">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-purple-600`}>
                                    {pet.type}
                                </span>
                            </div>
                        </div>

                        {/* If additional images logic needed in the future */}
                        <div className="grid grid-cols-1 gap-4 place-content-center">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-medium text-lg mb-2">Quick Info</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="w-24 text-gray-500">Type:</span>
                                        <span className="font-medium">{pet.type}</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-24 text-gray-500">Breed:</span>
                                        <span className="font-medium">{pet.breed}</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-24 text-gray-500">Age:</span>
                                        <span className="font-medium">{pet.age} {pet.age === 1 ? 'year' : 'years'}</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-24 text-gray-500">Gender:</span>
                                        <span className="font-medium">{pet.gender || "Unknown"}</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-24 text-gray-500">Size:</span>
                                        <span className="font-medium">{pet.size || "Not specified"}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-24 text-gray-500">Location:</span>
                                        <span className="font-medium flex items-center">
                                            <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                                            {pet.location}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">{pet.name}</h1>
                                <div className="flex items-center text-gray-500 mt-1">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    <span>{pet.location}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-3">About {pet.name}</h2>
                            <p className="text-gray-700 whitespace-pre-line">
                                {pet.description}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="font-medium mb-2">{contactInfo.name}</p>
                                <div className="space-y-2 text-sm">
                                    <p className="flex items-center">
                                        <Phone className="h-4 w-4 mr-2 text-gray-500" />
                                        {contactInfo.phone}
                                    </p>
                                    <p className="flex items-center">
                                        <Mail className="h-4 w-4 mr-2 text-gray-500" />
                                        {contactInfo.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <a href={`tel:${contactInfo.phone}`} className="flex-1">
                            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                                Call Now
                            </Button>
                        </a>
                        <a href={`mailto:${contactInfo.email}`} className="flex-1">
                            <Button className="w-full" variant="outline">
                                Ask a Question by Email
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetailsModal;