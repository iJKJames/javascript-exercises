const removeFromArray = function(array, ...args) {
    array = [];
    array = array.splice(args);
    return array;    
};

// Do not edit below this line
module.exports = removeFromArray;
