"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-4 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-4">
            <div className="rounded-2xl border border-[color:var(--border-soft)] bg-white/95 shadow-sm backdrop-blur">
                <div className="flex flex-wrap items-center justify-between px-6 py-3 mx-auto">
                    <div className="flex items-center">
                        <span className="text-xl font-semibold text-[color:var(--foreground)]">
                            CP DEV Community
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <ul className="font-medium flex flex-row space-x-4">
                            <li>
                                <Link
                                    href="/"
                                    className="py-2 px-4 text-white bg-[color:var(--brand)] hover:bg-[color:var(--brand-deep)] rounded-xl transition-colors"
                                    aria-current="page"
                                >
                                    <i className="bi bi-house"></i> Home
                                </Link>
                            </li>
                            
                            <li>
                                <Link
                                    href="/community"
                                    className="py-2 px-4 text-[color:var(--foreground)] rounded-xl hover:bg-[color:var(--surface-soft)] transition-colors"
                                >
                                    <i className="bi bi-people"></i> Community
                                </Link>
                            </li>
                            
                            <li>
                                <a
                                    href="https://github.com/jrKitt/comscikku"
                                    className="py-2 px-4 text-[color:var(--foreground)] rounded-xl hover:bg-[color:var(--surface-soft)] transition-colors"
                                >
                                   <i className="bi bi-code"></i> GitHub
                                </a>
                            </li>
                        </ul>
                    </div>

                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[color:var(--foreground)] rounded-xl hover:bg-[color:var(--surface-soft)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)] transition-colors"
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
                    <div className="px-6 pb-4 border-t border-[color:var(--border-soft)]">
                        <ul className="font-medium flex flex-col space-y-2 mt-4">
                            <li>
                                <Link
                                    href="/"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center py-3 px-4 text-white bg-[color:var(--brand)] rounded-xl hover:bg-[color:var(--brand-deep)] transition-colors"
                                >
                                    <i className="bi bi-house mr-3"></i> Home
                                </Link>
                            </li>
                            
                            <li>
                                <Link
                                    href="/community"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center py-3 px-4 text-[color:var(--foreground)] rounded-xl hover:bg-[color:var(--surface-soft)] transition-colors"
                                >
                                    <i className="bi bi-people mr-3"></i> Community
                                </Link>
                            </li>
                            
                            <li>
                                <a
                                    href="https://github.com/jrKitt/comscikku"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center py-3 px-4 text-[color:var(--foreground)] rounded-xl hover:bg-[color:var(--surface-soft)] transition-colors"
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
