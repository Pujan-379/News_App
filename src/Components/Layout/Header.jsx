import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleInputSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
            setSearchTerm(""); // Clear the input field after navigation
            setMenuOpen(false); // Close the menu after the search
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuItemClick = () => {
        setMenuOpen(false); // Close the menu after clicking an item
    };

    return (
        <section className="container z-50 flex h-20 items-center px-6 md:px-20 mx-auto bg-white shadow-lg rounded-lg sticky top-0">
            <nav className="flex items-center justify-between w-full">
                <NavLink to="/">
                    <img className="w-16 h-8 object-cover" src={logo} alt="Company Logo" />
                </NavLink>

                {/* Navbar items on medium and larger screens */}
                <div className="hidden md:flex gap-6">
                    <NavLink
                        to="/sports"
                        className={({ isActive }) =>
                            `px-4 py-2 font-medium ${isActive ? "text-red-500" : "text-blue-500"}`
                        }
                    >
                        Sports
                    </NavLink>
                    <NavLink
                        to="/finances"
                        className={({ isActive }) =>
                            `px-4 py-2 font-medium ${isActive ? "text-red-500" : "text-blue-500"}`
                        }
                    >
                        Finances
                    </NavLink>
                    <NavLink
                        to="/politics"
                        className={({ isActive }) =>
                            `px-4 py-2 font-medium ${isActive ? "text-red-500" : "text-blue-500"}`
                        }
                    >
                        Politics
                    </NavLink>
                </div>

                {/* Search bar on the navbar (for medium devices and up) */}
                <div className="relative hidden md:block">
                    <form onSubmit={handleInputSearch}>
                        <input
                            value={searchTerm}
                            onChange={handleInputChange}
                            className="border-2 rounded-2xl border-gray-300 text-center w-72 h-8 pr-10"
                            type="text"
                            placeholder="Search here"
                        />
                        <button type="submit">
                            <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </button>
                    </form>
                </div>

                {/* Hamburger Menu for small screens */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        <GiHamburgerMenu className="text-gray-600 text-2xl" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu with Glassmorphism and transition */}
            {menuOpen && (
                <div className="md:hidden fixed inset-0 bg-opacity-30 z-50">
                    <div
                        className={`fixed left-0 top-0 h-full w-3/4 bg-opacity-20 backdrop-blur-xl rounded-r-lg shadow-lg transition-all duration-300 ease-in-out ${
                            menuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                    >
                        <div className="flex justify-end p-4">
                            <button onClick={toggleMenu}>
                                <IoClose className="text-gray-600 text-2xl" />
                            </button>
                        </div>
                        <div className="flex flex-col items-center space-y-4 mt-4">
                            {/* Search bar inside mobile menu */}
                            <form onSubmit={handleInputSearch} className="mb-4 w-full px-4 relative">
                                <input
                                    value={searchTerm}
                                    onChange={handleInputChange}
                                    className="border-2 rounded-2xl border-gray-300 text-center w-full h-8 pr-10"
                                    type="text"
                                    placeholder="Search here"
                                />
                                <button type="submit">
                                    <IoSearchOutline className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-500" />
                                </button>
                            </form>

                            {/* Menu items inside mobile menu */}
                            <NavLink
                                to="/sports"
                                onClick={handleMenuItemClick}
                                className={({ isActive }) =>
                                    `px-4 py-2 font-medium ${
                                        isActive ? "text-red-500" : "text-blue-500"
                                    }`
                                }
                            >
                                Sports
                            </NavLink>
                            <NavLink
                                to="/finances"
                                onClick={handleMenuItemClick}
                                className={({ isActive }) =>
                                    `px-4 py-2 font-medium ${
                                        isActive ? "text-red-500" : "text-blue-500"
                                    }`
                                }
                            >
                                Finances
                            </NavLink>
                            <NavLink
                                to="/politics"
                                onClick={handleMenuItemClick}
                                className={({ isActive }) =>
                                    `px-4 py-2 font-medium ${
                                        isActive ? "text-red-500" : "text-blue-500"
                                    }`
                                }
                            >
                                Politics
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
