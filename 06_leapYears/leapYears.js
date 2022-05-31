const leapYears = function(year) {
    year = '';

    if (year % 4 == 0 && year % 400 == 0) {
        return false;
    }
};


// If the leapyear is divisible by 4, return true.
// But if its divisible by 100, its not true.
// But if its divisible by 100 AND 400, its true. 

// Do not edit below this line
module.exports = leapYears;
