import React, { useState } from "react";
import LogoIMG from "../../assets/images/SHOP.CO.png";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import CartIcon from "../../assets/svg/cart.svg";
import ProfileIcon from "../../assets/svg/profile.svg";
import { IMG_ALT } from "../../constants";
import Search from "../search/Search";
import { navLinks } from "../utils/mockData";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white container">
      <div className="py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={LogoIMG} alt={IMG_ALT.LOGO} />
        </div>

        {/* Navigation Links and Search - Desktop */}
        <div className="hidden lg:flex items-center space-x-6 flex-grow mx-8">
          <nav className="flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <div
                key={link.id}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <div className="text-gray-700 hover:text-blue-600 cursor-pointer flex items-center">
                    {link.label}
                    <FaChevronDown className="ml-1" />
                    <div
                      className={`absolute top-full left-0 min-w-[150px] ${
                        activeDropdown === index ? "block" : "hidden"
                      }`}
                    >
                      <div className="h-2 w-full" />
                      <div className="bg-white border rounded shadow-lg py-2">
                        {link.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            to={`/${item.toLowerCase()}`}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="text-gray-700 hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="flex-grow">
            <Search />
          </div>
        </div>

        {/* Right section with Icons */}
        <div className="flex items-center space-x-4">
          <img
            src={CartIcon}
            alt={IMG_ALT.CART}
            className="cursor-pointer h-6 w-6"
          />
          <img
            src={ProfileIcon}
            alt={IMG_ALT.PROFILE}
            className="cursor-pointer h-6 w-6"
          />
          <button
            className="lg:hidden text-gray-700 hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-white transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="container mx-auto px-4 py-6">
          <button
            className="absolute top-4 right-4 text-gray-700 hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>
          <nav className="mt-8">
            {navLinks.map((link, index) => (
              <div key={index} className="py-2">
                {link.dropdown ? (
                  <div className="relative">
                    <button
                      className="w-full text-left text-gray-700 hover:text-blue-600 flex items-center justify-between"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === index ? null : index
                        )
                      }
                    >
                      {link.label}
                      <FaChevronDown
                        className={`ml-1 transform ${
                          activeDropdown === index ? "rotate-180" : ""
                        } transition-transform duration-200`}
                      />
                    </button>
                    <div
                      className={`mt-2 space-y-2 ${
                        activeDropdown === index ? "block" : "hidden"
                      }`}
                    >
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          to={`/${item.toLowerCase()}`}
                          className="block pl-4 text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="block text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-6">
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
