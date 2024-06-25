// 1. Write a function that takes two numbers as parameters and returns their sum
var sum_func = function (num1, num2) {
    return num1 + num2;
};
// 2. Write a function that returns a fixed number
var fixed_num = function () {
    var num1 = 48;
    return num1;
};
console.log(sum_func(12, 16));
// 3. Write a function that takes a string and an optional boolean parameter. If the boolean
// is true, return the string in uppercase; otherwise, return it in lowercase.
var upper_lower = function (par1, par2) {
    if (par2 === true) {
        par1 = par1.toUpperCase();
    }
    else if (par2 === false) {
        par1 = par1.toUpperCase();
    }
    return par1;
};
console.log(upper_lower("Mishi", true));
