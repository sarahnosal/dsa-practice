class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode  = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    traverse(){
        let current = this.head
        while(current){
            console.log(current.val)
            current = current.next
        }
    }
    pop(){
        if(!this.head) return undefined
        let current = this.head
        let newTail = current
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }
    shift(){
        if(!this.head) return undefined
        let currentHead = this.head
        this.head = currentHead.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return currentHead
    }
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(i){
        if(i < 0 || i >= this.length) return null
        let counter = 0
        let current = this.head
        while(counter !== i){
            current = current.next
            counter++
        }
        return current
    }
    set(i, val){
        let foundNode = this.get(i)
        if(foundNode){
            foundNode.val = val
            return true
        }
        return false
    }
    insert(i, val){
        let newNode = new Node(val)
        if(i < 0 || i > this.length) return false
        if(i === this.length) return !!this.push(val)
        if(i === 0) return !!this.unshift(val)

        let previous = this.get(i-1)
        let temp = previous.next
        previous.next = newNode
        newNode.next = temp
        this.length++
        return true
    }
    remove(i){
        if(i < 0 || i >= this.length) return undefined
        if(i === this.length-1) return this.pop()
        if(i === 0) return this.shift()
        
        let previousNode = this.get(i-1)
        let removed = previousNode.next
        previousNode.next = removed.next
        this.length--
        return removed
    }
    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next
        let prev = null
        for(let i = 0; i < this.length; i++){
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }
    print(){
        let arr = []
        let current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
}

let list = new SinglyLinkedList()
list.push('hello')
list.push('goodbye')