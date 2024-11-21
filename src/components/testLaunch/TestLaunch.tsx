import Marquee from "react-fast-marquee";

function TestLaunch() {
  const marqueText = [
    "Sayt test holatida ishlamoqda",
    "Sayt test holatida ishlamoqda",
    "Sayt test holatida ishlamoqda",
    "Sayt test holatida ishlamoqda",
    "Sayt test holatida ishlamoqda",
    "Sayt test holatida ishlamoqda",
    "Sayt test holatida ishlamoqda"
  ];

  return (
    <div className="fixed bottom-0 left-0 z-20 w-full">
      <Marquee className="h-7 bg-[#0f2d65d0]">
        {marqueText.map((item, id) => {
          return (
            <div className="flex" key={id}>
              <p className="text-white text-[14px]">{item}</p>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}

export default TestLaunch;
