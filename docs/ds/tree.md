# 树

## 二叉树

度、层、完全二叉树、满二叉树...

满二叉树是完全二叉树的特例，叶子节点也挂满的完全二叉树就是满二叉树。

完全二叉树是指除了最深的一层外，其余层都挂满且最深的一层子节点从左到右紧凑排列


```java
// 只有孩子
class Node {
 int val;
 Node left;
 Node right;
}

// 双亲表示
class Node {
 int val;
 Node left;
 Node right;
 Node parent;
}

```

## 遍历

NLR 前序
LNR 中序
LRN 后序

