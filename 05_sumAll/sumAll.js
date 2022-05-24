const sumAll = function(a, b) {
    numbers = [];
    sum = 0;
    bigNum = '';
    i = '';

    (a > b) ? bigNum = a : bigNum = b;
    (a > b) ? i = b : i = a;

    
    for (; i <= bigNum; i++) {
        if (a < 0 || b < 0) {
            sum = 'ERROR';
            break;
        }
        numbers.push(i);
    }
    for (i of numbers) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
