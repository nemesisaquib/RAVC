import React from 'react';

const Map = () => {
  return (
    <div className="w-full h-[500px]">
      <iframe
        title="Google Map"
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.902729251288!2d81.02422221504356!3d26.839749983162173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2ae2c024e2b%3A0x8f269aa8c21f50e1!2sBhavya%20Corporate%20Tower%2C%20Vibhuti%20Khand%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226010!5e0!3m2!1sen!2sin!4v1681456891234!5m2!1sen!2sin"
      ></iframe>
    </div>
  );
};

export default Map;
