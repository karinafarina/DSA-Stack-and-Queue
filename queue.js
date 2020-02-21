class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);

    if(this.first === null) {
      this.first = node;
    }
    if(this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
    //O(1)
  }
  dequeue() {
    //if the queue is empty, there is nothing to return
    if(this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if(node === this.last) {
      this.last = null;
    }
    //O(1)
  }
}

const startTrekQ = new Queue();

startTrekQ.enqueue('Kirk');
startTrekQ.enqueue('Spock');
startTrekQ.enqueue('Uhura');
startTrekQ.enqueue('Sulu');
startTrekQ.enqueue('Checkov');
startTrekQ.dequeue('Kirk');

//console.log('startTrekQ', startTrekQ)

function peek(queue) {
  if (!queue.first) return null
  console.log('first here', queue.first.value)
  return queue.first.value;
}
//peek(startTrekQ)

function isEmpty(queue) {
  if (!queue.first && !queue.last) {
    return "It's empty"
  }
  return "Not empty"
}
//console.log(isEmpty(startTrekQ))

function display(queue) {
  let currNode = queue.first;
  if (!currNode) return 'this is empty'
  while (currNode.next !== null) {
    console.log(currNode.value)
    currNode = currNode.next
  }
  console.log(currNode.value)
}


display(startTrekQ)

module.export = Queue;