import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../ProductDetail.module.css';

const product = {
  id: 'air-quality-monitor',
  name: '空气质量监测系统',
  category: '物联网',
  description: '实时监测空气质量的多参数传感器系统，支持PM2.5、PM10、CO2、温湿度等多种指标监测，提供数据分析和预警功能。',
  image: '/img/products/air-quality-monitor.jpg',
  price: '¥599起',
  status: '已发布',
  features: [
    '多参数同时监测',
    '实时数据传输',
    '智能预警系统',
    '历史数据分析',
    '移动端APP监控'
  ],
  specifications: {
    '监测参数': 'PM2.5, PM10, CO2, 温湿度, VOC',
    '数据精度': 'PM2.5: ±10μg/m³',
    '传输方式': '4G/WiFi/LoRa',
    '电池续航': '6个月',
    '工作温度': '-20°C ~ 60°C',
    '防护等级': 'IP65'
  },
  downloads: [
    {
      name: '产品手册.pdf',
      url: '/downloads/air-quality-monitor-manual.pdf'
    },
    {
      name: 'APP下载.apk',
      url: '/downloads/air-quality-monitor-app.apk'
    }
  ]
};

export default function AirQualityMonitor() {
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
