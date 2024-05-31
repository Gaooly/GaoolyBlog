import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress",
  description: "高灵易 个人主页 mmo VitePress gaolingyi g01",
  themeConfig: {
    logo: 'https://s1.ax1x.com/2022/06/13/XRUTBD.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
      { text: 'About Us', link: '/docs/about/me' },
    ],

    sidebar: [
      {
        text: 'About Us',
        items: [
          {text: 'Me', link: '/docs/about/me'},
        ]
      },
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Gaooly' }
    ]
  }
})
