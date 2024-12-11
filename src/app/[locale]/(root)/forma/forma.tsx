"use client";

import React, { useState } from "react";
import Image from "next/image";
import send from "public/icons/send.png";
import check from "public/icons/check.png";
import { useTranslations } from "next-intl";

export default function Forma() {
  const t = useTranslations("HomePage")
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<{
    name: boolean;
    contact: boolean;
    message: boolean;
  }>({
    name: false,
    contact: false,
    message: false,
  });
  const [notificationVisible, setNotificationVisible] = useState<boolean>(
    false
  );

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value.length > 0 && /^[a-z]/.test(value)) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }
    setName(value);
    setErrors((prev) => ({ ...prev, name: value.length < 3 }));
  };

  const handleContact = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const numericValue = value.replace(/\D/g, "");
    const isPhoneValid = numericValue.length >= 7;
    const isEmailValid = emailRegex.test(value);
    setContact(value);
    const isValidContact = isPhoneValid || isEmailValid;
    setErrors((prev) => ({ ...prev, contact: !isValidContact }));
  };


  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMessage(value);
    setErrors((prev) => ({ ...prev, message: value.length < 10 }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid =
      name.length >= 3 &&
      (contact.length >= 7 ||
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(contact)) &&
      message.length >= 10;

    setErrors({
      name: name.length < 3,
      contact: !(
        contact.length >= 7 || /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(contact)
      ),
      message: message.length < 10,
    });

    if (isFormValid) {
      setNotificationVisible(true);
      setTimeout(() => setNotificationVisible(false), 3000);
      setName("");
      setContact("");
      setMessage("");
    }
  };

  const hasErrors = errors.name || errors.contact || errors.message;

  return (
    <div className="container"  id="contact-section">
      <div className="w-full rounded-[20px] mb-12 flex flex-col items-center bg-forma">
        <div className="flex flex-col items-center justify-center xl:w-7/12 md:w-8/12 w-10/12">
          <h4 className="pb-6 pt-11 text-start md:text-[32px] text-[26px] font-bold text-white">
            {t("contact.title_questions")}
          </h4>
          <form onSubmit={handleSubmit} className="w-full">
            <label
              htmlFor="name"
              className="text-[#FFFFFF] text-[16px] pb-2 font-sans"
            >
              {t("contact.name_input")}
            </label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              autoComplete="off"
              value={name}
              onChange={handleNameChange}
              className={`bg-[#161B22] py-[11px] px-3 w-full rounded-xl text-white font-sans mb-6 border ${
                errors.name ? "border-red-500" : "border-transparent"
              } outline-none ${
                !errors.name && "hover:border-blue-500"
              } transition-all duration-300`}
            />
            <br />
            <label
              htmlFor="contact"
              className="text-[#FFFFFF] text-[16px] pb-2 font-sans"
            >
              {t("contact.phone_or_email")}
            </label>
            <br />
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="Example: info@uic.games or +998 (71) 200-70-07"
              autoComplete="off"
              value={contact}
              onChange={handleContact}
              className={`bg-[#161B22] py-[11px] pl-3 w-full rounded-xl text-white font-sans mb-6 border ${
                errors.contact ? "border-red-500" : "border-transparent"
              } outline-none ${
                !errors.contact && "hover:border-blue-500"
              } transition-all duration-300`}
            />
            <br />
            <label
              htmlFor="message"
              className="text-[#FFFFFF] text-[16px] pb-2 font-sans"
            >
              {t("contact.message")}
            </label>
            <br />
            <textarea
              id="message"
              name="message"
              placeholder="Write your message"
              rows={4}
              autoComplete="off"
              value={message}
              onChange={handleMessage}
              className={`bg-[#161B22] py-[11px] pl-3 w-full rounded-xl text-white font-sans mb-6 border resize-none ${
                errors.message ? "border-red-500" : "border-transparent"
              } outline-none ${
                !errors.message && "hover:border-blue-500"
              } transition-all duration-300`}
            ></textarea>
            <br />
            <button
              type="submit"
              disabled={hasErrors}
              className={`group flex items-center justify-center gap-2 text-[16px] w-full text-center text-white !border-[1px] ${
                hasErrors
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-[#3375F6] hover:bg-[#2854C3]"
              } py-[10px] mb-12 rounded-full shadow-md ${
                hasErrors ? "" : "hover:shadow-lg"
              } transition-all duration-300`}
            >
              {t("contact.btn_send")}
              <Image
                src={send}
                alt="send icon"
                width={22}
                height={22}
                className={`${
                  hasErrors
                    ? ""
                    : "group-hover:rotate-[50deg] group-hover:scale-110"
                } transition-transform duration-300`}
              />
            </button>
          </form>
        </div>
      </div>

      {notificationVisible && (
        <div className="flex items-center gap-2 md:text-sm text-xs font-sans fixed !bottom-12 right-4 bg-[#1E1E1E] text-white py-2 sm:px-4 px-2 rounded shadow-sm shadow-blue-400 z-50 animate-slide-in-out">
          <Image
            src={check}
            alt="CheckIcons"
            className="sm:w-6 sm:h-6 w-5 h-5"
            width={22}
            height={22}                               
          />
          {t("contact.succes_notif")}
        </div>
      )}
    </div>
  );
}
