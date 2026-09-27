import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* About */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Inkly
                        </h2>

                        <p className="text-gray-400 leading-7">
                            A simple blog platform to read, write and
                            share interesting stories.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-3">
                            <Link
                                to="/"
                                className="hover:text-white transition"
                            >
                                Home
                            </Link>

                            <Link
                                to="/blogs"
                                className="hover:text-white transition"
                            >
                                Blogs
                            </Link>

                            <Link
                                to="/categories"
                                className="hover:text-white transition"
                            >
                                Categories
                            </Link>

                            <Link
                                to="/about"
                                className="hover:text-white transition"
                            >
                                About
                            </Link>
                        </div>
                    </div>

                    {/* Account */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Account
                        </h3>

                        <div className="flex flex-col gap-3">
                            <Link
                                to="/login"
                                className="hover:text-white transition"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="hover:text-white transition"
                            >
                                Register
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Contact
                        </h3>

                        <div className="space-y-3 text-gray-400">
                            <p>
                                Email: contact@inkly.com
                            </p>

                            <p>
                                Phone: +91 8766329755
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-6 py-5 text-center">
                    <p className="text-sm text-gray-400">
                        © 2026 Inkly. All rights reserved.
                    </p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;