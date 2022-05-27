const sumAll = function (a, b) {
    numbers = [];
    sum = 0;
    bigNum = '';
    i = '';
    (a > b) ? bigNum = a : bigNum = b;
    (a > b) ? i = b : i = a;
    
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        sum = 'ERROR';
        return sum;
    } else {

        for (; i <= bigNum; i++) {        
            switch (true) {
                    case a < 0 || b < 0:
                    case typeof (a) != 'number' || typeof (b) != 'number':
                        sum = 'ERROR'
                        break;
                    default:
                        numbers.push(i)
                }
            }
        for (i of numbers) {
            sum += i;
        }
        return sum;
    };
};
    // Do not edit below this line
    module.exports = sumAll;
