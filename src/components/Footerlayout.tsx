
import Image from "next/image";
import Link from "next/link";
import uiclogo from "/public/icons/Logo.svg";
import phone from "/public/icons/phone.png";
import email from "/public/icons/email.png";
import telegram from "/public/icons/telegram.png";
import linkidin from "/public/icons/linkidin.png";
import youTube from "/public/icons/youTube.png";
import instagram from "/public/icons/instagram.png";
import facebook from "/public/icons/facebook.png";
import styles from "./style.module.css"
import Forma from "@/app/forma/forma";
const Footer = () => {
  const socialLinks = [
    { icon: linkidin, alt: "LinkedIn", href: "#" },
    { icon: facebook, alt: "Facebook", href: "#" },
    { icon: instagram, alt: "Instagram", href: "#" },
    { icon: telegram, alt: "Telegram", href: "#" },
    { icon: youTube, alt: "YouTube", href: "#" },
  ];  

  return (
    <footer className="w-full relative h-max "
    style={{
      backgroundImage: "linear-gradient(0deg, #FFFFFF0A,transparent,transparent,transparent,transparent, rgb(16, 34, 179) 99%,transparent)"
    }}
    >
    <div className="w-full flex justify-center items-center">
      <div className={styles.form}>
         <Forma />
       </div>
    </div>
      <div className="relative pt-[280px] pb-12 px-4 sm:px-6 lg:px-8 z-3">
        <div
          className="absolute right-0 bottom-0 w-1/2 h-[55%] bg-no-repeat bg-cover z-1"
          style={{
            backgroundImage: "url('/icons/footerBgImg.png')",
            transformOrigin: "center",
          }}
        />

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Column */}
            <div className="space-y-12">
              <Link href="/">
                <Image
                  src={uiclogo}
                  alt="UIC Games"
                  className="w-40 sm:w-56 cursor-pointer"
                />
              </Link>

              {/* Navigation Menus */}
              <article className={styles.article}>
                <ul className={styles.item_home}>
                  <Link href="/portfolio">
                    <li className={styles.item1}>Our projects</li>
                  </Link>
                  <Link href="/about">
                    <li className={styles.item2}>Work values</li>
                  </Link>
                  <Link href="/praktikum">
                    <li className={styles.item3}>The team</li>
                  </Link>
                </ul>
                <ul className={styles.item_home}>
                  <Link href="/service-us">
                    <li className={styles.item4}>Contact us</li>
                  </Link>
                  <Link href="/portfolio">
                    <li className={styles.item5}>Vacancies</li>
                  </Link>
                  <Link href="/blog">
                    <li className={styles.item6}>Results</li>
                  </Link>
                </ul>
              </article>

              {/* Contact Information */}
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="flex items-center gap-4">
                  <span className="p-3 rounded-lg bg-[#3375F6]">
                    <Image src={phone} alt="Phone" className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm text-gray-400">Phone number</p>
                    <p className="text-white">+998 (71) 252-74-77</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="p-3 rounded-lg bg-[#3375F6]">
                    <Image src={email} alt="Email" className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">info@uicgames.uz</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Right Column */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                WE ARE <span className="text-[#3375F6]">UIC GAMES!</span>
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-lg">
                We are passionate storytellers, visionary artists, and technical
                wizards dedicated to creating unforgettable gaming experiences
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.alt}
                    href={social.href}
                    className="p-3 flex items-center justify-center rounded-lg bg-[#FFFFFF1A] hover:bg-[#3375F6] transition-colors duration-300"
                  >
                    <Image
                      src={social.icon}
                      alt={social.alt}
                      className=" w-5 h-5"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

