const assert = require('assert');
const { calculateFee } = require('./index');

assert.strictEqual(calculateFee(1000), 20);
assert.strictEqual(calculateFee(250.5), 5.01);

console.log('All tests passed');