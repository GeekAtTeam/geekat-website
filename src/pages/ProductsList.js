import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './ProductsList.module.css';

// 产品列表页面组件
export default function ProductsList({products}) {
  // 确保 products 是数组
  const productList = Array.isArray(products) ? products : [];
  
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
          {productList.map((product) => (
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
