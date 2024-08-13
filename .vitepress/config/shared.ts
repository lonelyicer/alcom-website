import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const shared = defineConfig({
  title: "ALCOM",
  head: [['link', { rel: 'icon', href: '/images/logo.svg' }]],
  themeConfig: {
    logo: '/images/logo.svg',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    }
    
  }
})
