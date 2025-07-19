import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">About</h3>
                    <p className="text-gray-400">
                        This is a personal portfolio project built with React and Tailwind CSS.
                        Feel free to reach out and connect!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#home" className="hover:text-pink-400">Home</a></li>
                        <li><a href="#services" className="hover:text-pink-400">Services</a></li>
                        <li><a href="#products" className="hover:text-pink-400">Products</a></li>
                        <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                    <div className="flex space-x-4 text-2xl text-gray-400">
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaLinkedin />
                        </a>
                        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaInstagram />
                        </a>
                        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Hevva Heseneliyeva. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
