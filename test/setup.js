// Export modules to global scope as necessary (only for testing)
if (typeof process === 'object' && Object.prototype.toString.call(process) === '[object process]') {
  // We are in node. Require modules.
  var path = require('path');
  expect = require('chai').expect;
  assert = require('chai').assert;
  should = require('chai').should();

} else {
  // We are in the browser. Set up variables like above using served js files.
  expect = chai.expect;
  assert = chai.assert;
  should = chai.should();
  isBrowser = true;
}
