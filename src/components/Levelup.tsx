export default function Levelup() {
  return (
    <div className="relative w-full h-[518px]">
      <div className="absolute inset-0 bg-[url('/Imgs/bgLevelUp.png')] bg-no-repeat bg-center bg-cover"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-b from-transparent to-black"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:w-full w-[360px] h-[257px] bg-[url('/Imgs/bgv-star.png')] bg-no-repeat bg-center bg-contain"></div>
      <div></div>
      <div className="md:pt-[130px] pt-[200px] relative flex flex-col items-center justify-center text-white md:text-5xl sm:text-3xl text-2xl font-bold">
        LEVEL UP WITH THE LATEST <p className="text-blue-500">GAME INSIGHTS!</p>
      </div>
    </div>
  );
}
