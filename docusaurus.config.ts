import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '极客艾特 Geek@',
  tagline: '让智能技术回归价值本质',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://geekat.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GeekAtTeam', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/GeekAtTeam/geekat-website/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogTitle: 'News',
          routeBasePath: 'news',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/GeekAtTeam/geekat-website/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    // 自定义产品插件
    require.resolve('./plugins/products-plugin.js'),
  ],

  scripts: [
    {src: 'https://hm.baidu.com/hm.js?50f5b28c22dcd8c42706077e9d2ea7c0', async: true},
  ],

  themeConfig: {
    metadata: [
      { name: 'keywords', content: '极客艾特,GeekAt,Geek@,嵌入式,物联网,人工智能,智慧城市,工业自动化,企业解决方案,行业软件,编程培训,创客教育' },
      {name: 'description', content: '极客艾特（GeekAt）全称是“广州极客艾特计算机系统有限公司”，成立于2025年2月7日，目前是一家一人公司，主要业务包括智能硬件开发（嵌入式系统）、数字化产品构建（中间件、网站、App、小程序、解决方案），以及技术培训和 STEM 编程教育。'},
      {name: 'author', content: '广州极客艾特计算机系统有限公司'}
    ],
    // Replace with your project's social card
    image: 'img/geekat-social-card.png',
    navbar: {
      title: '极客艾特',
      logo: {
        alt: '极客艾特 GeekAt Logo',
        src: 'img/geekat-logo.png',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: '产品方案',
        // },
        {to: '/products', label: '产品方案', position: 'left'},
        {to: '/news', label: '新闻资讯', position: 'left'},
        // {
        //   href: 'https://github.com/GeekAtTeam',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '推荐阅读',
          items: [
            {
              label: '产品中心',
              to: '/products',
            },
            {
              label: '新闻资讯',
              to: '/news',
            },
          ],
        },
        {
          title: '产品方案',
          items: [
            {
              label: '智能语音聊天机器人',
              to: '/',
            },
            {
              label: '无人值守自动称重系统',
              to: '/',
            },
            {
              label: '空气质量监测系统',
              to: '/',
            },
            {
              label: '花园自动浇灌系统',
              to: '/',
            },
            {
              label: '智能厨余堆肥机',
              to: '/',
            },
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/106403521',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/geekat',
            },
            {
              label: 'X',
              href: 'https://x.com/geekat',
            },
          ],
        },
        {
          title: '关于我们',
          items: [
            {
              label: '企业介绍',
              to: '/about',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/GeekAtTeam',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 广州极客艾特计算机系统有限公司`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark', // 默认主题设为深色
      disableSwitch: false, // 是否隐藏切换按钮（保持显示）
      respectPrefersColorScheme: true, // 不跟随系统主题
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
