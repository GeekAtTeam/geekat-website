import React from 'react';
import confetti from 'canvas-confetti';

export default function ConfettiButton() {
  const handleClick = () => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { x: 0.5, y: 0.5 }
    });
  };

  return (
    <button 
      className="button button--primary"
      onClick={handleClick}
    >
      点击撒花！🎉
    </button>
  );
}