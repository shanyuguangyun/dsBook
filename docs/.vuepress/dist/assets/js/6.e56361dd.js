(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{273:function(s,t,a){s.exports=a.p+"assets/img/tree.3cbbc2f9.png"},274:function(s,t,a){s.exports=a.p+"assets/img/tree2.05d9178b.png"},283:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#树"}},[s._v("#")]),s._v(" 树")]),s._v(" "),t("h2",{attrs:{id:"二叉树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二叉树"}},[s._v("#")]),s._v(" 二叉树")]),s._v(" "),t("p",[s._v("比起线性数据结构，二叉树的好处就是数据查找时能将O(N)的时间复杂度降为O(logN)")]),s._v(" "),t("p",[s._v("度、层、完全二叉树、满二叉树...")]),s._v(" "),t("p",[s._v("满二叉树是完全二叉树的特例，叶子节点也挂满的完全二叉树就是满二叉树。")]),s._v(" "),t("p",[s._v("完全二叉树是指除了最深的一层外，其余层都挂满且最深的一层子节点从左到右紧凑排列")]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 只有孩子")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" left"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 双亲表示")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" left"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Node")]),s._v(" parent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),t("h2",{attrs:{id:"常见种类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见种类"}},[s._v("#")]),s._v(" 常见种类")]),s._v(" "),t("ul",[t("li",[s._v("满二叉树\n非叶子节点的度（节点拥有的子树数目）都为2且叶子节点是挂满的")]),s._v(" "),t("li",[s._v("完全二叉树\n除叶子节点外，其余都和满二叉树一样，但叶子节点从左到右紧凑排列")]),s._v(" "),t("li",[s._v("二叉搜索树\n手写最常见的，左节点值小于双亲节点值且小于右子节点值，所以特殊情况下会变成链表")]),s._v(" "),t("li",[s._v("哈夫曼树（最优二叉树）\n加权路径长度最小的情况，仅叶子节点有权重，且从根节点到每个叶子节点的路径长度*叶子节点权重，然后求和，这个和最小的树。\n"),t("img",{attrs:{src:a(273),alt:"Huffman"}})]),s._v(" "),t("li",[s._v("平衡二叉树\n由于二叉搜索树在特殊情况下，会转变为链表，所以需要平衡他的左右子树高度差\n"),t("ul",[t("li",[s._v("AVL树\n左右子树的高度差绝对不大于1，如果大于1，就得进行节点旋转。所以删除时可能非常耗时。")]),s._v(" "),t("li",[s._v("红黑树\n控制了旋转次数，降低了平衡的要求。RB-tree属于一种折中选择。特性如下：\n"),t("ul",[t("li",[s._v("每个节点都被定义为红色或者黑色")]),s._v(" "),t("li",[s._v("根节点是黑色")]),s._v(" "),t("li",[s._v("每个叶子节点是黑色")]),s._v(" "),t("li",[s._v("如果一个节点是红色的，那他子节点必须是黑色。红色节点父节点和子节点都不能是红色，所以路径上不会出现连续的红色节点")]),s._v(" "),t("li",[s._v("任意一节点到每个叶子节点路径包含的黑节点数量都相同。其实从这些特性里就能看出来，无论是AVL还是红黑树，手写实现起来其实都还是蛮复杂的。\n"),t("img",{attrs:{src:a(274),alt:"RB-tree"}})])])])])])]),s._v(" "),t("h2",{attrs:{id:"遍历"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遍历"}},[s._v("#")]),s._v(" 遍历")]),s._v(" "),t("p",[s._v("NLR 前序\nLNR 中序\nLRN 后序")])])}),[],!1,null,null,null);t.default=e.exports}}]);