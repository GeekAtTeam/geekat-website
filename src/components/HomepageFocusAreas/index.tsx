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
    description: '生态农业是未来发展趋势，我们通过物联网技术、智能传感器和数据分析，实现精准种植、智能监测，大幅提升农业生产效率和质量。',
    image: 'https://geekat.oss-cn-guangzhou.aliyuncs.com/images/agriculture-bg.webp',
  },
  {
    title: '零售',
    icon: 'img/focus-areas/retail-icon.svg',
    description: '新零售时代需要全渠道数字化能力，我们提供智能供应链管理、消费者行为分析、无人零售解决方案，助力传统零售业转型升级。',
    image: 'https://geekat.oss-cn-guangzhou.aliyuncs.com/images/retail-bg.webp',
  },
  {
    title: '地球',
    icon: 'img/focus-areas/earth-icon.svg',
    description: '环境保护与可持续发展是时代使命，我们运用绿色科技、环境监测系统、清洁能源技术，为地球生态保护贡献技术力量。',
    image: 'https://geekat.oss-cn-guangzhou.aliyuncs.com/images/earth-bg.webp',
  },
  {
    title: '家居',
    icon: 'img/focus-areas/smart-home-icon.svg',
    description: '智能家居是未来生活标准，我们构建完整的智能家居生态系统，通过AI语音控制、自动化场景，让科技无缝融入日常生活。',
    image: 'https://geekat.oss-cn-guangzhou.aliyuncs.com/images/smart-home-bg.webp',
  },
  {
    title: '物流',
    icon: 'img/focus-areas/logistics-icon.svg',
    description: '智慧物流是现代商业基础，我们打造从仓储管理到配送优化的全链路数字化解决方案，通过AI算法提升物流效率和客户体验。',
    image: 'https://geekat.oss-cn-guangzhou.aliyuncs.com/images/logistics-bg.webp',
  },
  {
    title: '工业',
    icon: 'img/focus-areas/industry-icon.svg',
    description: '工业4.0智能制造是制造业未来，我们提供工业物联网、智能生产线、预测性维护等解决方案，推动传统制造业智能化升级。',
    image: 'https://geekat.oss-cn-guangzhou.aliyuncs.com/images/industry-bg.webp',
  },
  {
    title: '教育',
    icon: 'img/focus-areas/education-icon.svg',
    description: 'STEM创客教育培养未来人才，我们开发个性化学习平台、创客教育工具、VR/AR教学系统，让教育更加公平、高效、有趣。',
    image: 'https://geekat.oss-cn-guangzhou.aliyuncs.com/images/education-bg.webp',
  },
  {
    title: '养老',
    icon: 'img/focus-areas/elderly-care-icon.svg',
    description: '智慧养老是人口老龄化解决方案，我们研发养老服务机器人、健康监测设备、智能护理系统，用科技助力健康养老生活。',
    image: 'https://geekat.oss-cn-guangzhou.aliyuncs.com/images/elderly-care-bg.webp',
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
        
        {/* 描述抽屉 */}
        <div className={styles.focusAreaDescription}>
          {/* 标题 */}
          <div className={styles.focusAreaTitle}>{title}</div>
          {/* 描述 */}
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
