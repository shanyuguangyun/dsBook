module.exports = {
  base: "/dsBook/",
  title: "山雨光云小集",
  description: "山雨光云小集",
  
  themeConfig: {
    sidebarDepth: 3,
    nav: [
      { text: "主页", link: "https://shanyuguangyun.github.io/webBook/front/vue" },
      { text: "基础知识", link: "https://shanyuguangyun.github.io/gitBook" },
      { text: "框架源码", link: "https://shanyuguangyun.github.io/sourceCodeBook" },
      { text: "生活集", link: "https://shanyuguangyun.github.io/happyLife" },
      { text: "GitHub", link: "https://github.com/shanyuguangyun" },
    ],
    sidebar: [
      {
        title: "常用数据结构", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          "/ds/xu", 
          "/ds/linkList",
          "/ds/tree"
        ],
      },
      {
        title: "常用算法",
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          "/ag/slidingWindow", 
        ],
      }
    ],
  },
};
