"use client";

import { useState, useEffect } from "react";
import { Search, Loader2 } from "lucide-react";
import { Button } from "@/app/componants/ui/button";
import Navbar from "@/app/componants/Navbar";
import Footer from "@/app/componants/Footer";
import PetCard from "@/app/componants/ui/PetCard";
import PetDetailsModal from "@/app/componants/ui/PetDetailsModal";

const BrowsePets = () => {
    const [pets, setPets] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [typeFilter, setTypeFilter] = useState("All");
    const [locationFilter, setLocationFilter] = useState("All Locations");
    const [selectedPet, setSelectedPet] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = "http://18.234.255.163:8081/api";

    // Fetch all pets from the API
    useEffect(() => {
        const fetchPets = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${API_URL}/pets`, {
                    method: "GET",
                    headers: { 
                        "Accept": "application/json"
                    },
                    mode: "cors",
                });
                
                if (!res.ok) throw new Error("Failed to load pets");
                const data = await res.json();
                setPets(data);
                setError(null);
            } catch (err) {
                console.error("Error fetching pets:", err);
                setError("Failed to load pets. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchPets();
    }, []);

    // Get unique locations from all pets for the location filter
    const locations = ["All Locations", ...new Set(pets.map(pet => pet.location))];

    // Filter pets based on search query and filters
    const filteredPets = pets.filter(pet => {
        if (typeFilter !== "All" && pet.type !== typeFilter) return false;
        if (locationFilter !== "All Locations" && pet.location !== locationFilter) return false;

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            return (
                pet.name.toLowerCase().includes(query) ||
                pet.breed.toLowerCase().includes(query) ||
                (pet.description && pet.description.toLowerCase().includes(query))
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
                                {locations.map(location => (
                                    <option key={location} value={location}>{location}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="mb-6">
                        <p className="text-gray-600">
                            Showing {filteredPets.length} {filteredPets.length === 1 ? 'pet' : 'pets'}
                        </p>
                    </div>

                    {loading ? (
                        <div className="text-center py-12">
                            <Loader2 className="h-8 w-8 animate-spin mx-auto text-purple-600" />
                            <p className="mt-2 text-gray-600">Loading pets...</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-12">
                            <div className="mx-auto h-24 w-24 text-red-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <h3 className="mt-2 text-lg font-medium text-gray-900">Error Loading Pets</h3>
                            <p className="mt-1 text-sm text-gray-500">{error}</p>
                            <div className="mt-6">
                                <Button
                                    className="bg-purple-600 hover:bg-purple-700 text-white"
                                    onClick={() => window.location.reload()}
                                >
                                    Try Again
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredPets.map((pet) => (
                                <PetCard 
                                    key={pet.id} 
                                    pet={pet} 
                                    onClick={openPetDetails} 
                                />
                            ))}
                        </div>
                    )}

                    {!loading && !error && filteredPets.length === 0 && (
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
                    <PetDetailsModal 
                        pet={selectedPet} 
                        onClose={closePetDetails} 
                    />
                )}
            </div>
            <Footer />
        </div>
    );
};

export default BrowsePets;