import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type AdvantageItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const AdvantageList: AdvantageItem[] = [
  {
    title: '硬核技术基底',
    icon: 'img/quality-icon.png',
    description: (
      <div className={styles.advantageDescription}>
        累计完成 120+ 嵌入式、互联网项目，团队成员拥有 ARM/RTOS、云计算等领域认证。
      </div>
    ),
  },
  {
    title: '全栈开发能力',
    icon: 'img/full-stack-icon.png',
    description: (
      <div className={styles.advantageDescription}>
        从芯片级开发到云端部署，再到用户界面，我们提供完整的 AIoT 全链路解决方案。
      </div>
    ),
  },
  {
    title: '敏捷交付体系',
    icon: 'img/agile-development-icon.png',
    description: (
      <div className={styles.advantageDescription}>
        独创"蜂巢开发模型"，确保项目交付准时率超 95%。
      </div>
    ),
  },
  {
    title: '行业理解深度',
    icon: 'img/industry-robot-icon.png',
    description: (
      <div className={styles.advantageDescription}>
        服务覆盖智能家居、工业物联网、智能驾驶、智慧农业、智慧医疗等八大垂直领域。
      </div>
    ),
  },
];

function Advantage({title, icon, description}: AdvantageItem) {
  return (
    <div className={clsx('col col--3', styles.advantageCard)}>
      <div className={styles.advantageCardInner}>
        <div className={styles.advantageIconWrapper}>
          <img src={useBaseUrl(icon)} alt={title} className={styles.advantageIcon} />
        </div>
        <div className={styles.advantageContent}>
          <Heading as="h3" className={styles.advantageTitle}>{title}</Heading>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageAdvantages(): ReactNode {
  return (
    <section className={styles.advantages}>
      <div className="container">
        <h2 className={styles.sectionTitle}>核心优势</h2>
        <div className="row">
          {AdvantageList.map((props, idx) => (
            <Advantage key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
