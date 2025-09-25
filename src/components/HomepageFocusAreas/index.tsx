import type {ReactNode} from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type FocusAreaItem = {
  title: string;
  icon: string;
  description: string;
  image: string;
};

const FocusAreaList: FocusAreaItem[] = [
  {
    title: '农业',
    icon: 'img/focus-areas/agriculture-icon.svg',
    description: '智慧生态农业解决方案，从精准种植到智能监测，提升农业生产效率',
    image: 'img/focus-areas/agriculture-bg.webp',
  },
  {
    title: '零售',
    icon: 'img/focus-areas/retail-icon.svg',
    description: '新零售技术赋能，智能供应链管理，提升消费体验',
    image: 'img/focus-areas/retail-bg.webp',
  },
  {
    title: '地球',
    icon: 'img/focus-areas/earth-icon.svg',
    description: '环境保护与可持续发展，绿色科技助力地球生态保护',
    image: 'img/focus-areas/earth-bg.webp',
  },
  {
    title: '家居',
    icon: 'img/focus-areas/smart-home-icon.svg',
    description: '智能家居生态系统，让科技融入生活的每一个角落',
    image: 'img/focus-areas/smart-home-bg.webp',
  },
  {
    title: '物流',
    icon: 'img/focus-areas/logistics-icon.svg',
    description: '智慧物流网络，从仓储到配送的全链路数字化解决方案',
    image: 'img/focus-areas/logistics-bg.webp',
  },
  {
    title: '工业',
    icon: 'img/focus-areas/industry-icon.svg',
    description: '工业4.0智能制造，推动传统制造业向智能化转型升级',
    image: 'img/focus-areas/industry-bg.webp',
  },
  {
    title: '教育',
    icon: 'img/focus-areas/education-icon.svg',
    description: '智慧教育平台，个性化学习体验，让教育更加公平高效',
    image: 'img/focus-areas/education-bg.webp',
  },
  {
    title: '养老',
    icon: 'img/focus-areas/elderly-care-icon.svg',
    description: '智慧养老服务，科技助力健康养老，让晚年生活更美好',
    image: 'img/focus-areas/elderly-care-bg.webp',
  },
];

function FocusArea({title, icon, description, image}: FocusAreaItem) {
  return (
    <div className={clsx('col', styles.focusAreaCard)}>
      <div className={styles.focusAreaCardInner}>
        {/* 背景图片 */}
        <div 
          className={styles.focusAreaImage}
          style={{
            backgroundImage: `url(${useBaseUrl(image)})`,
          }}
        />
        
        {/* 图标覆盖层 */}
        <div className={styles.focusAreaIconWrapper}>
          <img src={useBaseUrl(icon)} alt={title} className={styles.focusAreaIcon} />
        </div>
        
        {/* 标题 */}
        <div className={styles.focusAreaTitle}>
          {title}
        </div>
        
        {/* 描述抽屉 */}
        <div className={styles.focusAreaDescription}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFocusAreas(): ReactNode {
  return (
    <section className={styles.focusAreas}>
      <div className="container">
        <h2 className={styles.sectionTitle}>关注领域</h2>
        <div className="row">
          {FocusAreaList.map((props, idx) => (
            <FocusArea key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
