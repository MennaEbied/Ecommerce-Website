import { useState } from "react";
import { useTheme } from "./ThemeContext";
import Navlinks from "./Navlinks";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const { theme, handleThemeSwitch } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="bg-white z-40 relative duration-200 dark:bg-gray-800 dark:text-white">
      <div className="py-2">
        <div className="container flex justify-between items-center mx-auto px-5">
          {/* Logo and links */}
          <div className="flex items-center gap-6">
            <p className="text-secondary font-semibold text-2xl uppercase sm:text-3xl tracking-wide">
              Eshop
            </p>
            <div className="hidden lg:block">
              <div className="flex items-center gap-3">
                <Navlinks />
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="flex justify-between items-center gap-2">
            {/* Desktop Search */}
            <div className="relative hidden sm:block group pr-2">
              <SearchSharpIcon className="font-bold text-xl text-gray-700 dark:text-gray-500 pl-1 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search"
                className="rounded-full ml-3.5 pl-6 w-0 group-hover:w-[300px] group-hover:border group-hover:border-gray-500 px-3 py-1 focus:outline-none dark:border-gray-800 group-hover:dark:bg-gray-800"
              />
            </div>
            
            {/* Desktop Cart Icon */}
            <div className="p-2 hidden sm:block">
              <ShoppingCartOutlinedIcon className="text-xl text-gray-700 font-bold dark:text-gray-500" />
            </div>
            
            {/* Theme Toggle */}
            <button
              onClick={handleThemeSwitch}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {theme === "dark" ? (
                <LightModeOutlinedIcon className="text-xl text-gray-700 dark:text-gray-400" />
              ) : (
                <DarkModeOutlinedIcon className="text-xl text-gray-700 dark:text-gray-400" />
              )}
            </button>
            
            {/* Mobile Search Button */}
            <button 
              onClick={toggleSearch}
              className="sm:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <SearchSharpIcon className="text-xl text-gray-700 dark:text-gray-500" />
            </button>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isOpen ? (
                  <CloseIcon className="text-xl text-gray-700 dark:text-gray-500" />
                ) : (
                  <MenuIcon className="text-xl text-gray-700 dark:text-gray-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Search Input */}
      {searchOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-40 p-3">
          <div className="container mx-auto px-4 flex items-center">
            <SearchSharpIcon className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="flex-grow bg-transparent border-b border-gray-500 dark:border-gray-600 focus:outline-none  py-1"
              autoFocus
            />
            <button 
              onClick={toggleSearch}
              className="ml-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      )}
      
      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 z-30 ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible"
        }`}
        style={{ top: searchOpen ? 'calc(100% + 56px)' : '100%' }}
      >
        <div className="container mx-auto px-5 py-4">
          <div className="flex flex-col items-center space-y-6 mb-4">
            <Navlinks mobile closeMenu={closeMenu} />
          </div>
          <div className="flex items-center justify-center py-2">
            <ShoppingCartOutlinedIcon className="text-xl text-gray-700 font-bold dark:text-gray-500 mr-2" />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {(isOpen || searchOpen) && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-20 transition-opacity duration-300"
          onClick={() => {
            closeMenu();
            setSearchOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Navbar;