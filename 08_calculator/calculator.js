const add = function (...args) {
  return args.reduce((previous, current) => {
    return previous + current;
  });
};

const subtract = function (...args) {
  return args.reduce((previous, current) => {
    return previous - current;
  });
};

const sum = function (array) {
  let initialValue = 0;
  let sumWithDefault = array.reduce((previousValue, currentValue) =>
    previousValue + currentValue, initialValue)
  return sumWithDefault;
};

const multiply = function (array) {
  return array.reduce((previous, current) => {
    return previous * current;
  });
};

const power = function (num, pow) {
  arr = Array(pow).fill(num);
  return arr.reduce((previousValue, currentValue) =>
    previousValue * currentValue)
};

const factorial = function (num) {
  result = num;
  if (num === 0 || num === 1) {
    return 1;
  } else {
    while (num > 1) {
      num--;
      result = result * num;
    }
  }
  return result;
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
