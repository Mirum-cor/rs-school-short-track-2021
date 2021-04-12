const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }
    return new ListNode(cur);
  }, null);
}

function convertListToArray(list) {
  let helper = list;
  const array = [];
  while (helper && helper.value) {
    array.push(helper.value);
    helper = helper.next;
  }
  return array;
}
class Queue {
  constructor() {
    this.elements = {};
  }

  get size() {
    const elementsArray = convertListToArray(this.elements);
    return elementsArray.length;
  }

  enqueue(element) {
    if (this.size) {
      const elementsArray = convertListToArray(this.elements);
      elementsArray.push(element);
      this.elements = convertArrayToList(elementsArray);
    } else {
      this.elements = new ListNode(element);
    }
  }

  dequeue() {
    const elementsArray = convertListToArray(this.elements);
    const topElement = elementsArray.shift();
    this.elements = convertArrayToList(elementsArray);
    return topElement;
  }
}

module.exports = Queue;
