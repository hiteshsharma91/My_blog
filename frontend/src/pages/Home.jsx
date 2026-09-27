import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <main className="bg-gray-50">
        <section className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Welcome to <span className="text-blue-600">Inkly</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover interesting stories, share your ideas, and explore articles
            written by passionate writers.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/blogs"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Explore Blogs
            </a>

            <a
              href="/register"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
            >
              Start Writing
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
