const Queue = require('./queue');


//Pair man with woman
//If men arive in a row they are spares, pair in order they came
//If men arrive in a row they are spares, pair in order they came
//queue of spares, pair them as appropriate

//BAD OUTPUT, WHY?
class dancePartners {
  constructor() {
    this.maleQ = new Queue();
    this.femaleQ = new Queue();
  }

  queueDancer(string) {
    const gender = string[0];
    const name = string.split(' ')[1];

    if (gender === 'F') this.femaleQ.enqueue(name);
    if (gender === 'M') this.maleQ.enqueue(name);

    if (this.femaleQ.first && this.maleQ.first) {
      const fDancer = this.femaleQ.dequeue();
      const mDancer = this.maleQ.dequeue();
      console.log(`Female dancer is ${fDancer}, and the male dancer is ${mDancer}`);
    }
    if (this.femaleQ.first) {
      //count and display waiting female dancePartners
      let count = 1;
      let currNode = this.femaleQ.first;

      while (currNode.next !== null) {
        count++;
        currNode = currNode.next;
      }
      console.log(`There are ${count} female dnacers waiting to dance.`);
    }
    if (this.maleQ.first) {
      let count = 1;
      let currNode = this.maleQ.first;

      while (currNode.next !== null) {
        count++;
        currNode = currNode.next;
      }
      console.log(`There are ${count} male dancers waiting to dance.`);
    }
  }
}


const Dance = new dancePartners();

Dance.queueDancer('F Jane');
Dance.queueDancer('M Frank');
Dance.queueDancer('M John');
Dance.queueDancer('M Sherlock');
Dance.queueDancer('F Madonna');
Dance.queueDancer('M David');
Dance.queueDancer('M Christopher');
Dance.queueDancer('F Beyonce');