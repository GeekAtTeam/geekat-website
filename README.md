# 极客艾特 GeekAt

我们相信，真正的技术应该像空气般自然融入生活。历经10年嵌入式领域深耕，极客艾特团队用代码编织现实与数字世界的桥梁，让技术创新成为企业进化的 DNA。

## 关于我们

**极客艾特（GeekAt）** 全称是"广州极客艾特计算机系统有限公司"，成立于2025年2月7日，目前是一家一人公司，主要业务包括：

- **智能硬件开发**：嵌入式系统定制开发、边缘计算设备研发、传感器融合解决方案
- **数字化产品构建**：企业级中间件开发、跨平台App/小程序开发、微服务架构设计与实施
- **技术赋能计划**：嵌入式开发实战培训、物联网架构师认证、企业技术转型咨询

### 核心优势

- **硬核技术基底**：累计完成 120+ 嵌入式项目，核心成员拥有 ARM/RTOS 领域认证
- **全栈开发能力**：从芯片级开发到云端部署，提供 IoT 领域端到端解决方案
- **敏捷交付体系**：独创"蜂巢开发模型"，确保项目交付准时率超 98%
- **行业理解深度**：服务覆盖智能家居、工业物联网、智能驾驶、智慧农业、智慧医疗、智慧城市、能源管理、STEM 创客教育等八大垂直领域

### 技术理念

我们执着于"毫米级优化" —— 从降低 1ms 的响应延时，到精简 1KB 的内存占用。这种极致追求让我们在智慧停车场项目中实现 99.99% 的车牌识别准确率，在工业监测场景达成 20000+ 小时无故障运行。

### 客户承诺

- 每行代码都经三重质量验证
- 每个方案必含可演进技术架构
- 每次交付必有详细技术文档传承

### 未来愿景

正在构建开放的 IoT 开发者生态，与行业伙伴共同探索人机协同的下一站。期待与您携手，用硬核技术点燃商业创新的星辰大海。

---

## 🚀 项目构建说明

本网站使用 [Docusaurus](https://docusaurus.io/) 构建，这是一个现代化的静态网站生成器。

### 📦 安装依赖

```bash
npm install
# 或者
yarn install
```

### 🛠️ 本地开发

```bash
npm start
# 或者
yarn start
```

此命令将启动本地开发服务器并打开浏览器窗口。大多数更改都会实时反映，无需重启服务器。

### 🏗️ 构建项目

```bash
npm run build
# 或者
yarn build
```

此命令将静态内容生成到 `build` 目录中，可以使用任何静态内容托管服务进行部署。

### 🚀 部署

使用 SSH：

```bash
USE_SSH=true npm run deploy
# 或者
USE_SSH=true yarn deploy
```

不使用 SSH：

```bash
GIT_USER=<Your GitHub username> npm run deploy
# 或者
GIT_USER=<Your GitHub username> yarn deploy
```

如果您使用 GitHub Pages 进行托管，此命令是构建网站并推送到 `gh-pages` 分支的便捷方式。

---

## 🛍️ 产品管理系统

本网站集成了强大的产品管理系统，可以轻松管理上百种产品。

### 📁 产品数据结构

产品数据存储在 `products/` 目录下的 JSON 文件中：

```
products/
├── smart-voice-chatbot.json     # 智能语音聊天机器人
├── auto-weighing-system.json    # 无人值守自动称重系统
├── air-quality-monitor.json     # 空气质量监测系统
└── ...                         # 更多产品文件
```

### 📝 产品数据格式

每个产品 JSON 文件包含以下字段：

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

### 🔄 更新产品页面

当修改了产品的 JSON 文件后，需要重新构建网站来更新页面：

```bash
# 停止开发服务器（如果在运行）
Ctrl + C

# 重新构建项目
npm run build

# 重新启动开发服务器查看效果
npm start
```

### 🆕 添加新产品

#### 方法一：使用交互式脚本（推荐）

```bash
npm run add-product
```

这个命令会引导你填写产品信息，自动生成产品 JSON 文件。

#### 方法二：手动创建

1. 在 `products/` 目录创建新的 JSON 文件
2. 按照上述数据格式填写产品信息
3. 将产品图片放在 `static/img/products/` 目录
4. 重新构建网站

### 📊 产品管理命令

```bash
# 添加新产品
npm run add-product

# 查看产品数量
npm run list-products

# 重新构建（更新产品页面）
npm run build
```

### 🌐 页面访问

- **产品列表页**: `http://localhost:3000/products`
- **产品详情页**: `http://localhost:3000/products/{产品ID}`

### 🎨 产品页面特性

- ✅ **响应式设计**: 支持各种设备访问
- ✅ **极客风格**: 符合网站整体设计风格
- ✅ **SEO 优化**: 每个产品都有独立的 URL 和元数据
- ✅ **自动生成**: 无需手动创建页面文件
- ✅ **分类管理**: 支持按产品分类筛选
- ✅ **搜索功能**: 支持产品名称和描述搜索

### 📸 产品图片

将产品图片放在 `static/img/products/` 目录下，文件名与产品 ID 一致：

```
static/img/products/
├── smart-voice-chatbot.jpg
├── auto-weighing-system.jpg
├── air-quality-monitor.jpg
└── ...
```

### 🔧 自定义样式

产品页面样式可以在以下文件中自定义：

- `src/pages/ProductsList.module.css` - 产品列表样式
- `src/pages/ProductDetail.module.css` - 产品详情样式

### 📋 产品管理最佳实践

1. **命名规范**: 产品 ID 使用英文，采用 kebab-case 格式
2. **图片优化**: 建议图片尺寸为 400x300px，格式为 JPG 或 PNG
3. **描述完整**: 产品描述应包含主要功能和适用场景
4. **特性清晰**: 产品特性使用简洁明了的语言
5. **规格准确**: 技术规格应准确反映产品参数

---

## 📚 MDX 文档

- [Docusaurus Markdown 功能](https://docusaurus.io/docs/markdown-features)
- [MDX](https://mdxjs.com/)
 