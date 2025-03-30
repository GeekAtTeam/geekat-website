import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '智能硬件开发',
    Svg: () => (
      <img 
        src={require('@site/static/img/embedded-icon.png').default}
        alt="智能硬件开发"
        className="featureImage"
      />
    ),
    description: (
      <div className="featureDescription">
        嵌入式系统定制开发<br/>边缘计算设备研发<br/>传感器融合解决方案
      </div>
    ),
  },
  {
    title: '数字化产品构建',
    Svg: () => (
      <img 
        src={require('@site/static/img/digital-icon.png').default}
        alt="数字化产品构建"
        className="featureImage"
      />
    ),
    description: (
      <div className="featureDescription">
        企业级中间件开发<br/>跨平台App/小程序开发<br/>微服务架构设计与实施
      </div>
    ),
  },
  {
    title: '技术赋能计划',
    Svg: () => (
      <img 
        src={require('@site/static/img/quality-icon.png').default}
        alt="技术赋能计划"
        className="featureImage"
      />
    ),
    description: (
      <div className="featureDescription">
        嵌入式开发实战培训<br/>物联网架构师认证<br/>企业技术转型咨询
      </div>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
