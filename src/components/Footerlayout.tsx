import uiclogo from "/public/icons/Logo.svg";
import phone from "/public/icons/phone.png";
import email from "/public/icons/email.png";
import telegram from "/public/icons/telegram.png";
import linkidin from "/public/icons/linkidin.png";
import youTube from "/public/icons/youTube.png";
import instagram from "/public/icons/instagram.png";
import facebook from "/public/icons/facebook.png";
import Image from "next/image";
import Link from "next/link";
import styles from "../components/style.module.css";
import stylesss from "../components/style.module.css";

const Footerlayout = () => {
  return (
    <div
      className="w-full h-100vh "
      style={{
        backgroundImage:
          "linear-gradient(-30deg, #22252A61C,transparent ,transparent,transparent,#3375F61F)",
      }}
    >
      <div
        className="relative h-max pt-2 top-10 pb-4"
        style={{
          background:
            "linear-gradient(10deg,transparent ,transparent,transparent,#3375F61f)",
        }}
      >
        <div
          className="w-[50%] h-[60%] absolute bg-no-repeat bg-cover bottom-0 right-0 z-0"
          style={{
            backgroundImage: "url('/icons/footerBgImg.png')",
            transformOrigin: "center",
          }}
        ></div>
        <div className="container">
          <div className="w-full h-[500px] text-white mt-32 relative z-1">
            <div className="mt-16 flex">
              <div className="flex w-2/3 flex-col gap-16 text-xl">
                <Link href="/">
                  <Image
                    src={uiclogo}
                    alt="uiclogo"
                    className="w-56 cursor-pointer"
                  />
                </Link>
                <article className="flex items-center gap-24 font-thin text-gray-600 h-60">
                  <ul className={styles.item_home}>
                    <Link href="/about">
                      <li className={styles.item1}>Our projects</li>
                    </Link>
                    <Link href="/workopportunite">
                      <li className={styles.item2}>Work values</li>
                    </Link>
                    <Link href="/praktikum">
                      <li className={styles.item3}>The team</li>
                    </Link>
                  </ul>
                  <ul className={styles.item_child}>
                    <Link href="/service-us">
                      <li className={styles.item4}>Contact us</li>
                    </Link>
                    <Link href="portfolio">
                      <li className={styles.item5}>Vacancies</li>
                    </Link>
                    <Link href="/blog">
                      <li className={styles.item6}>Results</li>
                    </Link>
                  </ul>
                </article>
                <article className="flex gap-32">
                  <div className="flex h-12 gap-4">
                    <span className="p-3 rounded-lg bg-[#3375F6]">
                      <Image src={phone} alt="phone img" />
                    </span>
                    <article>
                      <p className="text-sm text-gray-500">Phone number</p>
                      <p className="text-base">+998 (71) 252-74-77</p>
                    </article>
                  </div>
                  <div className="flex h-11 gap-4 ">
                    <span className="p-3 rounded-lg bg-[#3375F6]">
                      <Image src={email} alt="email img" />
                    </span>
                    <article>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-base">info@uicgames.uz</p>
                    </article>
                  </div>
                </article>
              </div>
              <div className="w-2/3 -ml-10 flex flex-col gap-4 mt-5">
                <h1 className="uppercase text-4xl">
                  we are <span className="text-[#3375F6]">uic games!</span>
                </h1>
                <p className="text-gray-500 w-3/5 text-[18px]">
                  We are passionate storytellers, visionary artists, and
                  technical wizards dedicated to creating unforgettable gaming
                  experiences
                </p>
                <div className="flex w-2/4 justify-between mt-6">
                  <span className={stylesss.items}>
                    <Image
                      src={linkidin}
                      alt="linkidin img"
                      className="w-[17px] h-[17px]"
                    />
                  </span>
                  <span className={stylesss.items}>
                    <Image
                      src={facebook}
                      alt="facebook img"
                      className="w-[20px] h-[20px] rounded"
                    />
                  </span>
                  <span className={stylesss.items}>
                    <Image src={instagram} alt="instagram img" />
                  </span>
                  <span className={stylesss.items}>
                    <Image src={telegram} alt="telegram img" />
                  </span>
                  <span className={stylesss.items}>
                    <Image src={youTube} alt="youtube img" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footerlayout;
