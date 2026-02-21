'use client';

import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // WhatsApp number from environment variable or default
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+1234567890';
  const message = encodeURIComponent('Hello, I am interested in language courses.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <>
      {isVisible && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 flex items-center gap-2 pr-5"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={24} />
          <span className="text-sm font-medium opacity-0 hover:opacity-100 transition-opacity duration-300 w-0 hover:w-auto whitespace-nowrap overflow-hidden">
            Chat with us
          </span>
        </a>
      )}
    </>
  );
};

export default WhatsAppFloatingButton;
