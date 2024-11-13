import styles from "./style.module.css";

export default function Story() {
  return (
    <div className="container">
      <div className="relative">
        <div className={`${styles.vio}`}></div>
        <div className="container">
          <div className="flex items-center justify-center">
            <div>
              <p className="text-[#FFFFFF] text-xl pt-[64px] font-sans pb-[12px] opacity-30">
                Let&apos;s talk about who we are.
              </p>
              <h1 className="text-6xl font-bold text-white">
                We are <span className="text-[#3375F6]">UIC GAMES!</span>
              </h1>
              <p className="w-1/2 pt-[40px] md:pt-[60px] pb-4 text-base font-sans leading-5 text-white opacity-80">
                At UIC Games, we are passionate storytellers, visionary artists,
                and technical wizards dedicated to creating unforgettable gaming
                experiences. With a relentless commitment to innovation, we
                craft immersive worlds where players can lose themselves in epic
                adventures and compelling narratives.
              </p>
              <p className="w-1/2 pb-[40px] text-base leading-5 font-sans text-white opacity-80">
                Our team of talented developers, designers, and creatives come
                together to push the boundaries of what&apos;s possible,
                delivering games that resonate with players around the globe.
                Join us on this journey as we redefine the future of interactive
                entertainment.
              </p>
              <article className="flex gap-6 pb-16">
                <button className="bg-[#1F2022] px-16 py-[10px] rounded-full text-white hover:bg-[#3375F6] transition-all duration-500">
                  Contact us
                </button>
                <button className="bg-[#1F2022] px-16 py-[10px] rounded-full text-white hover:bg-[#3375F6] transition-all duration-500">
                  Learn more
                </button>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
