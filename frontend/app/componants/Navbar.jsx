"use client"

import Link from "next/link"
import { useState } from "react"
import { PawPrint, Menu, X, Search, Heart, User } from "lucide-react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <header className="w-full border-b border-purple-100 bg-white sticky top-0 z-50 shadow-sm">
            <div className="container flex h-16 sm:h-20 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-purple-100 rounded-full p-2 group-hover:bg-purple-200 transition-colors">
                        <PawPrint className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                    </div>
                    <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent">
                        Adopt Me
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="ml-auto hidden gap-8 md:flex items-center">
                    <Link href="/browse" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors flex items-center gap-1">
                        Browse Pets
                    </Link>
                    <Link href="/add-pet" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors flex items-center gap-1">
                        List a Pet
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="ml-auto md:hidden bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="h-5 w-5 text-gray-700" />
                    ) : (
                        <Menu className="h-5 w-5 text-gray-700" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 top-16 sm:top-20 bg-white z-40 md:hidden">
                    <nav className="flex flex-col gap-4 p-6">
                        <Link
                            href="/browse"
                            className="flex items-center justify-between py-3 px-4 text-base font-medium text-gray-800 hover:bg-purple-50 rounded-lg transition-colors"
                            onClick={toggleMenu}
                        >
                            <div className="flex items-center gap-3">

                                Browse Pets
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                        <Link
                            href="/add-pet"
                            className="flex items-center justify-between py-3 px-4 text-base font-medium text-gray-800 hover:bg-purple-50 rounded-lg transition-colors"
                            onClick={toggleMenu}
                        >
                            <div className="flex items-center gap-3">
                                List a Pet
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>

                    </nav>
                </div>
            )}
        </header>
    )
}