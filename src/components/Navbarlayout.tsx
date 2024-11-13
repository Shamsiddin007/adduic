"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import Logo from "/public/icons/logo.svg";
import BurgerIcon from "/public/Imgs/hamburger_icon.svg";
import CloseBtn from "/public/Imgs/close-428 1.png";
import JoinUsModal from "@/components/JoinUs";

const Navbarlayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleActiveLang = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    const handleScrolled = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? styles.activeScrolled : ''}`}>
    <nav className='container mx-auto max-w-screen-xl flex justify-between items-center pt-10 relative top-0 left-0'>
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2" 
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <Image src={BurgerIcon} alt="Menu" width={24} height={24} />
        </button>

        {/* Logo */}
        <Link href="/" className="py-2">
          <Image 
            width={160} 
            height={16} 
            src={Logo} 
            alt="Logo UIC Games"
            className="h-auto" 
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <Link 
              href="/about" 
              className="text-sm font-medium text-white hover:text-blue-400 transition-colors py-2"
            >
              About us
            </Link>
          </li>
          <li>
            <Link 
              href="/portfolio" 
              className="text-sm font-medium text-white hover:text-blue-400 transition-colors py-2"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link 
              href="/praktikum" 
              className="text-sm font-medium text-white hover:text-blue-400 transition-colors py-2"
            >
              Praktikum
            </Link>
          </li>
          <li>
            <Link 
              href="/service-us" 
              className="text-sm font-medium text-white hover:text-blue-400 transition-colors py-2"
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              href="/blog" 
              className="text-sm font-medium text-white hover:text-blue-400 transition-colors py-2"
            >
              Blogs
            </Link>
          </li>
        </ul>

        {/* Right Side Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-4">
            <button className="py-2 px-6 bg-blue-600 hover:bg-blue-700 rounded-full text-sm text-white transition-colors">
              Contact us
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="py-2 px-6 bg-gray-700 hover:bg-gray-600 rounded-full text-sm text-white transition-colors"
            >
              Join us
            </button>
          </div>
          
          {/* Language Selector */}
          <div className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer py-2"
              onClick={handleActiveLang}
            >
              <p className="text-sm font-medium text-white uppercase">eng</p>
              <div className={`transition-transform ${isActive ? "rotate-180" : "rotate-0"}`}>
                <Image
                  src="/icons/arrow.png"
                  alt="Language Toggle"
                  width={12}
                  height={6}
                />
              </div>
            </div>

            {/* Language Dropdown */}
            {isActive && (
              <div className="absolute right-0 top-full mt-2 w-20 bg-gray-800 rounded-lg overflow-hidden">
                <button className="w-full text-sm font-medium text-white uppercase hover:bg-gray-700 py-2 px-4 text-left">
                  uz
                </button>
                <button className="w-full text-sm font-medium text-white uppercase hover:bg-gray-700 py-2 px-4 text-left">
                  ru
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-95 z-50">
            <div className="flex flex-col items-center pt-20 gap-8">
              <button
                className="absolute top-6 left-6"
                onClick={() => setMenuOpen(false)}
              >
                <Image src={CloseBtn} alt="Close" width={24} height={24} />
              </button>

              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="text-white text-lg hover:text-blue-400 transition-colors"
              >
                About us
              </Link>
              <Link
                href="/portfolio"
                onClick={() => setMenuOpen(false)}
                className="text-white text-lg hover:text-blue-400 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/praktikum"
                onClick={() => setMenuOpen(false)}
                className="text-white text-lg hover:text-blue-400 transition-colors"
              >
                Praktikum
              </Link>
              <Link
                href="/service-us"
                onClick={() => setMenuOpen(false)}
                className="text-white text-lg hover:text-blue-400 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/blog"
                onClick={() => setMenuOpen(false)}
                className="text-white text-lg hover:text-blue-400 transition-colors"
              >
                Blogs
              </Link>

              <div className="flex flex-col gap-4 mt-8">
                <button className="py-2 px-8 bg-blue-600 hover:bg-blue-700 rounded-full text-sm text-white transition-colors">
                  Contact us
                </button>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setMenuOpen(false);
                  }}
                  className="py-2 px-8 bg-gray-700 hover:bg-gray-600 rounded-full text-sm text-white transition-colors"
                >
                  Join us
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Join Us Modal */}
      {isModalOpen && <JoinUsModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Navbarlayout;