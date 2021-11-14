//i will learn to use jest to test the rest of my best functions
const assert = require('assert');
import mocha from 'mocha'
import app as app from '../app.js'

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('initialization', () => {
  it('should return "default project" on first use', function() {
    assert.equal(initialization(), 'default project')
  })
})