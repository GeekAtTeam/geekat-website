# 产品管理系统

这是一个基于 JSON 的产品管理系统，可以轻松管理上百种产品。

## 🚀 快速开始

### 添加新产品

```bash
npm run add-product
```

这个命令会引导你填写产品信息，自动生成产品 JSON 文件。

### 查看产品数量

```bash
npm run list-products
```

## 📁 文件结构

```
products/
├── README.md                    # 本说明文件
├── smart-voice-chatbot.json     # 智能语音聊天机器人
├── auto-weighing-system.json    # 无人值守自动称重系统
├── air-quality-monitor.json     # 空气质量监测系统
└── ...                         # 更多产品文件
```

## 📝 产品数据格式

每个产品文件都是 JSON 格式，包含以下字段：

```json
{
  "id": "产品唯一标识",
  "name": "产品名称",
  "category": "产品分类",
  "description": "产品描述",
  "image": "产品图片路径",
  "price": "价格信息",
  "status": "产品状态",
  "features": ["特性1", "特性2"],
  "specifications": {
    "规格名": "规格值"
  },
  "downloads": [
    {
      "name": "文件名",
      "url": "下载链接"
    }
  ]
}
```

## 🎨 页面访问

- **产品列表页**: `/products`
- **产品详情页**: `/products/{产品ID}`

## 📸 产品图片

将产品图片放在 `static/img/products/` 目录下，文件名与产品ID一致。

例如：
- 产品ID: `smart-voice-chatbot`
- 图片路径: `static/img/products/smart-voice-chatbot.jpg`

## 🔧 自定义样式

产品页面样式可以在以下文件中自定义：
- `src/pages/ProductsList.module.css` - 产品列表样式
- `src/pages/ProductDetail.module.css` - 产品详情样式

## 📊 批量导入

如果需要批量导入产品，可以：

1. 准备 CSV 或 Excel 文件
2. 编写转换脚本
3. 生成对应的 JSON 文件
4. 放入 `products/` 目录

## 🚀 部署

添加新产品后，运行以下命令重新构建网站：

```bash
npm run build
```

## 💡 优势

- ✅ **易于维护**: 只需编辑 JSON 文件
- ✅ **自动生成**: 页面自动生成，无需手动创建
- ✅ **SEO友好**: 每个产品都有独立的 URL
- ✅ **响应式设计**: 支持各种设备
- ✅ **搜索功能**: 支持产品搜索
- ✅ **分类管理**: 支持产品分类筛选
