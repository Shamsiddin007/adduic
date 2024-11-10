import Image from "next/image";
import send from "/public/icons/send.png";

export default function Forma() {
  return (
    <div className="container">
      <div className="w-full h-[554px] rounded-[20px] bg-custom-forma mb-12 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center w-7/12">
          <h4 className="pb-6 pt-11 text-start text-[32px] font-bold text-white">
            Any questions
          </h4>
          <form action="" className="w-10/12">
            <label
              htmlFor="name"
              className="text-[#FFFFFF] text-[16px] pb-2 font-sans"
            >
              Your name
            </label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your full name"
              autoComplete="off"
              className="bg-[#161B22] py-[11px] pl-3 w-full rounded-xl text-white font-sans mb-6 border-none outline-none focus:border-blue-500 focus:outline-blue-500"
            />
            <br />
            <label
              htmlFor="email"
              className="text-[#FFFFFF] text-[16px] pb-2 font-sans"
            >
              Phone number or email
            </label>
            <br />
            <input
              type="text"
              id="contact"
              name="contact"
              required
              placeholder="Example: info@uic.games or +998 (71) 200-70-07"
              className="bg-[#161B22] rounded-xl font-sans mb-6 py-[11px] pl-3 w-full outline-none focus:border-blue-500 focus:outline-blue-500 text-white"
            />
            <br />
            <label
              htmlFor="message"
              className="text-[#FFFFFF] text-[16px] pb-2 font-sans"
            >
              Message
            </label>{" "}
            <br />
            <textarea
              id="message"
              name="message"
              placeholder="Write your message"
              rows={4}
              cols={0}
              required
              className="bg-[#161B22] rounded-xl text-[#697583] font-sans mb-6 py-[11px] pl-3 w-full resize-none outline-none focus:outline-none"
            ></textarea>
            <br />
            <button
              type="submit"
              className="group flex items-center justify-center gap-2 text-[16px] w-full text-center text-white bg-[#3375F6] hover:bg-[#2854C3] py-[10px] rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Send
              <Image
                src={send}
                alt="send icon"
                className="group-hover:rotate-[50deg] group-hover:scale-110 transition-transform duration-300"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
