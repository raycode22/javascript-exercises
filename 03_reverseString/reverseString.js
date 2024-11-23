const reverseString = function (str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
};
reverseString("hello");
reverseString("hello, there");
reverseString("123! abc! Hello, Odinite.");
reverseString("");

// Do not edit below this line
module.exports = reverseString;
