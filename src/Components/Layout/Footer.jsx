import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/logo.jpg";

export const Footer = () => {
    return (
        <footer className="bg-gray-300 z-20 text-black py-0.5 w-full bottom-0 left-0 overflow-hidden">
            <div className="container px-3 grid gap-4 place-items-center md:grid-cols-4 sm:grid-cols-2 grid-cols-1 text-center md:text-left max-w-screen-xl mx-auto">
                <div className="text-center">
                    <NavLink to="/">
                        <img src={logo} alt="Logo" className="w-10 sm:w-12 md:w-14 mx-auto mb-3" />
                    </NavLink>
                    <p className="text-sm sm:text-left">
                        Your trusted source for the latest news in politics, sports, and finance. Stay informed, stay ahead.
                    </p>
                </div>

                <div className="hidden md:block">
                    <h4 className="text-lg font-semibold mb-0.5">Quick Links</h4>
                    <ul className="space-y-.5">
                        <li><NavLink to="/" className="hover:text-white">Home</NavLink></li>
                        <li><NavLink to="/politics" className="hover:text-white">Politics</NavLink></li>
                        <li><NavLink to="/finances" className="hover:text-white">Finances</NavLink></li>
                        <li><NavLink to="/sports" className="hover:text-white">Sports</NavLink></li>
                    </ul>
                </div>

                <div className="hidden md:block">
                    <h4 className="text-lg font-semibold mb-3">Contact</h4>
                    <p>Email: Pujanyad987@gmail.com</p>
                    <p>Phone: +977 9887058247</p>
                    <p>Location: Siraha, Nepal</p>
                </div>

                <div className="text-center">
                    <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
                    <div className="flex justify-center space-x-4">
                        <a href="https://www.facebook.com/pujan.yadav.52438/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="hover:text-blue-500 text-xl" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="hover:text-blue-400 text-xl" />
                        </a>
                        <a href="https://www.instagram.com/spyker_987/?hl=en" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="hover:text-pink-500 text-xl" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="hover:text-blue-600 text-xl" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-2 text-center border-t border-gray-700 pt-2">
                <p className="text-sm">&copy; {new Date().getFullYear()} NewsWebsite. All Rights Reserved.</p>
            </div>
        </footer>
    );
};
