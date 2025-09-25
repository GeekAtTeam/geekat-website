import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

export default function Whiteboard(): JSX.Element {
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
  }, []);

  return (
    <Layout
      title="白板"
      description="在线协作白板 - 创建手绘风格的图表和草图">
      <div style={{ height: '100vh', width: '100%', margin: 0, padding: 0 }}>
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
