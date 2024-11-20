const palindromes = function (text) {
    let filteredText = text.toLowerCase().replace(/[\W]+/g,"");
    let start = 0;
    let end = filteredText.length - 1;
    while (start < end){
        if (filteredText[start] != filteredText[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
