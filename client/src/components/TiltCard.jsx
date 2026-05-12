import React, { useRef, useState } from 'react';

const TiltCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Relative angle calculations for 3D warping (-12deg to 12deg)
    const rotateX = ((y / height) - 0.5) * -12; 
    const rotateY = ((x / width) - 0.5) * 12; 

    setRotate({ x: rotateX, y: rotateY });
    
    // Shine position matching coordinates
    setGlare({ 
      x: (x / width) * 100, 
      y: (y / height) * 100, 
      opacity: 0.18 
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 0, y: 0, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1200px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.1s ease-out, box-shadow 0.3s ease-out',
      }}
      className={`relative overflow-hidden transition-all duration-500 ${className}`}
    >
      {/* Gloss reflection shine following the mouse */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.22) 0%, transparent 65%)`,
          opacity: glare.opacity,
        }}
      />
      {children}
    </div>
  );
};

export default TiltCard;
