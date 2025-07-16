import React from "react";

const Navbar = () => {
    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
            <div className="backdrop-blur-xl bg-white/30 dark:bg-gray-900/30 border border-white/40 dark:border-gray-700/40 rounded-3xl shadow-lg flex flex-wrap items-center justify-between px-8 py-3 mx-auto max-w-2xl">
                <div className="hidden md:block">
                    <ul className="font-medium flex flex-row space-x-8">
                        <li>
                            <a
                                href="#"
                                className="py-2 px-3 text-white bg-blue-700 rounded-xl md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500"
                                aria-current="page"
                            >
                                <i className="bi bi-house"></i> Home
                            </a>
                        </li>
                        
                        <li>
                            <a
                                href="#"
                                className="py-2 px-3 text-gray-900 rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                <i className="bi bi-people"></i> Community
                            </a>
                        </li>
                        
                        <li>
                            <a
                                href="#"
                                className="py-2 px-3 text-gray-900 rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                               <i className="bi bi-at"></i> Contact
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Mobile menu button */}
                <button
                    type="button"
                    className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-label="Open main menu"
                >
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
