var var1;
var num1;
var var_any;
var string_num;
var func1 = function (par1, action) {
    if (action === true) {
        par1 = par1.toUpperCase();
    }
    else if (action === false) {
        par1 = par1.toLowerCase();
    }
    return par1;
};
console.log("Output of functions: ", func1("MishiMakade", true));
