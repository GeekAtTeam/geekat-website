import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageAdvantages from '@site/src/components/HomepageAdvantages';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import SpaceBackground from '@site/src/components/SpaceBackground';
// import TestCube from '@site/src/components/TestCube';
import TypingEffect from '@site/src/components/TypingEffect';
import TypingOverlay from '@site/src/components/TypingOverlay';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`首页 ${siteConfig.title}`}
      title="首页"
      description="广州极客艾特计算机系统有限公司，让智能技术回归价值本质！">
      
      {/* <SpaceBackground /> */}
      {/* <div style={{ border: '2px solid red' }}>
        <SpaceBackground />
      </div> */}
      <div style={{ 
        // border: '2px solid red',
        height: '100vh', // 关键修复：设置视口高度
        position: 'relative', // 确保子元素定位基准
        overflow: 'hidden'
        }}>
          <SpaceBackground />

          {/* 打字机效果文字 */}
          <TypingOverlay 
            phrases={[
              "极客艾特 Geek@",
              "让智能技术回归价值本质",
              "用极客精神创造社会价值"
            ]}
            typingSpeed={80}
            deletingSpeed={40}
            pauseDuration={2000}
          />

          {/* Scroll Down 提示 */}
          <div style={{ 
            position: 'absolute',
            bottom: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{
              width: '28px',
              height: '48px',
              border: '2px solid #ffffff',
              borderRadius: '16px',
              position: 'relative',
              opacity: 1.0
            }}>
              {/* 鼠标滚轮动画 */}
              <div style={{
                position: 'absolute',
                top: '8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '3px',
                height: '10px',
                background: '#ffffff',
                borderRadius: '2px',
                animation: 'scrollWheel 2s ease-in-out infinite'
              }} />
            </div>
            <div style={{
              color: '#ffffff',
              fontSize: '0.9rem',
              fontWeight: '500',
              opacity: 0.8
            }}>
              Scroll Down
            </div>
          </div>
      </div>

      {/* <TypingEffect
        texts={[
          "让智能技术回归价值本质",
          "创新驱动未来",
          "科技创造无限可能"
        ]}
        speed={80}
        loop={true}
        cursor={true}
      /> */}

      {/* <HomepageHeader /> */}

      {/* <TestCube /> */}
      <main>
        {/* 业务版图 */}
        <HomepageFeatures />
        {/* 核心优势 */}
        <HomepageAdvantages />
        <img
          src={require('@site/static/img/geekat-business.webp').default}
          alt="极客艾特覆盖行业解决方案"
          className={styles.topBanner}
        />
      </main>
    </Layout>
  );
}
