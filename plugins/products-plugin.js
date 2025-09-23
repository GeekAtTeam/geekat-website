const {generateFiles} = require('@docusaurus/utils');
const path = require('path');
const fs = require('fs');

module.exports = function () {
  return {
    name: 'products-plugin',
    async loadContent() {
      // 从 products 目录读取产品数据
      const productsDir = path.resolve(__dirname, '../products');
      const products = [];
      
      if (fs.existsSync(productsDir)) {
        const files = fs.readdirSync(productsDir);
        for (const file of files) {
          // 只处理 .json 文件，跳过 README.md 等其他文件
          if (file.endsWith('.json') && !file.includes('README')) {
            try {
              const productData = JSON.parse(
                fs.readFileSync(path.join(productsDir, file), 'utf8')
              );
              products.push({
                ...productData,
                id: path.basename(file, '.json')
              });
            } catch (error) {
              console.warn(`Failed to parse ${file}:`, error.message);
            }
          }
        }
      }
      
      return products;
    },
    
    async contentLoaded({content, actions}) {
      const {createData, addRoute} = actions;
      
      // 创建产品列表页面
      const productsListPath = await createData(
        'products-list.json',
        JSON.stringify(content, null, 2)
      );
      
      addRoute({
        path: '/products',
        component: '@site/src/pages/ProductsList',
        modules: {
          products: productsListPath,
        },
        exact: true,
      });
      
      // 为每个产品创建详情页面
      for (const product of content) {
        const productDataPath = await createData(
          `product-${product.id}.json`,
          JSON.stringify(product, null, 2)
        );
        
        addRoute({
          path: `/products/${product.id}`,
          component: '@site/src/pages/ProductDetail',
          modules: {
            product: productDataPath,
          },
          exact: true,
        });
      }
    },
  };
};
