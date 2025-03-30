import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

interface TypingOverlayProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const TypingOverlay: React.FC<TypingOverlayProps> = ({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentIndex];
      
      if (!isDeleting) {
        // 打字阶段
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        } else {
          // 完成输入后暂停
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // 删除阶段
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex]);

  return (
    <div className={styles.typingContainer}>
      <span className={styles.text}>{currentText}</span>
      <span className={styles.cursor}></span>
    </div>
  );
};

export default TypingOverlay;