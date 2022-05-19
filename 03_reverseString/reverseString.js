const reverseString = function(string) {
toBackwards = '';
toBackwards = string.split('');

toBackwards.reverse();

return toBackwards.join('');
};

// Do not edit below this line
module.exports = reverseString;
