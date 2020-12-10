// 链表是一个线性结构，同时也是一个天然的递归结构，链表结构可以充分利用计算机
// 实现灵活的内存动态管理，没有数组逸雅阁的随机读取的优点

// 单项链表
class Node {
    constructor(v, next) {
        this.value = v
        this.next = next
    }
}

class LinkList {
    constructor() {
        // 链表长度
        this.size = 0
        // 头部
        this.dummyNode = new Node(null, null)
    }
    find(header, index, currentIndex) {
        if (index === currentIndex) return header

        return this.find((header.next))
    }

    addNode (v, index) {
        // 查找当前添加的元素的索引
    }

    checkIndex(index) {
        if (index < 0 || index > this.size) {
            throw Error('index error')
        }
    }
}