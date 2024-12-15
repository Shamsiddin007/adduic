"use client";

import Image from "next/image";
import { Link, usePathname as usePath } from "@/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./style.module.css";
import Logo from "/public/icons/Logo.svg";
import BurgerIcon from "/public/Imgs/hamburger_icon.svg";
import CloseBtn from "/public/Imgs/close-428 1.png";
import JoinUsModal from "@/components/JoinUs";
import { useLocale, useTranslations } from "next-intl";

const Navbarlayout = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const usePa = usePath();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState<string>("");
  const [isActive, setActive] = useState(false);

  const handleActiveLang = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    const savedPath = localStorage.getItem("activePath");
    if (!savedPath || savedPath !== pathname) {
      setActivePath(pathname);
      localStorage.setItem("activePath", pathname);
    } else {
      setActivePath(savedPath);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScrolled = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const t = useTranslations("Navbartitle");

  const navItems = [
    { path: `/about`, label: t("about_us_title") },
    { path: `/portfolio`, label: t("portfolio_title") },
    { path: `/praktikum`, label: t("praktikum_title") },
    { path: `/service-us`, label: t("service_title") },
    { path: `/blog`, label: t("blog_title") },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? styles.activeScrolled : ""
      }`}
    >
      <nav className="container mx-auto max-w-screen-xl flex justify-between items-center pt-10 relative">
        <button
          aria-label="Menu"
          className="lg:hidden p-2"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <Image src={BurgerIcon} alt="Menu" width={24} height={24} />
        </button>

        <Link href="/" className="py-2">
          <Image
            width={160}
            height={16}
            src={Logo}
            alt="Logo UIC Games"
            className="h-auto"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`text-sm font-medium py-2 transition-colors ${
                  activePath === item.path
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-white hover:text-blue-400"
                }`}
                aria-label={item.label}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-4">
            <Link href={"https://t.me/UICGames_bot"} target="_blank">
              <button
                aria-label="Join us"
                className="py-2 px-6 bg-gray-700 hover:bg-gray-600 rounded-full text-sm text-white transition-colors"
              >
                {t("nav_btn.join_us_btn")}
              </button>
            </Link>
            <Link href={"https://t.me/uicgames"} target="_blank">
              <button
                aria-label="kk"
                className="py-2 px-6 bg-blue-600 hover:bg-blue-700 rounded-full text-sm text-white transition-colors"
              >
                {t("nav_btn.contact_btn")}
              </button>
            </Link>
          </div>
          <div className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer py-2 px-[8px]"
              onClick={handleActiveLang}
            >
              <p className="text-sm font-medium text-white uppercase">
                {locale}
              </p>
              <div
                className={`transition-transform ${
                  isActive ? "rotate-180" : "rotate-0"
                }`}
              >
                <Image
                  src="/icons/arrow.png"
                  alt="Language Toggle"
                  width={12}
                  height={6}
                />
              </div>
            </div>

            {isActive && (
              <div className="absolute right-0 top-full mt-2 w-20 bg-gray-800 rounded-lg overflow-hidden">
                {locale !== "uz" && (
                  <button
                    aria-label="uz"
                    className="w-full text-sm font-medium text-white uppercase hover:bg-gray-700 py-2 px-4 text-left"
                  >
                    <Link locale="uz" href={usePa} className="block">
                      uz
                    </Link>
                  </button>
                )}
                {locale !== "en" && (
                  <button
                    aria-label="en"
                    className="w-full text-sm font-medium text-white uppercase hover:bg-gray-700 py-2 px-4 text-left"
                  >
                    <Link locale="en" href={usePa} className="block">
                      en
                    </Link>
                  </button>
                )}
                {locale !== "ru" && (
                  <button
                    aria-label="ru"
                    className="w-full text-sm font-medium text-white uppercase hover:bg-gray-700 py-2 px-4 text-left"
                  >
                    <Link locale="ru" href={usePa} className="block">
                      ru
                    </Link>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-opacity-95 z-50">
            <div className="flex flex-col items-center pt-20 gap-8 h-screen bg-black">
              <button
                aria-label="Close"
                className="absolute top-12 left-6"
                onClick={() => setMenuOpen(false)}
              >
                <Image src={CloseBtn} alt="Close" width={24} height={24} />
              </button>

              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => {
                    setActivePath(item.path);
                    setMenuOpen(false);
                    localStorage.setItem("activePath", item.path);
                  }}
                  className={`text-white text-lg transition-colors ${
                    activePath === item.path ? "text-blue-400" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex flex-col gap-4 mt-8">
                <Link href={"https://t.me/uicgames"} target="_blank">
                  <button
                    aria-label="Contact"
                    className="py-2 px-8 bg-blue-600 hover:bg-blue-700 rounded-full text-sm text-white transition-colors"
                  >
                    {t("nav_btn.contact_btn")}
                  </button>
                </Link>
                <Link href={"https://t.me/UICGames_bot"} target="_blank">
                  <button
                    aria-label="Join us"
                    className="py-2 px-8 bg-gray-700 hover:bg-gray-600 rounded-full text-sm text-white transition-colors"
                  >
                    {t("nav_btn.join_us_btn")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {isModalOpen && <JoinUsModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Navbarlayout;
