"use client";

import { useState, useEffect } from "react";
import { PlusCircle, Edit, Trash2, X, Save, Loader2 } from "lucide-react";
import Navbar from "@/app/componants/Navbar";
import Footer from "@/app/componants/Footer";
import { Button } from "@/app/componants/ui/button";

const initialForm = {
    name: "",
    type: "",
    breed: "",
    age: "",
    gender: "",
    size: "",
    location: "",
    description: "",
    main_photo: "",
    contact_name: "",
    contact_phone: "",
    contact_email: "",
};

export default function Admin() {
    const [pets, setPets] = useState([]);
    const [form, setForm] = useState(initialForm);
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formVisible, setFormVisible] = useState(false);

    const API_URL = "http://18.234.255.163:8081/api";

    // Fetch all pets
    const fetchPets = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${API_URL}/pets`);
            if (!res.ok) throw new Error("Failed to load pets");
            const data = await res.json();
            setPets(data);
            setLoading(false);
            setError(null);
        } catch (err) {
            setError("Failed to load pets");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPets();
    }, []);

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // Create new pet
    // Modified createPet function in your Next.js page
const createPet = async () => {
    try {
        setLoading(true);
        
        // Add mode: 'cors' explicitly and ensure all required headers are set
        const res = await fetch(`${API_URL}/pets`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            mode: "cors", // Explicitly set CORS mode
            credentials: "include", // Include credentials if your backend supports it
            body: JSON.stringify({
                ...form,
                age: parseFloat(form.age),
            }),
        });
        
        if (!res.ok) throw new Error("Failed to create pet");
        setForm(initialForm);
        setFormVisible(false);
        fetchPets();
    } catch (err) {
        setError(err.message);
        console.error("Error creating pet:", err);
    } finally {
        setLoading(false);
    }
};
    // Update pet
    const updatePet = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${API_URL}/pets/${editingId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    age: parseFloat(form.age),
                }),
            });
            if (!res.ok) throw new Error("Failed to update pet");
            setForm(initialForm);
            setEditingId(null);
            setFormVisible(false);
            fetchPets();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Delete pet
    const deletePet = async (id) => {
        if (!confirm("Are you sure you want to delete this pet?")) return;
        try {
            setLoading(true);
            const res = await fetch(`${API_URL}/pets/${id}`, {
                method: "DELETE",
            });
            if (!res.ok) throw new Error("Failed to delete pet");
            fetchPets();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Start editing
    const startEdit = (pet) => {
        setForm({
            name: pet.name,
            type: pet.type,
            breed: pet.breed,
            age: pet.age.toString(),
            gender: pet.gender || "",
            size: pet.size || "",
            location: pet.location,
            description: pet.description,
            main_photo: pet.main_photo,
            contact_name: pet.contact_name,
            contact_phone: pet.contact_phone,
            contact_email: pet.contact_email,
        });
        setEditingId(pet.id);
        setFormVisible(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Cancel editing
    const cancelEdit = () => {
        setForm(initialForm);
        setEditingId(null);
        setFormVisible(false);
    };

    const formFields = [
        { key: "name", label: "Pet Name", type: "text", required: true },
        {
            key: "type", label: "Pet Type", type: "select", required: true,
            options: ["Dog", "Cat", "Bird", "Other"]
        },
        { key: "breed", label: "Breed", type: "text", required: true },
        { key: "age", label: "Age", type: "number", required: true, step: "0.1" },
        {
            key: "gender", label: "Gender", type: "select", required: false,
            options: ["Male", "Female", "Unknown"]
        },
        {
            key: "size", label: "Size", type: "select", required: false,
            options: ["Small", "Medium", "Large"]
        },
        {
            key: "location", label: "Location", type: "select", required: true,
            options: [
                "Colombo", "Gampaha", "Kalutara",
                "Kandy", "Matale", "Nuwara Eliya",
                "Galle", "Matara", "Hambantota",
                "Jaffna", "Kilinochchi", "Mannar", "Vavuniya", "Mullaitivu",
                "Batticaloa", "Ampara", "Trincomalee",
                "Kurunegala", "Puttalam",
                "Anuradhapura", "Polonnaruwa",
                "Badulla", "Monaragala",
                "Ratnapura", "Kegalle"
            ]
        },
        { key: "description", label: "Description", type: "textarea", required: true },
        { key: "main_photo", label: "Main Photo URL", type: "text", required: true },
        { key: "contact_name", label: "Contact Name", type: "text", required: true },
        { key: "contact_phone", label: "Contact Phone", type: "text", required: true },
        { key: "contact_email", label: "Contact Email", type: "email", required: true },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow w-full py-8 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Pet Admin Panel</h1>
                            <p className="text-gray-600">
                                Manage your pet listings and adoptions
                            </p>
                        </div>

                        {!formVisible && (
                            <Button
                                className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
                                onClick={() => setFormVisible(true)}
                            >
                                <PlusCircle className="h-5 w-5" />
                                Add New Pet
                            </Button>
                        )}
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                            {error}
                        </div>
                    )}

                    {/* Form */}
                    {formVisible && (
                        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold text-gray-900">
                                    {editingId ? "Edit Pet" : "Add New Pet"}
                                </h2>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={cancelEdit}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    if (editingId) updatePet();
                                    else createPet();
                                }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
                            >
                                {formFields.map((field) => (
                                    <div
                                        key={field.key}
                                        className={field.type === "textarea" ? "col-span-1 md:col-span-2" : ""}
                                    >
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            {field.label}
                                            {field.required && <span className="text-red-500">*</span>}
                                        </label>

                                        {field.type === "textarea" ? (
                                            <textarea
                                                name={field.key}
                                                value={form[field.key]}
                                                onChange={handleChange}
                                                required={field.required}
                                                rows={3}
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            />
                                        ) : field.type === "select" ? (
                                            <select
                                                name={field.key}
                                                value={form[field.key]}
                                                onChange={handleChange}
                                                required={field.required}
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            >
                                                <option value="">Select {field.label}</option>
                                                {field.options.map(option => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                type={field.type}
                                                step={field.step}
                                                name={field.key}
                                                value={form[field.key]}
                                                onChange={handleChange}
                                                required={field.required}
                                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            />
                                        )}
                                    </div>
                                ))}

                                <div className="col-span-1 md:col-span-2 flex justify-end gap-3 mt-4">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={cancelEdit}
                                        className="border-gray-300 text-gray-700"
                                        disabled={loading}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                                Processing...
                                            </>
                                        ) : editingId ? (
                                            <>
                                                <Save className="h-4 w-4" />
                                                Update Pet
                                            </>
                                        ) : (
                                            <>
                                                <PlusCircle className="h-4 w-4" />
                                                Add Pet
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* List Pets */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-gray-900">All Pets</h2>
                            <p className="text-gray-600">
                                Showing {pets.length} {pets.length === 1 ? 'pet' : 'pets'}
                            </p>
                        </div>

                        {loading && !pets.length ? (
                            <div className="text-center py-12">
                                <Loader2 className="h-8 w-8 animate-spin mx-auto text-purple-600" />
                                <p className="mt-2 text-gray-600">Loading pets...</p>
                            </div>
                        ) : pets.length === 0 ? (
                            <div className="text-center py-12 border border-dashed border-gray-300 rounded-lg">
                                <div className="mx-auto h-24 w-24 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3.332.67-4.5 2.5C10.832 3.67 9.26 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7Z" />
                                    </svg>
                                </div>
                                <h3 className="mt-2 text-lg font-medium text-gray-900">No pets found</h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    Get started by adding your first pet listing.
                                </p>
                                <div className="mt-6">
                                    <Button
                                        className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2"
                                        onClick={() => setFormVisible(true)}
                                    >
                                        <PlusCircle className="h-5 w-5" />
                                        Add New Pet
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="overflow-x-auto border border-gray-200 rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pet</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {pets.map((pet) => (
                                            <tr key={pet.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="h-10 w-10 flex-shrink-0">
                                                            {pet.main_photo ? (
                                                                <img
                                                                    className="h-10 w-10 rounded-full object-cover"
                                                                    src={pet.main_photo}
                                                                    alt={pet.name}
                                                                />
                                                            ) : (
                                                                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3.332.67-4.5 2.5C10.832 3.67 9.26 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7Z" />
                                                                    </svg>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="font-medium text-gray-900">{pet.name}</div>
                                                            <div className="text-sm text-gray-500">{pet.type} • {pet.breed}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900">Age: {pet.age} years</div>
                                                    <div className="text-sm text-gray-500">
                                                        {pet.gender && `${pet.gender} • `}
                                                        {pet.size && pet.size}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {pet.location}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    <div>{pet.contact_name}</div>
                                                    <div>{pet.contact_phone}</div>
                                                    <div className="text-purple-600">{pet.contact_email}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => startEdit(pet)}
                                                        className="text-purple-600 hover:text-purple-900 mr-2"
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => deletePet(pet.id)}
                                                        className="text-red-600 hover:text-red-900"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}