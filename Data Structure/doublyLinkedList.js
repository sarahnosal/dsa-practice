class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){

    }
    pop(){
        if(!this.head) return undefined
        var poppedNode = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--
        return poppedNode
    }
    shift(){
        if(!this.head) return undefined
        var oldHead = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }
    unshift(val){
        var newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return newNode
    }
    get(i){
        if(i < 0 || i >= this.length) return null
        if(i <= this.length/2){
            var count = 0
            var current = this.head
            while(count !== i){
                current = current.next
                count++
            }
        } else {
            var count = this.length - 1
            var current = this.tail
            while(count !== i){
                current = current.prev
                count--
            }
        }
        return current
    }
    set(i, val){
        var node = this.get(i)
        if(node !== null){
            node.val = val
            return true
        }
        return false
    }
    insert(i, val){
        if(i < 0 || index > this.length) return false
        if(i === 0) return this.unshift(val)
        if(i === this.length) return this.push(val)
        var newNode = new Node(val)
        var beforeNode = this.get(i-1)
        var afterNode = beforeNode.next
        beforeNode.next = newNode
        newNode.prev = beforeNode
        newNode.next = afterNode
        afterNode.prev = newNode
        this.length++
        return true
    }
    remove(i){
        if(i < 0 || i >= this.length) return undefined
        if(i === 0) return this.shift()
        if(i === this.length - 1) return this.pop()
        var foundNode = this.get(i)
        foundNode.prev.next = foundNode.next
        foundNode.next.prev = foundNode.prev
        foundNode.next = null
        foundNode.prev = null
        this.length--
        return foundNode
    }
}