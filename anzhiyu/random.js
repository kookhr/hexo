var posts=["2024/08/14/CF 设置缓存，来加速你的博客网站/","2024/08/04/GitHub + Gridea + Cloudflare 搭建免费个人网站 🚀/","2025/02/18/[转]基于DeepSeek赋能运维场景探讨/","2024/08/07/serv00注册/","2024/08/12/在 serv00 服务器上安装 Nezha Dashboard/","2024/09/26/如何在 Mac 上批量打印多个 Word 文档/","2025/04/10/如何通过 Hexo 和 GitHub Actions 实现自动发布博客 🚀/","2024/08/11/通过 GitHub 将 Hexo 博客发布到 Netlify/","2024/08/07/通过 VS Code 管理项目并推送到 GitHub 🚀/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };