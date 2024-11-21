const fibonacci = function(member) {
    let memberInt = parseInt(member);
    if (memberInt < 0){
        return "OOPS";
    }
    let fibonacciArray = [0, 1];
    for (let i = 2; i <= memberInt; i++){
        fibonacciArray.push(fibonacciArray[i-1] + fibonacciArray[i-2]);
    }
    return fibonacciArray[memberInt];
};

// Do not edit below this line
module.exports = fibonacci;
