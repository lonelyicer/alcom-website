import { defineConfig } from 'vitepress'

const langName = '/en';

export const en = defineConfig({
    lang: 'en-US',
    description: "Fast open-source alternative of VRChat Creator Companion.",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Download', link: '/download' },
            { text: 'Docs', link: '/docs' }
          ],
        
          sidebar: [
            {
              text: 'Examples',
              items: [
                { text: 'Download', link: '/download' },
                { text: 'Docs', link: '/docs' }
              ]
            }
          ],
        }
    }
)