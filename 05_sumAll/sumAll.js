const sumAll = function(int1, int2) {
    numbers = [];
    sum = 0;
    for (i = int1; i <= int2; i++) {
        numbers.push(i);
    }
    for (i of numbers) {
        sum += i;
    }
    return sum;


    //initialize int1

    //initialize midInts

    //loop through midInts
    //add i to sum

    //add int2

    //return sum
};

// Do not edit below this line
module.exports = sumAll;
