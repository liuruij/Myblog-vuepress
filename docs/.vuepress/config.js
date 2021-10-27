module.exports = {
    lang: 'zh-CN',
    title: 'MyBlog',
    description: '这是我的第一个VuePress站点',
    head: [
        ['link', { rel: 'icon', href: '/images/logo.png' }],
    ],
    base: '/',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        sidebar: 'auto',
        sidebarDepth: 2
    }
}