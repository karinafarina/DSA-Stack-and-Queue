const Stack = require('./stack');
const { peek, isEmpty, display, is_palindrome, parenthesisCheck, sortSatck } = require('./stackFns');

function main() {
  const starTrek = new Stack();

  console.log('im here');
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  display(starTreck)
}