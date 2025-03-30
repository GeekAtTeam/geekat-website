import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type AdvantageItem = {
  title: string;
  Svg: React.ElementType;
  description: ReactNode;
};

const AdvantageList: AdvantageItem[] = [
  {
    title: '硬核技术基底',
    Img: () => (
      <img 
        src={require('@site/static/img/engineer-icon.png').default}
        alt="硬核技术基底"
        className={styles.advantageImage}
      />
    ),
    description: (
      <div className={styles.advantageDescription}>
        累计完成 120+ 嵌入式项目，核心成员拥有 ARM/RTOS 领域认证。
      </div>
    ),
  },
  {
    title: '全栈开发能力',
    Img: () => (
      <img 
        src={require('@site/static/img/full-stack-icon.png').default}
        alt="全栈开发能力"
        className={styles.advantageImage}
      />
    ),
    description: (
      <div className={styles.advantageDescription}>
        从芯片级开发到云端部署，提供 AIoT 领域端到端解决方案。
      </div>
    ),
  },
  {
    title: '敏捷交付体系',
    // Img: require('@site/static/img/agile-development-icon.png').default,
    Img: () => (
      <img 
        src={require('@site/static/img/agile-development-icon.png').default}
        alt="敏捷交付体系"
        className={styles.advantageImage}
      />
    ),
    description: (
      <div className={styles.advantageDescription}>
        独创“蜂巢开发模型”，确保项目交付准时率超 98%。
      </div>
    ),
  },
  {
    title: '行业理解深度',
    Img: () => (
      <img 
        src={require('@site/static/img/industry-robot-icon.png').default}
        alt="行业理解深度"
        className={styles.advantageImage}
      />
    ),
    description: (
      <div className={styles.advantageDescription}>
        服务覆盖智能家居、工业物联网、智能驾驶、智慧农业、智慧医疗等八大垂直领域。
      </div>
    ),
  },
];

function Advantage({title, Img, description}: AdvantageItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Img className={styles.advantageSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default function HomepageAdvantages(): ReactNode {
  return (
    <section className={styles.advantages}>
      <div className="container">
        <div className="row">
          {AdvantageList.map((props, idx) => (
            <Advantage key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
