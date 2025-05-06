"use client";

import { useState } from "react";
import { PawPrint, Upload, Info, MapPin, Mail, Phone, User } from "lucide-react";
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
        mainPhoto: null,
        additionalPhotos: [],
        // Contact information fields
        contactName: "",
        contactPhone: "",
        contactEmail: ""
    });

    const [mainPhotoPreview, setMainPhotoPreview] = useState(null);
    const [additionalPhotosPreviews, setAdditionalPhotosPreviews] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleMainPhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                mainPhoto: file
            });

            // Create preview URL
            const reader = new FileReader();
            reader.onload = () => {
                setMainPhotoPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAdditionalPhotosChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            setFormData({
                ...formData,
                additionalPhotos: [...formData.additionalPhotos, ...files].slice(0, 5)
            });

            // Create preview URLs
            const newPreviews = [];
            files.forEach(file => {
                const reader = new FileReader();
                reader.onload = () => {
                    newPreviews.push(reader.result);
                    if (newPreviews.length === files.length) {
                        setAdditionalPhotosPreviews([...additionalPhotosPreviews, ...newPreviews].slice(0, 5));
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const removeAdditionalPhoto = (index) => {
        setFormData({
            ...formData,
            additionalPhotos: formData.additionalPhotos.filter((_, i) => i !== index)
        });
        setAdditionalPhotosPreviews(additionalPhotosPreviews.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
        // You would typically send this data to your API
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

                    {/* Form Container */}
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                        <div className="p-6 sm:p-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-1">Pet Information</h2>
                            <p className="text-gray-500 text-sm mb-6">Fill out the form below with accurate information about the pet.</p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Two Column Layout for Basic Info */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Pet Name */}
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
                                            <option value="dog">Dog</option>
                                            <option value="cat">Cat</option>
                                            <option value="bird">Bird</option>
                                            <option value="rabbit">Rabbit</option>
                                            <option value="other">Other</option>
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
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
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
                                            <option value="small">Small</option>
                                            <option value="medium">Medium</option>
                                            <option value="large">Large</option>
                                        </select>
                                    </div>

                                    {/* Location */}
                                    <div className="space-y-2 md:col-span-2">
                                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                            Location
                                        </label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                            <input
                                                type="text"
                                                id="location"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleInputChange}
                                                placeholder="e.g., San Francisco, CA"
                                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                required
                                            />
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
                                            <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
                                                Contact Name
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    id="contactName"
                                                    name="contactName"
                                                    value={formData.contactName}
                                                    onChange={handleInputChange}
                                                    placeholder="e.g., Michael Brown"
                                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Contact Phone */}
                                        <div className="space-y-2">
                                            <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700">
                                                Phone Number
                                            </label>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                                <input
                                                    type="tel"
                                                    id="contactPhone"
                                                    name="contactPhone"
                                                    value={formData.contactPhone}
                                                    onChange={handleInputChange}
                                                    placeholder="e.g., (555) 456-7890"
                                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Contact Email */}
                                        <div className="space-y-2">
                                            <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
                                                Email Address
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                                <input
                                                    type="email"
                                                    id="contactEmail"
                                                    name="contactEmail"
                                                    value={formData.contactEmail}
                                                    onChange={handleInputChange}
                                                    placeholder="e.g., michael@example.com"
                                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Photo Upload Section */}
                                <div className="space-y-6 border-t pt-6">
                                    <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-1">Pet Photos</h2>
                                    <p className="text-gray-500 text-sm mb-6">Upload clear photos of your pet to help them find a home.</p>

                                    {/* Main Photo Upload */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Upload main photo
                                        </label>
                                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                                            <Info className="h-4 w-4" />
                                            <span>PNG, JPG up to 5MB</span>
                                        </div>

                                        <div className="mt-2">
                                            {mainPhotoPreview ? (
                                                <div className="relative">
                                                    <img
                                                        src={mainPhotoPreview}
                                                        alt="Main photo preview"
                                                        className="h-40 w-40 object-cover rounded-lg"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setMainPhotoPreview(null);
                                                            setFormData({ ...formData, mainPhoto: null });
                                                        }}
                                                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                                                    <div className="space-y-1 text-center">
                                                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                                        <div className="flex text-sm text-gray-600">
                                                            <label htmlFor="main-photo" className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500">
                                                                <span>Select File</span>
                                                                <input
                                                                    id="main-photo"
                                                                    name="main-photo"
                                                                    type="file"
                                                                    accept="image/*"
                                                                    className="sr-only"
                                                                    onChange={handleMainPhotoChange}
                                                                    required
                                                                />
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Additional Photos Upload */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">
                                            Upload additional photos
                                        </label>
                                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                                            <Info className="h-4 w-4" />
                                            <span>Up to 5 photos</span>
                                        </div>

                                        {/* Preview of additional photos */}
                                        {additionalPhotosPreviews.length > 0 && (
                                            <div className="flex flex-wrap gap-4 mt-2">
                                                {additionalPhotosPreviews.map((preview, index) => (
                                                    <div key={index} className="relative">
                                                        <img
                                                            src={preview}
                                                            alt={`Additional photo ${index + 1}`}
                                                            className="h-24 w-24 object-cover rounded-lg"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => removeAdditionalPhoto(index)}
                                                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                ))}

                                                {additionalPhotosPreviews.length < 5 && (
                                                    <label htmlFor="additional-photos" className="h-24 w-24 flex items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
                                                        <Upload className="h-8 w-8 text-gray-400" />
                                                        <input
                                                            id="additional-photos"
                                                            name="additional-photos"
                                                            type="file"
                                                            accept="image/*"
                                                            multiple
                                                            className="sr-only"
                                                            onChange={handleAdditionalPhotosChange}
                                                        />
                                                    </label>
                                                )}
                                            </div>
                                        )}

                                        {additionalPhotosPreviews.length === 0 && (
                                            <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                                                <div className="space-y-1 text-center">
                                                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                                    <div className="flex text-sm text-gray-600">
                                                        <label htmlFor="additional-photos" className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500">
                                                            <span>Select Files</span>
                                                            <input
                                                                id="additional-photos"
                                                                name="additional-photos"
                                                                type="file"
                                                                accept="image/*"
                                                                multiple
                                                                className="sr-only"
                                                                onChange={handleAdditionalPhotosChange}
                                                            />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium"
                                    >
                                        List Pet for Adoption
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
