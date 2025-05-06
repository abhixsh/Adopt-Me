"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, MapPin, X, Heart, Calendar, Info, ArrowLeft } from "lucide-react";
import { Button } from "@/app/componants/ui/button";
import Navbar from "@/app/componants/Navbar";
import Footer from "../componants/Footer";


const pets = [
    {
        id: "MaxDog",
        name: "Max",
        type: "Dog",
        location: "San Francisco, CA",
        breed: "Golden Retriever",
        age: "2 years old",
        gender: "Male",
        size: "Large",
        image: "/api/placeholder/400/400",
        additionalImages: [
            "/api/placeholder/400/400",
            "/api/placeholder/400/400",
            "/api/placeholder/400/400",
        ],
        description:
            "Max is a friendly and energetic Golden Retriever who loves to play fetch and go for long walks. He's great with children and other pets. He's fully vaccinated and house-trained. Max has been with us for 3 months and is eager to find his forever home. He enjoys playing with toys and is very social with other dogs.",
        ownerInfo: {
            name: "John Smith",
            phone: "(555) 123-4567",
            email: "john@example.com",
        },
        medicalInfo: {
            vaccinated: true,
            neutered: true,
            specialNeeds: "None",
        }
    },
    {
        id: "LunaCat",
        name: "Luna",
        type: "Cat",
        location: "Los Angeles, CA",
        breed: "Siamese",
        age: "1.5 years old",
        gender: "Female",
        size: "Medium",
        image: "/api/placeholder/400/400",
        additionalImages: [
            "/api/placeholder/400/400",
            "/api/placeholder/400/400",
        ],
        description:
            "Luna is a beautiful Siamese cat with striking blue eyes. She's playful but also enjoys quiet time and cuddling. She's litter-trained and gets along well with other cats. Luna was rescued from a shelter and has been in foster care for the past month. She's looking for a quiet home where she can feel safe and loved.",
        ownerInfo: {
            name: "Sarah Johnson",
            phone: "(555) 987-6543",
            email: "sarah@example.com",
        },
        medicalInfo: {
            vaccinated: true,
            neutered: true,
            specialNeeds: "Requires grain-free diet",
        }
    },
    {
        id: "BuddyDog",
        name: "Buddy",
        type: "Dog",
        location: "Seattle, WA",
        breed: "Labrador Mix",
        age: "3 years old",
        gender: "Male",
        size: "Large",
        image: "/api/placeholder/400/400",
        additionalImages: [
            "/api/placeholder/400/400",
        ],
        description:
            "Buddy is a sweet and gentle Labrador mix who loves people. He's great on walks and enjoys playing in the yard. He's looking for an active family who can give him plenty of exercise. Buddy is well-trained and responds to basic commands. He's been with his current foster family for 2 months.",
        ownerInfo: {
            name: "Michael Brown",
            phone: "(555) 456-7890",
            email: "michael@example.com",
        },
        medicalInfo: {
            vaccinated: true,
            neutered: true,
            specialNeeds: "Mild arthritis in back legs",
        }
    },
    {
        id: "OliverCat",
        name: "Oliver",
        type: "Cat",
        location: "Portland, OR",
        breed: "Tabby",
        age: "2 years old",
        gender: "Male",
        size: "Small",
        image: "/api/placeholder/400/400",
        additionalImages: [
            "/api/placeholder/400/400",
            "/api/placeholder/400/400",
        ],
        description:
            "Oliver is a curious and playful tabby cat. He loves to explore and play with toys. He's very affectionate and will often curl up in your lap for a nap. Oliver was found as a stray and has been in foster care for 6 weeks. He gets along well with other cats but may need time to adjust to dogs.",
        ownerInfo: {
            name: "Emily Wilson",
            phone: "(555) 234-5678",
            email: "emily@example.com",
        },
        medicalInfo: {
            vaccinated: true,
            neutered: true,
            specialNeeds: "None",
        }
    },
];

const BrowsePets = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [typeFilter, setTypeFilter] = useState("All");
    const [locationFilter, setLocationFilter] = useState("All Locations");
    const [selectedPet, setSelectedPet] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const filteredPets = pets.filter(pet => {

        if (typeFilter !== "All" && pet.type !== typeFilter) return false;

        if (locationFilter !== "All Locations" && pet.location !== locationFilter) return false;

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            return (
                pet.name.toLowerCase().includes(query) ||
                pet.breed.toLowerCase().includes(query) ||
                pet.description.toLowerCase().includes(query)
            );
        }

        return true;
    });

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
        <div>
            <Navbar />
            <div className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
                <div className="max-w-7xl mx-auto">

                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Pets</h1>
                        <p className="text-gray-600">
                            Find your perfect companion from our available pets.
                        </p>
                    </div>


                    <div className="flex flex-col sm:flex-row gap-4 mb-8 border-b pb-6">
                        <div className="relative flex-grow">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Search pets..."
                                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="w-full sm:w-40">
                            <select
                                value={typeFilter}
                                onChange={(e) => setTypeFilter(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            >
                                <option value="All">All Types</option>
                                <option value="Dog">Dogs</option>
                                <option value="Cat">Cats</option>
                                <option value="Bird">Birds</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="w-full sm:w-48">
                            <select
                                value={locationFilter}
                                onChange={(e) => setLocationFilter(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            >
                                <option value="All Locations">All Locations</option>
                                <option value="San Francisco, CA">San Francisco, CA</option>
                                <option value="Los Angeles, CA">Los Angeles, CA</option>
                                <option value="Seattle, WA">Seattle, WA</option>
                                <option value="Portland, OR">Portland, OR</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-6">
                        <p className="text-gray-600">
                            Showing {filteredPets.length} {filteredPets.length === 1 ? 'pet' : 'pets'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredPets.map((pet) => (
                            <div
                                key={pet.id}
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
                                    <Image
                                        src={pet.image}
                                        alt={pet.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
                                        <span className="text-sm text-gray-600">{pet.age}</span>
                                    </div>

                                    <p className="text-sm text-gray-600 line-clamp-3 mb-4 h-14">
                                        {pet.description}
                                    </p>

                                    <Button
                                        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                                        onClick={() => openPetDetails(pet)}
                                    >
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredPets.length === 0 && (
                        <div className="text-center py-12">
                            <div className="mx-auto h-24 w-24 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3.332.67-4.5 2.5C10.832 3.67 9.26 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7Z" />
                                </svg>
                            </div>
                            <h3 className="mt-2 text-lg font-medium text-gray-900">No pets found</h3>
                            <p className="mt-1 text-sm text-gray-500">
                                Try adjusting your search or filter criteria.
                            </p>
                            <div className="mt-6">
                                <Button
                                    className="bg-purple-600 hover:bg-purple-700 text-white"
                                    onClick={() => {
                                        setSearchQuery("");
                                        setTypeFilter("All");
                                        setLocationFilter("All Locations");
                                    }}
                                >
                                    Reset Filters
                                </Button>
                            </div>
                        </div>
                    )}
                </div>

                {isModalOpen && selectedPet && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start overflow-y-auto">
                        <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full my-8 mx-4 max-h-[90vh] overflow-y-auto">
                            <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b flex justify-between items-center">
                                <button
                                    onClick={closePetDetails}
                                    className="text-gray-500 hover:text-gray-700 flex items-center"
                                >
                                </button>
                                <button
                                    onClick={closePetDetails}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            <div className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                                        <Image
                                            src={selectedPet.image}
                                            alt={selectedPet.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute top-3 right-3">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-purple-600`}>
                                                {selectedPet.type}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        {selectedPet.additionalImages.map((img, index) => (
                                            <div key={index} className="relative h-32 md:h-36 rounded-lg overflow-hidden">
                                                <Image
                                                    src={img}
                                                    alt={`${selectedPet.name} photo ${index + 1}`}
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
                                            <h1 className="text-3xl font-bold text-gray-900">{selectedPet.name}</h1>
                                            <div className="flex items-center text-gray-500 mt-1">
                                                <MapPin className="h-4 w-4 mr-1" />
                                                <span>{selectedPet.location}</span>
                                            </div>
                                        </div>
                                        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                                            Adopt Me
                                        </Button>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                        <div className="bg-gray-50 p-3 rounded-lg">
                                            <p className="text-xs text-gray-500 mb-1">Breed</p>
                                            <p className="font-medium">{selectedPet.breed}</p>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded-lg">
                                            <p className="text-xs text-gray-500 mb-1">Age</p>
                                            <p className="font-medium">{selectedPet.age}</p>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded-lg">
                                            <p className="text-xs text-gray-500 mb-1">Gender</p>
                                            <p className="font-medium">{selectedPet.gender}</p>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded-lg">
                                            <p className="text-xs text-gray-500 mb-1">Size</p>
                                            <p className="font-medium">{selectedPet.size}</p>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h2 className="text-xl font-semibold mb-3">About {selectedPet.name}</h2>
                                        <p className="text-gray-700 whitespace-pre-line">
                                            {selectedPet.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="font-medium mb-2">{selectedPet.ownerInfo.name}</p>
                                            <div className="space-y-2 text-sm">
                                                <p className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                    {selectedPet.ownerInfo.phone}
                                                </p>
                                                <p className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                    {selectedPet.ownerInfo.email}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
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
                )}
            </div>
            <Footer />
        </div >
    );
};

export default BrowsePets;
