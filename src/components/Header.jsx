import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-xl font-bold">
              GuardJet
            </a>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#signin" className="hover:text-gray-300">Sign in</a>
            <a href="#products" className="hover:text-gray-300">Products</a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>

          {/* Cart Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <a href="/cart" className="hover:bg-slate-700 text-white px-6 py-4 rounded-md">
              <ShoppingCart strokeWidth={3}/>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#signin" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base">
              Sign in
            </a>
            <a href="#products" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base">
              Products
            </a>
            <a href="#about" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base">
              About
            </a>
            <a href="#contact" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base">
              Contact
            </a>
            <a
              href="/cart"
              className="block bg-blue-800 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base mt-2"
            >
              Cart (0)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;