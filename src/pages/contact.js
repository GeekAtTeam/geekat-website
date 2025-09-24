import React from 'react';
import Layout from '@theme/Layout';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <Layout title="联系我们" description="联系极客艾特，获取专业的技术解决方案">
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <h1 className={styles.pageTitle}>联系我们</h1>
          <p className={styles.pageSubtitle}>
            让我们一起探讨如何用技术为您的业务创造价值
          </p>
        </div>
        
        <div className="row">
          <div className="col col--6">
            <div className={styles.contactInfo}>
              <h2>联系信息</h2>
              <div className={styles.infoItem}>
                <h3>公司名称</h3>
                <p>广州极客艾特计算机系统有限公司</p>
              </div>
              
              <div className={styles.infoItem}>
                <h3>联系邮箱</h3>
                <p>service@geekat.cn</p>
              </div>
              
              <div className={styles.infoItem}>
                <h3>主营业务</h3>
                <ul>
                  <li>智能硬件开发（物联网、嵌入式系统、边缘计算设备）</li>
                  <li>数字化产品构建（桌面软件、中间件、网站、App、小程序）</li>
                  <li>技术培训和 STEM 编程教育</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col col--6">
            <div className={styles.contactForm}>
              <h2>发送消息</h2>
              <form>
                <div className="margin-bottom--md">
                  <label htmlFor="name">姓名</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input"
                    required
                  />
                </div>
                
                <div className="margin-bottom--md">
                  <label htmlFor="email">邮箱</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input"
                    required
                  />
                </div>
                
                <div className="margin-bottom--md">
                  <label htmlFor="company">公司名称</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="input"
                  />
                </div>
                
                <div className="margin-bottom--md">
                  <label htmlFor="subject">主题</label>
                  <select id="subject" name="subject" className="input">
                    <option value="">请选择咨询类型</option>
                    <option value="embedded">嵌入式开发</option>
                    <option value="web">网站开发</option>
                    <option value="app">App开发</option>
                    <option value="training">技术培训</option>
                    <option value="other">其他</option>
                  </select>
                </div>
                
                <div className="margin-bottom--md">
                  <label htmlFor="message">详细需求</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="input"
                    placeholder="请详细描述您的需求..."
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="button button--primary button--lg">
                  发送消息
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
