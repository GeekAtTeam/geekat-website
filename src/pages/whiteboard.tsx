import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './whiteboard.module.css';

export default function Whiteboard(): React.JSX.Element {
  useEffect(() => {
    // 检测当前主题模式并传递给iframe
    const theme = document.documentElement.getAttribute('data-theme');
    const iframe = document.getElementById('excalidraw-iframe') as HTMLIFrameElement;
    
    if (iframe) {
      // 更新iframe的src以包含主题参数
      const baseUrl = 'https://excalidraw.com';
      const themeParam = theme === 'dark' ? '?theme=dark' : '?theme=light';
      iframe.src = baseUrl + themeParam;
    }

    // 设置CSS变量来处理导航栏高度
    const setNavbarHeight = () => {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      if (navbar) {
        const navbarHeight = navbar.offsetHeight;
        const navbarPosition = window.getComputedStyle(navbar).position;
        
        // 设置CSS变量
        document.documentElement.style.setProperty(
          '--navbar-height', 
          (navbarPosition === 'fixed' || navbarPosition === 'sticky') ? `${navbarHeight}px` : '0px'
        );
      }
    };

    // 初始设置
    setNavbarHeight();

    // 监听窗口变化
    const handleResize = () => {
      setNavbarHeight();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <Layout
      title="白板"
      description="在线协作白板 - 创建手绘风格的图表和草图">
      <div className={styles.whiteboardContainer}>
        <iframe
          id="excalidraw-iframe"
          src="https://excalidraw.com"
          title="Excalidraw 白板"
          className={styles.whiteboardIframe}
          allowFullScreen
        />
      </div>
    </Layout>
  );
}
