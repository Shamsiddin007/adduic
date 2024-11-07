import { FC } from 'react';

const ContactForm: FC = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-[#0D0F1A] to-[#1A1D33] m-auto p-20 w-[1000px]">
      <div className="w-[580px] p-6 bg-[#101223] rounded-lg shadow-lg text-white">
        <h2 className="text-2xl font-semibold mb-6">Any questions</h2>
        
        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Your name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-[#FFFFFF0D] text-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone or Email Input */}
          <div>
            <label htmlFor="contact" className="block text-sm font-medium mb-1">Phone number or email</label>
            <input
              type="text"
              id="contact"
              placeholder="Example: info@uic.games or +998 (71) 200-70-07"
              className="w-full px-4 py-3 bg-[#FFFFFF0D] text-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea
              id="message"
              placeholder="Write your message"
              rows={4}
              className="w-full px-4 py-3 bg-[#FFFFFF0D] text-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 flex justify-center items-center bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            Send <span className="ml-2">✈️</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
