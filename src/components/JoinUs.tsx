import React, { useState } from "react";
import Image from "next/image";
import CloseBtn from "/public/Imgs/close-428 1.png";

interface JoinUsModalProps {
  onClose: () => void;
}

const JoinUsModal: React.FC<JoinUsModalProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, phoneNumber });
    onClose();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      {" "}
      <Image
        className="cursor-pointer absolute mb-[550px] ml-[800px] text-white text-2xl hover:text-gray-300"
        onClick={onClose}
        src={CloseBtn}
        alt="Logo"
      />{" "}
      <div className="relative bg-gray-900 p-8 rounded-lg text-center w-[694.56px] h-[444.6px]">
        {" "}
        <h2 className="text-white text-lg mb-12 pt-[50px]">Join Us</h2>{" "}
        <form onSubmit={handleSubmit}>
          {" "}
          <input
            type="text"
            placeholder="Name please?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full mb-4 p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
          />{" "}
          <input
            type="tel"
            placeholder="Phone number please?"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="block w-full mb-4 p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
          />{" "}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 w-[241px] rounded-[140px] mt-[20px}"
          >
            {" "}
            Send{" "}
          </button>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};
export default JoinUsModal;
