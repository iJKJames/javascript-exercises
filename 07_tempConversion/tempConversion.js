const ftoc = function(degreesf) {
  toCelsius = '';
  toCelsius = ((degreesf - 32) * .555555);
  return Math.round(toCelsius * 10) / 10;
};

const ctof = function(degreesc) {
  toFahrenheit = '';
  toFahrenheit = (degreesc * 1.8 + 32);
  return Math.round(toFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
