import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '智能硬件开发',
    icon: 'img/embedded-icon.png',
    description: (
      <div className={styles.featureDescription}>
        <ul>
          <li>嵌入式系统定制开发</li>
          <li>边缘计算设备研发</li>
          <li>传感器融合解决方案</li>
        </ul>
      </div>
    ),
  },
  {
    title: '数字化产品构建',
    icon: 'img/digital-icon.png',
    description: (
      <div className={styles.featureDescription}>
        <ul>
          <li>企业级中间件开发</li>
          <li>跨平台App/小程序开发</li>
          <li>微服务架构设计与实施</li>
        </ul>
      </div>
    ),
  },
  {
    title: '技术赋能计划',
    icon: 'img/certification-icon.png',
    description: (
      <div className={styles.featureDescription}>
        <ul>
          <li>嵌入式开发实战培训</li>
          <li>物联网架构师认证</li>
          <li>企业技术转型咨询</li>
        </ul>
      </div>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className={styles.featureCardInner}>
        <div className={styles.featureIconWrapper}>
          <img src={useBaseUrl(icon)} alt={title} className={styles.featureIcon} />
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.sectionTitle}>业务版图</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
