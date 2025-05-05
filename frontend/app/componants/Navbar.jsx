"use client"

import Link from "next/link"
import { useState } from "react"
import { PawPrint, Menu, X } from "lucide-react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <header className="w-full border-b border-purple-100 bg-white sticky top-0 z-50 shadow-sm">
            <div className="container flex h-14 sm:h-16 md:h-20 items-center justify-between px-4 md:px-6 mx-auto">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-purple-100 rounded-full p-1.5 sm:p-2 group-hover:bg-purple-200 transition-colors">
                        <PawPrint className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-purple-600" />
                    </div>
                    <span className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent">
                        Adopt Me
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="ml-auto hidden gap-4 sm:gap-6 md:gap-8 md:flex items-center">
                    <Link href="/browse" className="text-xs sm:text-sm font-bold text-gray-700 hover:text-purple-600 transition-colors">
                        Browse Pets
                    </Link>
                    <Link href="/add-pet" className="text-xs sm:text-sm font-bold text-gray-700 hover:text-purple-600 transition-colors">
                        List a Pet
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="ml-auto md:hidden bg-gray-100 hover:bg-gray-200 p-1.5 sm:p-2 rounded-full transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
                    ) : (
                        <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
                    )}
                </button>
            </div>

            <div 
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen 
                        ? "max-h-screen opacity-100" 
                        : "max-h-0 opacity-0"
                }`}
            >
                <nav className="flex flex-col p-4 sm:p-6 border-t border-purple-50">
                    <Link
                        href="/browse"
                        className="flex items-center justify-between py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base font-medium text-gray-800 hover:bg-purple-50 rounded-lg transition-colors"
                        onClick={toggleMenu}
                    >
                        <div className="flex items-center gap-3">
                            Browse Pets
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                    <Link
                        href="/add-pet"
                        className="flex items-center justify-between py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base font-medium text-gray-800 hover:bg-purple-50 rounded-lg transition-colors mt-1"
                        onClick={toggleMenu}
                    >
                        <div className="flex items-center gap-3">
                            List a Pet
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </nav>
            </div>
        </header>
    )
}