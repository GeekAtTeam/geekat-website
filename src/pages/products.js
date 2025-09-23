import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './ProductsList.module.css';

// 导入产品数据
const products = [
  {
    id: 'smart-voice-chatbot',
    name: '智能语音聊天机器人',
    category: '人工智能',
    description: '基于深度学习的智能语音聊天机器人，支持多轮对话、情感分析和个性化推荐。适用于客服、教育、娱乐等多个场景。',
    image: '/img/products/smart-voice-chatbot.jpg',
    price: '¥299起',
    status: '已发布'
  },
  {
    id: 'auto-weighing-system',
    name: '无人值守自动称重系统',
    category: '工业自动化',
    description: '集成AI视觉识别的高精度自动称重系统，支持多种货物类型识别，实现无人值守的全自动化称重流程。',
    image: '/img/products/auto-weighing-system.jpg',
    price: '¥4999起',
    status: '已发布'
  },
  {
    id: 'air-quality-monitor',
    name: '空气质量监测系统',
    category: '物联网',
    description: '实时监测空气质量的多参数传感器系统，支持PM2.5、PM10、CO2、温湿度等多种指标监测，提供数据分析和预警功能。',
    image: '/img/products/air-quality-monitor.jpg',
    price: '¥599起',
    status: '已发布'
  }
];

// 简化的产品列表页面组件
export default function Products() {
  return (
    <Layout title="产品中心" description="极客艾特产品解决方案">
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <h1 className={styles.pageTitle}>产品中心</h1>
          <p className={styles.pageSubtitle}>
            探索我们的智能解决方案，让技术创造无限可能
          </p>
        </div>
        
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col col--4 margin-bottom--lg">
              <div className={styles.productCard}>
                <div className={styles.productImage}>
                  {product.image && (
                    <img
                      src={useBaseUrl(product.image)}
                      alt={product.name}
                      className={styles.image}
                    />
                  )}
                </div>
                <div className={styles.productContent}>
                  <h3 className={styles.productTitle}>{product.name}</h3>
                  <p className={styles.productDescription}>
                    {product.description}
                  </p>
                  <div className={styles.productMeta}>
                    <span className={styles.category}>{product.category}</span>
                    {product.price && (
                      <span className={styles.price}>{product.price}</span>
                    )}
                  </div>
                  <Link
                    className="button button--primary button--block"
                    to={`/products/${product.id}`}
                  >
                    了解详情
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
