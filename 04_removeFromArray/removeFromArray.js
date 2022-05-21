const removeFromArray = function(/*array*/ ...args) {
  /*  for (i = 0; i < array.length; i++) {
        if (args > -1) {
            array.splice(i, 1);
            i--;
        }
    }
    return array; */

    array = args[0];    //1
    newArray = [];      //2
    array.forEach(element => {      //3
        if (!args.includes(element)) {      //4
            newArray.push(element);     //5
        }
    });
    return newArray;        //6
};

// Do not edit below this line
module.exports = removeFromArray;
