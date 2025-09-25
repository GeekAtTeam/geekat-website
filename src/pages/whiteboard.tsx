import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';

export default function Whiteboard(): React.JSX.Element {
  const [containerStyle, setContainerStyle] = useState<{
    height: string;
    width: string;
    margin: number;
    padding: number;
    marginTop: string;
  }>({
    height: '100vh',
    width: '100%',
    margin: 0,
    padding: 0,
    marginTop: '0px'
  });

  useEffect(() => {
    // 动态检测导航栏高度
    const detectNavbarHeight = () => {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      if (navbar) {
        const navbarHeight = navbar.offsetHeight;
        const computedStyle = window.getComputedStyle(navbar);
        const navbarPosition = computedStyle.position;
        
        // 如果导航栏是fixed或sticky定位，需要偏移
        if (navbarPosition === 'fixed' || navbarPosition === 'sticky') {
          setContainerStyle({
            height: `calc(100vh - ${navbarHeight}px)`,
            width: '100%',
            margin: 0,
            padding: 0,
            marginTop: `${navbarHeight}px`
          });
        } else {
          // 如果导航栏不是fixed定位，则不需要偏移
          setContainerStyle({
            height: '100vh',
            width: '100%',
            margin: 0,
            padding: 0,
            marginTop: '0px'
          });
        }
      }
    };

    // 检测当前主题模式并传递给iframe
    const theme = document.documentElement.getAttribute('data-theme');
    const iframe = document.getElementById('excalidraw-iframe') as HTMLIFrameElement;
    
    if (iframe) {
      // 更新iframe的src以包含主题参数
      const baseUrl = 'https://excalidraw.com';
      const themeParam = theme === 'dark' ? '?theme=dark' : '?theme=light';
      iframe.src = baseUrl + themeParam;
    }

    // 初始检测
    detectNavbarHeight();

    // 监听窗口大小变化，重新检测
    const handleResize = () => {
      detectNavbarHeight();
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
      <div style={containerStyle}>
        <iframe
          id="excalidraw-iframe"
          src="https://excalidraw.com"
          title="Excalidraw 白板"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            margin: 0,
            padding: 0,
            display: 'block'
          }}
          allowFullScreen
        />
      </div>
    </Layout>
  );
}
