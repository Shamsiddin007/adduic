import { useTranslations } from "next-intl";

export default function Levelup() {
  const t = useTranslations("HomePage");
  const blogTitle = t("blog_title");

  const words = blogTitle.split(" ");
  const mainText = words.slice(0, -2).join(" ");
  const highlightedText = words.slice(-2).join(" ");

  return (
    <div className="relative w-full h-[518px]">
      <div className="absolute inset-0 bg-[url('/Imgs/bgLevelUp.png')] bg-no-repeat bg-center bg-cover"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-b from-transparent to-black"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:w-full w-[360px] h-[257px] bg-[url('/Imgs/bgv-star.png')] bg-no-repeat bg-center bg-contain"></div>
      <div className="md:pt-[170px] pt-[200px] relative flex flex-col items-center justify-center text-center text-white md:text-5xl sm:text-3xl text-2xl font-bold">
        {mainText} <p className="text-blue-500 inline">{highlightedText}</p>
      </div>
    </div>
  );
}
