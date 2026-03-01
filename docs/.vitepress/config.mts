import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Linux Starter",
  description: "linux从小白到大神系列指导",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '实例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '实例',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'codeberg', link: 'https://codeberg.org/xuhongdi-2026' }
    ]
  }
})
