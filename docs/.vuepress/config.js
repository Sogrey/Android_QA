module.exports = {
  title: 'Android技术面试题',
  description: 'Android QA',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    //['link', { rel: 'icon', href: '/images/photo.jpg' }],
    //['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    //['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/Android_QA/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
	  {text: '征题', link: 'https://github.com/Sogrey/Android_QA/issues/131' },	
	  {text: '公众号文章', link: '/advertorial/' },
      {text: '前端技术面试题', link: 'https://sogrey.github.io/Web-QA/' },
      {text: 'Github', link: 'https://github.com/Sogrey/Android_QA'}      
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2  // 侧边栏显示2级
  }
};