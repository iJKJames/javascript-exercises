const removeFromArray = function(array, ...args) {
    for (i = 0; i < array.length; i++) {
        if (args > -1) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
