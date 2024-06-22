import { defineConfig } from 'vitepress';

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
    title: 'VitePress',
    description: '高灵易 个人主页 mmo VitePress gaolingyi g01',
    appearance:false,
    head: [['link', { rel: 'icon', href: '/docs/public/favicon.ico' }]],
    themeConfig: {
        logo: 'https://s1.ax1x.com/2022/06/13/XRUTBD.jpg',
        nav: [
            { text: '主页', link: '/' },
            { text: '指令速查', link: '/docs/quick-reference/git' },
            { text: '关于我', link: '/docs/about/me' },
        ],
        sidebar: {
            '/docs/quick-reference/': { base: '/', items: [
                { text: 'Git', link: 'docs/quick-reference/git' },
                // { text: '指令速查', link: 'docs/quick-reference/all' }
            ] },
            '/docs/about/': { base: '/', items: [{ text: '关于我', link: 'docs/about/me' }] },
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/Gaooly' }],
    },
});
