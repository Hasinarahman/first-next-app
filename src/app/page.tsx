"use client";
import { useState } from 'react';
import Link from "next/link";
import './style.css';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="min-h-screen bg-cover" style={{ backgroundImage: "url('/images/Free-Realistic-Space-Background.webp')" }}>
      <div>
        <header className="min-w-screen min-h-8 shadow-white">
          <nav className="bg-none flex items-center justify-between py-4">
            {/* Hamburger button for mobile view */}
            <button
              className="block lg:hidden text-white font-bold mx-4 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>

            {/* Links for larger screens */}
            <div className="hidden lg:flex">
              <Link href="/aboute" className="text-white font-bold text-xl mx-4 hover:underline drop-shadow-lg" style={{ textShadow: "2px 2px 4px black" }}>
                More Info
              </Link>
              <Link href="/contact" className="text-white font-bold text-xl mx-4 hover:underline drop-shadow-lg" style={{ textShadow: "2px 2px 4px black" }}>
                Contact
              </Link>
            </div>

            {/* Title aligned to the right */}
            <h3 className="text-white font-bold text-lg ml-auto mr-10" style={{ textShadow: "2px 2px 4px black" }}>
              Better Sleep & Reduce Stress 💡
            </h3>

            {/* Mobile menu */}
            {isOpen && (
              <div className="lg:hidden absolute top-16 left-0 w-full shadow-lg z-50">
                <div className="flex flex-col items-center py-4">
                  <Link href="/aboute" className="block text-white text-xl py-2 px-4 hover:underline text-center">
                    Aboute
                  </Link>
                  <Link href="/contact" className="block text-white text-xl py-2 px-4 hover:underline text-center">
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </nav>
        </header>
      </div>

      <div className="flex flex-col items-center min-h-screen">
        <h1 className="text-4xl font-bold text-purple-300 mt-40 ml-5 mr-4">
          Welcome to Your Guide for Better Sleep and reduce Stress!
        </h1>
        <p className="mt-4 text-lg text-white text-center m-11 mt-11">
          Struggling with poor sleep or feeling overwhelmed by stress? You’re not alone. Our website provides simple,
          actionable tips to help you improve your sleep quality and manage stress effectively. Learn how stress
          impacts your sleep, discover relaxation techniques, and create healthy habits to wake up refreshed and
          energized. From mindful meditation to optimizing your sleep environment, we cover everything you need to
          find balance and achieve restful nights.
          Explore expert advice, real-life solutions, and tools to help you sleep better and live stress-free.
        </p>

        <footer className="flex flex-row items-center justify-center py-4 mt-20">
          <a href="mailto:hasinarahmani548@gmail.com" className="text-white hover:underline">
            <img src="/images/image 21.png" className="w-10 h-10" alt="Email Icon" />
          </a>
          <a href="https://github.com/" className="text-white hover:underline">
            <img src='/images/Frame.png' className="w-10 h-10" alt="GitHub Icon" />
          </a>
          <a href="https://www.linkedin.com/in/hasina-rahmani-4a21a9311/" className="hover:underline">
            <img src='/images/image 20.png' className="w-10 h-10" alt="LinkedIn Icon" />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Home;
