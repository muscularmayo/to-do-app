//i will learn to use jest to test the rest of my best functions
const assert = require('assert');
const app = require('../src/app.js')


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('storage', () => {
  it('should return "empty object" on first use', function() {
    assert.equal(storage, '{}')
  })
})