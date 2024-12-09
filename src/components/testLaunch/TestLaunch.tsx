import { useTranslations } from "next-intl";
import Marquee from "react-fast-marquee";
import Logo from 'public/icons/Logo.svg'
import Image from "next/image";

function TestLaunch() {
{/* <s></s> */}
  const t = useTranslations("HomePage")

  const marqueText = [
    t("test_Launch"),
    t("test_Launch"),
    t("test_Launch"),
    t("test_Launch")
  ];

  return (
    <div className="fixed bottom-0 left-0 z-20 w-full">
      <Marquee className="h-8 bg-[#0f2d65d0]">
        {marqueText.map((item, id) => {
          return (
            <div className="flex items-center gap-2 mr-16" key={id}>
              <Image src={Logo} alt="Logo uic games" width={100} height={100} /> <span className="text-white">-</span>
              <p className="text-white text-[14px]">{item}</p>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}

export default TestLaunch;
