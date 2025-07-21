"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
            <div className="backdrop-blur-xl bg-white/30 dark:bg-gray-900/30 border border-white/40 dark:border-gray-700/40 rounded-3xl shadow-lg">
                <div className="flex flex-wrap items-center justify-between px-6 py-3 mx-auto">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                            Dev Community KKU
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <ul className="font-medium flex flex-row space-x-8">
                            <li>
                                <Link
                                    href="/"
                                    className="py-2 px-3 text-white bg-blue-700 rounded-xl md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500 transition-colors"
                                    aria-current="page"
                                >
                                    <i className="bi bi-house"></i> Home
                                </Link>
                            </li>
                            
                            <li>
                                <Link
                                    href="/community"
                                    className="py-2 px-3 text-gray-900 rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-colors"
                                >
                                    <i className="bi bi-people"></i> Community
                                </Link>
                            </li>
                            
                            <li>
                                <a
                                    href="https://github.com/jrKitt/comscikku"
                                    className="py-2 px-3 text-gray-900 rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-colors"
                                >
                                   <i className="bi bi-code"></i> GitHub
                                </a>
                            </li>
                        </ul>
                    </div>

                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-colors"
                        aria-label="Open main menu"
                        aria-expanded={isMenuOpen}
                    >
                        <svg
                            className={`w-5 h-5 transition-transform ${isMenuOpen ? 'rotate-45' : ''}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            {isMenuOpen ? (
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 6l6 6M6 12l6-6"
                                />
                            ) : (
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <div className="px-6 pb-4 border-t border-white/20 dark:border-gray-700/20">
                        <ul className="font-medium flex flex-col space-y-2 mt-4">
                            <li>
                                <Link
                                    href="/"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center py-3 px-4 text-gray-900 rounded-xl hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors"
                                >
                                    <i className="bi bi-house mr-3"></i> Home
                                </Link>
                            </li>
                            
                            <li>
                                <Link
                                    href="/community"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center py-3 px-4 text-gray-900 rounded-xl hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors"
                                >
                                    <i className="bi bi-people mr-3"></i> Community
                                </Link>
                            </li>
                            
                            <li>
                                <a
                                    href="https://github.com/jrKitt/comscikku"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center py-3 px-4 text-gray-900 rounded-xl hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-colors"
                                >
                                   <i className="bi bi-code mr-3"></i> GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
