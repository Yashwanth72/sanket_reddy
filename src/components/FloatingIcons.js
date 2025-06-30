import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';
import './FloatingIcons.css';

const FloatingIcons = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/YOUR_PHONE_NUMBER', '_blank');
  };

  const handleOrderNowClick = () => {
    // Replace this URL with your order form or product page URL
    window.open('https://fireantstudios.in/#ordernow', '_blank');
  };

  return (
    <div className="floating-icons">
      <button 
        className="floating-icon whatsapp-icon"
        onClick={handleWhatsAppClick}
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </button>
      <button 
        className="floating-icon order-now-icon"
        onClick={handleOrderNowClick}
        title="Order Now"
      >
        <MdShoppingCart />
      </button>
    </div>
  );
};

export default FloatingIcons; 