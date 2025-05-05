import { PawPrint } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center space-x-2">
            <PawPrint className="h-6 w-6 text-purple-600" />
            <span className="text-lg font-bold">Adopt Me</span>
          </div>
          <p className="text-gray-500">© 2025 Adopt Me. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
