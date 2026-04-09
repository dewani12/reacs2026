import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import ReACE_logo from "./../assets/ReACS logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmissionDdOpen, setIsSubmissionDdOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "Committee", path: "/committee" },
  ];

  const dropdownItems = [
    { name: "About", path: "/about" },
  ];

  const submissionDropdownItems = [];

  useEffect(() => {
    setIsOpen(false);
    setIsMobileMoreOpen(false);
  }, [pathname]);

  return (
    <nav className="inter bg-[#043A75] shadow-sm px-4 md:px-12 py-4">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to={"/"}>
              <img 
                src={ReACE_logo} 
                alt="IEEE Logo" 
                className="w-[100px] h-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-5">
            {mainNavItems.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path} 
                className={({isActive}) => 
                  `${isActive ? "text-blue-800 bg-blue-200" : "bg-gray-100 text-black"}  
                  hover:bg-blue-200 hover:text-blue-800 px-4 py-2 rounded-full text-sm font-medium`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Submission Dropdown Menu */}
            {/* <div 
              className="relative"
              onMouseEnter={() => setIsSubmissionDdOpen(true)}
              onMouseLeave={() => setIsSubmissionDdOpen(false)}
            >
              <button 
                className="bg-gray-100 text-black hover:bg-blue-200 hover:text-blue-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1"
              >
                Submission <ChevronDown className="h-4 w-4" />
              </button>

              <div 
                className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                  isSubmissionDdOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="py-1">
                  {submissionDropdownItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div> */}

            {/* More Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                className="bg-gray-100 text-black hover:bg-blue-200 hover:text-blue-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1"
              >
                More <ChevronDown className="h-4 w-4" />
              </button>

              <div 
                className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                  isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="py-1">
                  {dropdownItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-64 bg-black text-white transition-transform duration-300 md:hidden`}
      >
        <div className="flex justify-end mt-7 mr-4">
          <button onClick={toggleMenu}>
            <X className="h-8 w-8" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {mainNavItems.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {item.name}
            </NavLink>
          ))}

          {/* Mobile More Dropdown */}
          <div>
            <button
              onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
              className="flex justify-between w-full"
            >
              More
              <ChevronRight className={`transition ${isMobileMoreOpen ? 'rotate-90' : ''}`} />
            </button>

            {isMobileMoreOpen && (
              <div className="pl-4 mt-2">
                {dropdownItems.map((item) => (
                  <NavLink key={item.path} to={item.path}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;