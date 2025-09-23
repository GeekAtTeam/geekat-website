import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../ProductDetail.module.css';

const product = {
  id: 'smart-voice-chatbot',
  name: '智能语音聊天机器人',
  category: '人工智能',
  description: '基于深度学习的智能语音聊天机器人，支持多轮对话、情感分析和个性化推荐。适用于客服、教育、娱乐等多个场景。',
  image: '/img/products/smart-voice-chatbot.jpg',
  price: '¥299起',
  status: '已发布',
  features: [
    '支持中文、英文多语言对话',
    '情感识别和智能回复',
    '个性化学习和记忆功能',
    'API接口，易于集成',
    '云端部署，支持大规模并发'
  ],
  specifications: {
    '响应时间': '< 500ms',
    '并发用户': '1000+',
    '准确率': '95%+',
    '支持语言': '中文、英文',
    '部署方式': '云端/本地',
    'API版本': 'RESTful API v2.0'
  },
  downloads: [
    {
      name: '产品手册.pdf',
      url: '/downloads/smart-voice-chatbot-manual.pdf'
    },
    {
      name: 'API文档.pdf',
      url: '/downloads/smart-voice-chatbot-api.pdf'
    },
    {
      name: 'SDK下载.zip',
      url: '/downloads/smart-voice-chatbot-sdk.zip'
    }
  ]
};

export default function SmartVoiceChatbot() {
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
