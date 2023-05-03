module.exports = {
  base: "/dsBook",
  title: "数据结构",
  description: "数据结构",
  
  themeConfig: {
    sidebarDepth: 3,
    nav: [
      { text: "GitHub", link: "https://github.com/shanyuguangyun" },
    ],
    sidebar: [
      {
        title: "数据结构", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          "/ds/xu", 
          "/ds/linkList", 
        ],
      },
    ],
  },
};
