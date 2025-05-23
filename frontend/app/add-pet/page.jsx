"use client";

import { useState } from "react";
import { PawPrint, Info, MapPin, Mail, Phone, User, Loader2 } from "lucide-react";
import { Button } from "@/app/componants/ui/button";
import Navbar from "@/app/componants/Navbar";
import Footer from "../componants/Footer";

const ListPetForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        breed: "",
        age: "",
        gender: "",
        size: "",
        location: "",
        description: "",
        main_photo: "",  // URL only
        contact_name: "",
        contact_phone: "",
        contact_email: ""
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [photoPreview, setPhotoPreview] = useState(null);

    const API_URL = "http://18.234.255.163:8081/api";

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // If changing the main photo URL, update the preview
        if (name === "main_photo" && value) {
            setPhotoPreview(value);
        }
    };

    // Clear the photo preview and URL
    const clearPhotoUrl = () => {
        setPhotoPreview(null);
        setFormData({
            ...formData,
            main_photo: ""
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setLoading(true);
            setError(null);
            
            // Prepare the data to match the API expectations
            const petData = {
                ...formData,
                age: parseFloat(formData.age),
            };
            
            // Send the data to the API
            const res = await fetch(`${API_URL}/pets`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                mode: "cors",
                credentials: "include",
                body: JSON.stringify(petData),
            });
            
            if (!res.ok) throw new Error("Failed to submit pet listing");
            
            // Show success message and reset form
            setSuccess(true);
            setFormData({
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
                contact_email: ""
            });
            setPhotoPreview(null);
            
            // Scroll to top to show success message
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
        } catch (err) {
            setError(err.message);
            console.error("Error listing pet:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <PawPrint className="h-8 w-8 text-purple-600 mr-2" />
                            <h1 className="text-3xl font-bold text-gray-800">List a Pet for Adoption</h1>
                        </div>
                        <p className="text-gray-600 max-w-lg mx-auto">
                            Provide details about the pet you want to list for adoption.
                        </p>
                    </div>
                    
                    {/* Success Message */}
                    {success && (
                        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                            Your pet has been successfully listed for adoption. Thank you!
                        </div>
                    )}
                    
                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                            {error}
                        </div>
                    )}

                    {/* Form Container */}
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                        <div className="p-6 sm:p-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-1">Pet Information</h2>
                            <p className="text-gray-500 text-sm mb-6">Fill out the form below with accurate information about the pet.</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            Pet Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="e.g., Buddy"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    {/* Pet Type */}
                                    <div className="space-y-2">
                                        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                                            Pet Type
                                        </label>
                                        <select
                                            id="type"
                                            name="type"
                                            value={formData.type}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            required
                                        >
                                            <option value="" disabled>Select type</option>
                                            <option value="Dog">Dog</option>
                                            <option value="Cat">Cat</option>
                                            <option value="Bird">Bird</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    {/* Breed */}
                                    <div className="space-y-2">
                                        <label htmlFor="breed" className="block text-sm font-medium text-gray-700">
                                            Breed
                                        </label>
                                        <input
                                            type="text"
                                            id="breed"
                                            name="breed"
                                            value={formData.breed}
                                            onChange={handleInputChange}
                                            placeholder="e.g., Golden Retriever"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    {/* Age */}
                                    <div className="space-y-2">
                                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                                            Age (years)
                                        </label>
                                        <input
                                            type="number"
                                            id="age"
                                            name="age"
                                            value={formData.age}
                                            onChange={handleInputChange}
                                            placeholder="e.g., 2.5"
                                            step="0.1"
                                            min="0"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            required
                                        />
                                    </div>

                                    {/* Gender */}
                                    <div className="space-y-2">
                                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                            Gender
                                        </label>
                                        <select
                                            id="gender"
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            required
                                        >
                                            <option value="" disabled>Select gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Unknown">Unknown</option>
                                        </select>
                                    </div>

                                    {/* Size */}
                                    <div className="space-y-2">
                                        <label htmlFor="size" className="block text-sm font-medium text-gray-700">
                                            Size
                                        </label>
                                        <select
                                            id="size"
                                            name="size"
                                            value={formData.size}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            required
                                        >
                                            <option value="" disabled>Select size</option>
                                            <option value="Small">Small</option>
                                            <option value="Medium">Medium</option>
                                            <option value="Large">Large</option>
                                        </select>
                                    </div>

                                    {/* Location */}
                                    <div className="space-y-2 md:col-span-2">
                                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                            Location
                                        </label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                            <select
                                                id="location"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                required
                                            >
                                                <option value="" disabled>Select location</option>
                                                <option value="Colombo">Colombo</option>
                                                <option value="Gampaha">Gampaha</option>
                                                <option value="Kalutara">Kalutara</option>
                                                <option value="Kandy">Kandy</option>
                                                <option value="Matale">Matale</option>
                                                <option value="Nuwara Eliya">Nuwara Eliya</option>
                                                <option value="Galle">Galle</option>
                                                <option value="Matara">Matara</option>
                                                <option value="Hambantota">Hambantota</option>
                                                <option value="Jaffna">Jaffna</option>
                                                <option value="Kilinochchi">Kilinochchi</option>
                                                <option value="Mannar">Mannar</option>
                                                <option value="Vavuniya">Vavuniya</option>
                                                <option value="Mullaitivu">Mullaitivu</option>
                                                <option value="Batticaloa">Batticaloa</option>
                                                <option value="Ampara">Ampara</option>
                                                <option value="Trincomalee">Trincomalee</option>
                                                <option value="Kurunegala">Kurunegala</option>
                                                <option value="Puttalam">Puttalam</option>
                                                <option value="Anuradhapura">Anuradhapura</option>
                                                <option value="Polonnaruwa">Polonnaruwa</option>
                                                <option value="Badulla">Badulla</option>
                                                <option value="Monaragala">Monaragala</option>
                                                <option value="Ratnapura">Ratnapura</option>
                                                <option value="Kegalle">Kegalle</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="space-y-2">
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        rows="4"
                                        placeholder="Tell potential adopters about this pet's personality, habits, and needs..."
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                        required
                                    ></textarea>
                                </div>

                                {/* Contact Information Section */}
                                <div className="border-t pt-6">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-1">Contact Information</h2>
                                    <p className="text-gray-500 text-sm mb-6">Provide your contact details for potential adopters.</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Contact Name */}
                                        <div className="space-y-2 md:col-span-2">
                                            <label htmlFor="contact_name" className="block text-sm font-medium text-gray-700">
                                                Contact Name
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    id="contact_name"
                                                    name="contact_name"
                                                    value={formData.contact_name}
                                                    onChange={handleInputChange}
                                                    placeholder="e.g., Michael Brown"
                                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Contact Phone */}
                                        <div className="space-y-2">
                                            <label htmlFor="contact_phone" className="block text-sm font-medium text-gray-700">
                                                Phone Number
                                            </label>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                                <input
                                                    type="tel"
                                                    id="contact_phone"
                                                    name="contact_phone"
                                                    value={formData.contact_phone}
                                                    onChange={handleInputChange}
                                                    placeholder="e.g., (555) 456-7890"
                                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Contact Email */}
                                        <div className="space-y-2">
                                            <label htmlFor="contact_email" className="block text-sm font-medium text-gray-700">
                                                Email Address
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                                <input
                                                    type="email"
                                                    id="contact_email"
                                                    name="contact_email"
                                                    value={formData.contact_email}
                                                    onChange={handleInputChange}
                                                    placeholder="e.g., michael@example.com"
                                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Photo Upload Section - URL Only */}
                                <div className="space-y-6 border-t pt-6">
                                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-1">Pet Photo</h2>
                                    <p className="text-gray-500 text-sm mb-6">Enter a URL to an image of your pet to help them find a home.</p>

                                    {/* Main Photo URL Input */}
                                    <div className="space-y-2">
                                        <label htmlFor="main_photo" className="block text-sm font-medium text-gray-700">
                                            Pet Photo URL
                                        </label>
                                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                                            <Info className="h-4 w-4" />
                                            <span>Enter a direct link to your pet's image</span>
                                        </div>

                                        <input
                                            type="url"
                                            id="main_photo"
                                            name="main_photo"
                                            value={formData.main_photo}
                                            onChange={handleInputChange}
                                            placeholder="e.g., https://example.com/pet-image.jpg"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            required
                                        />

                                        {/* Photo Preview */}
                                        {photoPreview && (
                                            <div className="mt-4 relative inline-block">
                                                <img
                                                    src={photoPreview}
                                                    alt="Pet photo preview"
                                                    className="h-48 w-48 object-cover rounded-lg"
                                                    onError={() => {
                                                        setError("Invalid image URL. Please provide a direct link to an image.");
                                                        clearPhotoUrl();
                                                    }}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={clearPhotoUrl}
                                                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium flex items-center justify-center"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="h-5 w-5 animate-spin mr-2" />
                                                Processing...
                                            </>
                                        ) : (
                                            "List Pet for Adoption"
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ListPetForm;