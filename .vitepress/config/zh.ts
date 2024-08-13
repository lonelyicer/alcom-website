import { defineConfig } from 'vitepress'

const langName = '/zh';

export const zh = defineConfig({
    lang: 'zh-CN',
    description: "VRChat 创作者伴侣的快速开源替代方案。",
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '下载', link: '/download' },
            { text: '文档', link: '/docs' }
          ],
        
          sidebar: [
            {
              text: 'Examples',
              items: [
                { text: '下载', link: '/download' },
                { text: '文档', link: '/docs' }
              ]
            }
          ],
        }
    }
)