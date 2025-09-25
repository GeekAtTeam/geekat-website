import React, { useState, useMemo, useRef, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './ProductsList.module.css';

// 产品列表页面组件
export default function ProductsList({products}) {
  // 确保 products 是数组
  const productList = Array.isArray(products) ? products : [];
  
  // 筛选状态
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // 获取所有分类
  const categories = useMemo(() => {
    const categorySet = new Set(productList.map(product => product.category));
    return ['全部', ...Array.from(categorySet).sort()];
  }, [productList]);
  
  // 筛选后的产品列表
  const filteredProducts = useMemo(() => {
    if (selectedCategory === '全部') {
      return productList;
    }
    return productList.filter(product => product.category === selectedCategory);
  }, [productList, selectedCategory]);

  // 处理点击外部关闭下拉框
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };
  
  return (
    <Layout title="产品中心" description="极客艾特产品解决方案">
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
          <h1 className={styles.pageTitle}>产品中心</h1>
          <p className={styles.pageSubtitle}>
            探索我们的智能解决方案，让技术创造无限可能
          </p>
        </div>
        
        {/* 分类筛选器 */}
        <div className={styles.filterContainer}>
          <div className={styles.filterWrapper}>
            <label className={styles.filterLabel}>
              产品分类：
            </label>
            <div className={styles.customDropdown} ref={dropdownRef}>
              <button
                className={styles.dropdownButton}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
              >
                {selectedCategory}
                <span className={styles.dropdownArrow}>
                  {isDropdownOpen ? '▲' : '▼'}
                </span>
              </button>
              {isDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`${styles.dropdownItem} ${
                        selectedCategory === category ? styles.dropdownItemActive : ''
                      }`}
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className={styles.filterStats}>
            共 {filteredProducts.length} 个产品
          </div>
        </div>
        
        <div className="row">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col col--4 margin-bottom--lg">
              <Link to={`/products/${product.id}`} className={styles.productCardLink}>
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
                      {product.summary || product.description}
                    </p>
                    <div className={styles.productMeta}>
                      <span className={styles.category}>{product.category}</span>
                      {product.price && (
                        <span className={styles.price}>{product.price}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
