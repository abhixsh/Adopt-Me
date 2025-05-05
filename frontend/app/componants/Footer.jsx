import { PawPrint, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full py-8 sm:py-12 bg-gray-100">
            <div className="container px-4 md:px-6 mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    {/* Logo and About */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <PawPrint className="h-6 w-6 text-purple-600" />
                            <span className="text-lg font-bold">Adopt Me</span>
                        </div>
                        <p className="text-sm text-gray-600 max-w-xs">
                            Connecting loving homes with pets in need. Our mission is to make pet adoption simple, humane, and accessible for everyone.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Quick Links</h3>
                        <ul className="space-y-2">
                            {["Home", "Browse Pets", "How It Works", "Success Stories", "About Us"].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-600 hover:text-purple-600 text-sm transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-600">123 Adoption Street, Pet City, PC 12345</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-purple-600 flex-shrink-0" />
                                <span className="text-sm text-gray-600">(123) 456-7890</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-purple-600 flex-shrink-0" />
                                <span className="text-sm text-gray-600">info@adoptme.com</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Stay Updated</h3>
                        <p className="text-sm text-gray-600">Subscribe to our newsletter for pet adoption tips and updates.</p>
                        <form className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-3 py-2 bg-white text-gray-800 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 border border-gray-300"
                                required
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>


                <div className="flex justify-center space-x-6 mb-8">
                    {[
                        { icon: Facebook, label: "Facebook" },
                        { icon: Twitter, label: "Twitter" },
                        { icon: Instagram, label: "Instagram" },
                    ].map((social) => (
                        <a
                            key={social.label}
                            href="#"
                            className="text-gray-500 hover:text-purple-600 transition-colors"
                            aria-label={social.label}
                        >
                            <social.icon className="h-5 w-5" />
                        </a>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 pt-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-sm text-gray-500">© 2025 Adopt Me. All rights reserved.</p>
                        <div className="flex space-x-4 mt-4 sm:mt-0">
                            <Link href="/privacy" className="text-xs text-gray-500 hover:text-purple-600">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-xs text-gray-500 hover:text-purple-600">
                                Terms of Service
                            </Link>
                            <Link href="/accessibility" className="text-xs text-gray-500 hover:text-purple-600">
                                Accessibility
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
