const removeFromArray = function(array, ...args) {
    let newArray = array;
    for (arg of args) {
        while (newArray.includes(arg)){
            let indexToRemove = newArray.indexOf(arg);
            newArray = newArray.slice(0, indexToRemove).concat(newArray.slice((indexToRemove + 1), newArray.length));
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
