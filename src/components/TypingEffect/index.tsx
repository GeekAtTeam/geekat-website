import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

interface TypingEffectProps {
  texts: string[];       // 要显示的文字数组
  speed?: number;        // 打字速度（毫秒）
  loop?: boolean;        // 是否循环播放
  cursor?: boolean;      // 是否显示光标
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  speed = 100,
  loop = true,
  cursor = true
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];
      
      if (!isDeleting) {
        // 打字阶段
        if (currentIndex < currentText.length) {
          setDisplayText(currentText.substring(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        } else {
          // 开始删除
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // 删除阶段
        if (currentIndex > 0) {
          setDisplayText(currentText.substring(0, currentIndex - 1));
          setCurrentIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          // 切换到下一段文本或循环
          setTextIndex(prev => (prev + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, textIndex, texts, speed]);

  return (
    <div className="typing-container">
      <span className="typing-text">{displayText}</span>
      {cursor && <span className="typing-cursor">|</span>}
    </div>
  );
};

export default TypingEffect;