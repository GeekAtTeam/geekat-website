import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../ProductDetail.module.css';

const product = {
  id: 'auto-weighing-system',
  name: '无人值守自动称重系统',
  category: '工业自动化',
  description: '集成AI视觉识别的高精度自动称重系统，支持多种货物类型识别，实现无人值守的全自动化称重流程。',
  image: '/img/products/auto-weighing-system.jpg',
  price: '¥4999起',
  status: '已发布',
  features: [
    '高精度称重传感器，精度达0.01kg',
    'AI视觉识别货物类型',
    '自动打印标签和单据',
    '数据实时上传和统计',
    '支持多种通信协议'
  ],
  specifications: {
    '称重精度': '±0.01kg',
    '称重范围': '0-1000kg',
    '识别准确率': '99.5%',
    '响应时间': '< 3秒',
    '工作温度': '-10°C ~ 60°C',
    '通信接口': 'RS485, Ethernet, WiFi'
  },
  downloads: [
    {
      name: '产品手册.pdf',
      url: '/downloads/auto-weighing-system-manual.pdf'
    },
    {
      name: '安装指南.pdf',
      url: '/downloads/auto-weighing-system-installation.pdf'
    }
  ]
};

export default function AutoWeighingSystem() {
  return (
    <Layout 
      title={product.name} 
      description={product.description}
    >
      <div className="container margin-vert--lg">
        {/* 面包屑导航 */}
        <nav className={styles.breadcrumb}>
          <Link to="/products">产品中心</Link>
          <span className={styles.separator}>/</span>
          <span>{product.name}</span>
        </nav>
        
        <div className="row">
          <div className="col col--8">
            {/* 产品图片 */}
            <div className={styles.productImage}>
              {product.image && (
                <img
                  src={useBaseUrl(product.image)}
                  alt={product.name}
                  className={styles.image}
                />
              )}
            </div>
            
            {/* 产品描述 */}
            <div className={styles.productDescription}>
              <h2>产品介绍</h2>
              <p>{product.description}</p>
              
              {product.features && (
                <>
                  <h3>主要特性</h3>
                  <ul>
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}
              
              {product.specifications && (
                <>
                  <h3>技术规格</h3>
                  <div className={styles.specs}>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className={styles.specItem}>
                        <span className={styles.specKey}>{key}:</span>
                        <span className={styles.specValue}>{value}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          
          <div className="col col--4">
            <div className={styles.productSidebar}>
              <h2 className={styles.productTitle}>{product.name}</h2>
              
              <div className={styles.productMeta}>
                <div className={styles.metaItem}>
                  <strong>分类:</strong>
                  <span className={styles.category}>{product.category}</span>
                </div>
                
                {product.price && (
                  <div className={styles.metaItem}>
                    <strong>价格:</strong>
                    <span className={styles.price}>{product.price}</span>
                  </div>
                )}
                
                {product.status && (
                  <div className={styles.metaItem}>
                    <strong>状态:</strong>
                    <span className={styles.status}>{product.status}</span>
                  </div>
                )}
              </div>
              
              <div className={styles.actions}>
                <Link
                  className="button button--primary button--block"
                  to="/contact"
                >
                  联系我们
                </Link>
                <Link
                  className="button button--secondary button--block"
                  to="/products"
                >
                  返回产品列表
                </Link>
              </div>
              
              {product.downloads && (
                <div className={styles.downloads}>
                  <h4>相关下载</h4>
                  {product.downloads.map((download, index) => (
                    <a
                      key={index}
                      href={download.url}
                      className={styles.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {download.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
