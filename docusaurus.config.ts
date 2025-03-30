import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Geek @',
  tagline: '让智能技术回归价值本质',
  favicon: 'img/geekat-logo-brown-circle.png',

  // Set the production url of your site here
  url: 'https://geekat.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
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
          editUrl:
            'https://github.com/GeekAtTeam/geekat-website/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          routeBasePath: 'news',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/GeekAtTeam/geekat-website/tree/main/packages/create-docusaurus/templates/shared/',
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

  themeConfig: {
    // Replace with your project's social card
    image: 'img/geekat-social-card.png',
    navbar: {
      title: '极客艾特',
      logo: {
        alt: '极客艾特 GeekAt Logo',
        src: 'img/geekat-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
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
              label: '技术手册',
              to: '/docs/intro',
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
              label: 'XXX',
              to: '/docs/intro',
            },
            {
              label: 'YYY',
              to: '/news',
            },
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/geekat',
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
  } satisfies Preset.ThemeConfig,
};

export default config;
