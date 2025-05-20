"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import { Loader2 } from "lucide-react";
import { Button } from "@/app/componants/ui/button";
import PetCard from "@/app/componants/ui/PetCard";
import PetDetailsModal from "@/app/componants/ui/PetDetailsModal";

const FeaturedPets = () => {
    const [pets, setPets] = useState([]);
    const [selectedPet, setSelectedPet] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = "http://localhost:8081/api";

    // Fetch pets from the API
    useEffect(() => {
        const fetchPets = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${API_URL}/pets?featured=true&limit=3`, {
                    method: "GET",
                    headers: { 
                        "Accept": "application/json"
                    },
                    mode: "cors",
                });
                
                if (!res.ok) throw new Error("Failed to load featured pets");
                const data = await res.json();
                setPets(data);
                setError(null);
            } catch (err) {
                console.error("Error fetching featured pets:", err);
                setError("Failed to load featured pets. Please try again later.");
                // Fallback to static data if API fails
                import("@/app/componants/data/petData").then(module => {
                    setPets(module.petsData.slice(0, 3));
                }).catch(err => {
                    console.error("Error loading fallback data:", err);
                });
            } finally {
                setLoading(false);
            }
        };

        fetchPets();
    }, []);

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
        <section className="w-full py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">Featured Pets</h2>
                    <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                        Meet some of our adorable pets looking for their forever homes.
                    </p>
                </div>

                {loading ? (
                    <div className="text-center py-12">
                        <Loader2 className="h-8 w-8 animate-spin mx-auto text-purple-600" />
                        <p className="mt-2 text-gray-600">Loading featured pets...</p>
                    </div>
                ) : error && pets.length === 0 ? (
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
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pets.map((pet) => (
                                <PetCard 
                                    key={pet.id} 
                                    pet={pet} 
                                    onClick={openPetDetails} 
                                />
                            ))}
                        </div>

                        {pets.length === 0 && !loading && (
                            <div className="text-center py-12">
                                <p className="text-gray-600">No featured pets available at the moment.</p>
                            </div>
                        )}
                    </>
                )}

                <div className="mt-10 text-center">
                    <Link href="/browse">
                        <Button
                            className="bg-purple-600 hover:bg-purple-700 text-white"
                        >
                            View All Pets
                        </Button>
                    </Link>
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