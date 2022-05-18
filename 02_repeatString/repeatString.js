const repeatString = function(string, num) {
    theString = '';
    if (num < 0) {
        theString = 'ERROR';
    } else {
    for (i = 0; i < num; i++) {
        theString = theString += string;
    }
    }
    return theString
};

// Do not edit below this line
module.exports = repeatString;
