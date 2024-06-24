import { defineConfig } from 'vitepress';

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
    title: 'VitePress',
    description: '高灵易 个人主页 mmo VitePress gaolingyi g01',
    appearance:false,
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' },],
        ['script', { src: '/baidu.js' },]
    ],
    themeConfig: {
        logo: 'https://s1.ax1x.com/2022/06/13/XRUTBD.jpg',
        nav: [
            { text: '主页', link: '/' },
            { text: '指令速查', link: '/docs/quick-reference/git' },
            { text: '关于我', link: '/docs/about/me' },
            // { text: 'api', link: '/api-examples' },
            // { text: 'markdown', link: '/markdown-examples' },
        ],
        sidebar: {
            '/docs/quick-reference/': { base: '/', items: [
                { text: 'Git', link: 'docs/quick-reference/git' },
                // { text: '指令速查', link: 'docs/quick-reference/all' }
            ] },
            '/docs/about/': { base: '/', items: [{ text: '关于我', link: 'docs/about/me' }] },
        },
        // type SocialLinkIcon =| 'discord'| 'facebook'| 'github'| 'instagram'| 'linkedin'| 'mastodon'| 'npm'| 'slack'| 'twitter'| 'x'| 'youtube'| { svg: string }
        socialLinks: [{ icon: 'github', link: 'https://github.com/Gaooly' }],
    },
});
