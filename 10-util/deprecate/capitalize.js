const util = require('util');

function capitalizeAndJoin(inputArray = []) {
    return inputArray
      .map(s => s.toString().toUpperCase())
      .join(',');
}
  
//module.exports = capitalizeAndJoin;

module.exports = util.deprecate(
  capitalizeAndJoin, 
  'This function has been deprecated. Use something else instead.'
);