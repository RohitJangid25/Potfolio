import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsApp = () => {
  const phoneNumber = '9588201345'; // Replace with your actual WhatsApp number

  return (
    <a
      href={`https://wa.me/${9588201345}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
    >
      <FaWhatsapp className="text-white text-4xl" />
    </a>
  );
};

export default WhatsApp;
