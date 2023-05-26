# 链表

## 常用类型

1.单向链表

如HashMap里的Node就是单向链表

2.双向链表

LinkedList里的Node就是双向链表


## 实现

### 初始化
一个记录头结点单向的链表
```java
public class TListNode<T> {
    
    Node<T> head;
    
    public static class Node<T> {
        T data;
        Node<T> next;

        public Node(T data) {
            this.data = data;
        }
    }
}
```

### 遍历
```java
public void show() {
    Node<T> t = head;
    while (t != null) {
        T data = t.data;
        System.out.println("t.data is : " + data.toString());
        t = t.next;
    }
}
```

### 获取长度
```java
public int size() {
    int count = 0;
    Node<T> t = head;
    while (t != null) {
        count++;
        t = t.next;
    }
    return count;
}
```

### 头节点插入
```java
public void addFirst(T data) {
    Node<T> node = new Node<>(data);
    node.next = head;
    head = node;
}
```

### 尾节点插入
```java
public void addLast(T data) {
    Node<T> node = new Node<>(data);

    Node<T> cur = head;
    while (cur.next != null) {
        cur = cur.next;
    }

    cur.next = node;
}
```
这可以看出来，头结点插入要比尾节点插入更快，但是因为HashMap有个操作是节点数大于等于TREEIFY_THRESHOLD-1时。会转成树，
所以说其实他的插入最多也遍历8次，长度可控。所以用了尾插法。


### index插入
```java
private Node<T> searchPrev(int i) {
    int count = 0;
    Node<T> cur = head;
    while (count < i - 1) {
        cur = cur.next;
        count ++;
    }
    return cur;
}

public void addIndex(int i, T data) {
    if (i == 0) {
        addFirst(data);
    }
    if (i == size()) {
        addLast(data);
    }
    Node<T> preNode = searchPrev(i);
    Node<T> node = new Node<>(data);
    node.next = preNode.next;
    preNode.next = node;
}
```


### 移除
```java
public void remove(int i) {
    if (i == 0) {
        head = head.next;
        return;
    }
    Node<T> preNode = searchPrev(i);
    Node<T> del = preNode.next;
    preNode.next = del.next;
}
```

### 翻转

单链表的翻转方法有多种，如递归、循环、头插法

```java
public Node<Integer> headInsertReverse(Node<Integer> node) {
    Node<Integer> head = new Node<>(null);
    while (node != null) {
        Node<Integer> next = node.next;
        node.next = head;
        head = node;
        node = next;
    }
    return head;
}
public Node<Integer> recursiveReverse(Node<Integer> node) {
    if (node == null || node.next == null) {
        return node;
    }
    Node<Integer> next = node.next;
    Node<Integer> reverseNode = recursiveReverse(node.next);
    next.next = node;
    node.next = null;
    return reverseNode;
}    

```
