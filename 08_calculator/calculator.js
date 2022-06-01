const add = function(...args) {
  return args.reduce((previous, current) => {
    return previous + current;
  });
};

const subtract = function(...args) {
	return args.reduce((previous, current) => {
    return previous - current;
  });
};

const sum = function(array) {
  let initialValue = 0;
  let sumWithDefault = array.reduce((previousValue, currentValue) =>
    previousValue + currentValue, initialValue)
  return sumWithDefault;
};

const multiply = function(array) {
  return array.reduce((previous, current) => {
    return previous * current;
});
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
