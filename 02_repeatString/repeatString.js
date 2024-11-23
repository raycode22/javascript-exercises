const repeatString = function (str, num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result += str;
    }
    if (num < 0) {
        return "ERROR";
    }
    return result;
};

repeatString("hey", 3);
repeatString("hello", 10);
repeatString("hi", 1);
repeatString("bye", 0);
repeatString("goodbye", -1);
repeatString("odin", 100);
repeatString("", 10);

// Do not edit below this line
module.exports = repeatString;
