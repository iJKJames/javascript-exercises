const leapYears = function(year) {
    if (year % 4 == 0 && year % 100 != 0) {
        return true;
    } else {
        if(year % 400 == 0) {
            return true;
        }
        return false;
    }
};


// If the year is divisible by 4, return true.
// But if its divisible by 100, its not true.
// But if its divisible by 100 AND 400, its true. 

// Do not edit below this line
module.exports = leapYears;
