const sumAll = function(num1, num2) {
    if (
        num1 < 0 || 
        num2 < 0 || 
        typeof num1 != "number" || 
        typeof num2 != "number" || 
        !(Number.isInteger(num1)) || 
        !(Number.isInteger(num2))) 
        {
        return "ERROR";
    }
    else {
        sum = 0;
        switch (num1 < num2){
            case true:
                for (let i = num1; i <= num2; i++){
                    sum += i;
                }
            case false:
                for (let i = num2; i <= num1; i++){
                    sum += i;
                }
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
