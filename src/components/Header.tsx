import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, closeMenu } from "../redux/uiSlice";
import type { RootState } from "../redux/store";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

type HeaderProps = {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.ui.isMenuOpen);

    return (
        <header className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 left-0 z-20 transition-colors duration-300">
            <div className="max-w-[1500px] mx-auto flex justify-between items-center py-3 px-4">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-pink-600 dark:text-pink-400"
                    onClick={() => {
                        dispatch(closeMenu());
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                >
                    BeautyZone
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200 font-semibold items-center">
                    <Link to="/" onClick={() => dispatch(closeMenu())} className="text-pink-500">Home</Link>
                    <Link to="/about" onClick={() => dispatch(closeMenu())} className="hover:text-pink-500">About</Link>
                    <Link to="/products" onClick={() => dispatch(closeMenu())} className="hover:text-pink-500">Products</Link>
                    <HashLink
                        smooth
                        to="/#contact"
                        onClick={() => dispatch(closeMenu())}
                        className="hover:text-pink-500"
                    >
                        Contact
                    </HashLink>

                    <Link
                        to="/login"
                        onClick={() => dispatch(closeMenu())}
                        className="flex items-center text-pink-600 hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-500"
                    >
                        <AccountCircleIcon />
                    </Link>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="text-xl"
                    >
                        {darkMode ? <FiSun /> : <FiMoon />}
                    </button>
                </nav>

                {/* Mobile menu icon */}
                <button
                    className="md:hidden text-3xl text-gray-700 dark:text-gray-300"
                    onClick={() => dispatch(toggleMenu())}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 shadow-md px-4 py-4 space-y-4 text-gray-700 dark:text-gray-200 font-semibold transition-colors duration-300">
                    <Link to="/" onClick={() => dispatch(closeMenu())} className="text-pink-500 block">Home</Link>
                    <Link to="/about" onClick={() => dispatch(closeMenu())} className="hover:text-pink-500 block">About</Link>
                    <Link to="/products" onClick={() => dispatch(closeMenu())} className="hover:text-pink-500 block">Products</Link>
                    <HashLink
                        smooth
                        to="/#contact"
                        onClick={() => dispatch(closeMenu())}
                        className="hover:text-pink-500 block"
                    >
                        Contact
                    </HashLink>
                    <Link
                        to="/login"
                        onClick={() => dispatch(closeMenu())}
                        className="flex items-center gap-1 text-pink-600 hover:text-pink-800 dark:text-pink-400 dark:hover:text-pink-500"
                    >
                        <AccountCircleIcon />
                    </Link>

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="text-xl"

                    >
                        {darkMode ? <FiSun /> : <FiMoon />}
                    </button>
                </div>
            )}

        </header>
    );
};

export default Header;
