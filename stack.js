class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    //If the stack is empty, then the node will be the top of stack
    if(this.top == null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    //If the stack already has dsomething, then create a new node, add data to the new node, and have the pointer point to the top
    const node = new _Node(data, this.top);
    this.top = node;
  }
  //Since we are only adding to the top of the stack, the time complexity of inserting on a stack is constan, O(1)
  pop() {
    //In order to remove the top of the stack, you have to point the pointer to the next item and that next item becomes the top of the stack
    const node = this.top;
    this.top = node.next;
    return node.data;
    //Removing only from top of stack, time complexity of removing is constant, O(1) 
  }
}

const starTrek = new Stack()

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

console.log(startTrek)

function sortStack(inputStack, tempStack = null, tempVar = null) {
  if (tempStack === null) {
    tempStack = new Stack();
  }
  if (inputStack.top === null) {
    inputStack = tempStack;
    return inpuStack;
  }
  tempVar = inputStack.pop();
  if (tempStack.top === null || tempVAr < tempStack.top.data) {
    tempStack.push(tempVar);
    return sortStack(inputStack, tempStack);
  } else {
    while (tempStack.top !== null && tempVar > tempStack.top.data) {
      inputStack.push(tempStack.pop());
    }
    tempStack.push(tempVar);
    return sortStack(inputStack, tempStack);
  }
}