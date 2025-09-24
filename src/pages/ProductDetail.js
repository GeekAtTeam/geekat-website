import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './ProductDetail.module.css';

// 产品详情页面组件
export default function ProductDetail({product}) {
  // 确保 product 存在
  if (!product) {
    return (
      <Layout title="产品未找到" description="该产品不存在">
        <div className="container margin-vert--lg">
          <div className="text--center">
            <h1>产品未找到</h1>
            <p>抱歉，您要查找的产品不存在。</p>
            <Link className="button button--primary" to="/products">
              返回产品列表
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
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
              
              {/* 微信小程序二维码 */}
              {product.qrcode && (
                <div className={styles.qrcodeSection}>
                  <h4>扫码体验</h4>
                  <div className={styles.qrcodeContainer}>
                    <img
                      src={useBaseUrl(product.qrcode)}
                      alt={`${product.name} 微信小程序二维码`}
                      className={styles.qrcode}
                    />
                  </div>
                  <p className={styles.qrcodeTip}>微信扫描二维码体验小程序</p>
                </div>
              )}
              
              <div className={styles.actions}>
                <Link
                  className="button button--primary button--block"
                  to="/contact"
                  style={{ marginBottom: '1rem', display: 'block' }}
                >
                  联系我们
                </Link>
                
                <Link
                  className={`button button--secondary button--block ${styles.customSecondaryButton}`}
                  to="/products"
                  style={{ marginBottom: '0.5rem', display: 'block' }}
                >
                  返回产品列表
                </Link>
              </div>
              
              {product.downloads && (
                <div className={styles.downloads}>
                  <h4>相关资源</h4>
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
