#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function addProduct() {
  console.log('🚀 添加新产品到 GeekAt 官网\n');
  
  try {
    const id = await question('产品ID (英文，如: smart-sensor): ');
    const name = await question('产品名称: ');
    const category = await question('产品分类: ');
    const description = await question('产品描述: ');
    const price = await question('价格 (可选，如: ¥9,999起): ');
    const status = await question('状态 (已发布/开发中/测试中): ');
    
    const product = {
      id,
      name,
      category,
      description,
      image: `/img/products/${id}.jpg`,
      price: price || null,
      status,
      features: [],
      specifications: {},
      downloads: []
    };
    
    // 添加特性
    console.log('\n添加产品特性 (输入空行结束):');
    while (true) {
      const feature = await question('特性: ');
      if (!feature.trim()) break;
      product.features.push(feature);
    }
    
    // 添加技术规格
    console.log('\n添加技术规格 (输入空行结束):');
    while (true) {
      const specKey = await question('规格名称: ');
      if (!specKey.trim()) break;
      const specValue = await question('规格值: ');
      product.specifications[specKey] = specValue;
    }
    
    // 保存产品文件
    const productsDir = path.join(__dirname, '../products');
    const productFile = path.join(productsDir, `${id}.json`);
    
    fs.writeFileSync(productFile, JSON.stringify(product, null, 2));
    
    console.log(`\n✅ 产品 "${name}" 已成功添加到 ${productFile}`);
    console.log('\n📝 下一步:');
    console.log('1. 添加产品图片到 static/img/products/ 目录');
    console.log('2. 运行 npm run build 重新构建网站');
    console.log('3. 访问 /products 查看新产品');
    
  } catch (error) {
    console.error('❌ 添加产品失败:', error.message);
  } finally {
    rl.close();
  }
}

addProduct();
