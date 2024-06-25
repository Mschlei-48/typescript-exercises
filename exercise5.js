var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add_function = function (val, val2) {
        var sum = 0;
        if (typeof val == "number" && typeof val2 == "number") {
            sum = val + val2;
        }
        else {
            sum = "Invalid Input";
        }
        return sum;
    };
    Calculator.prototype.minus_function = function (val, val2) {
        var diff = 0;
        if (typeof val === "number" && typeof val2 === "number") {
            diff = val - val2;
        }
        else {
            diff = "Invalid input";
        }
        return diff;
    };
    Calculator.prototype.div_function = function (val, val2) {
        var div = "";
        if (typeof val === "number" && typeof val2 === "number") {
            if (val2 === 0) {
                div = "Cannot divide by 0.";
            }
            else {
                div = val / val2;
            }
        }
        else {
            div += " Invalid input";
        }
        return div;
    };
    Calculator.prototype.mul_function = function (val, val2) {
        var mul = 0;
        if (typeof val === "number" && typeof val2 === "number") {
            mul = val * val2;
        }
        else {
            mul = "Invalid Input";
        }
        return mul;
    };
    return Calculator;
}());
var new_math = new Calculator;
console.log(new_math.add_function(12, 3));
console.log(new_math.minus_function(12, "Mishi Makade was here"));
console.log(new_math.div_function("hey", 0));
console.log(new_math.mul_function(12, 3));
