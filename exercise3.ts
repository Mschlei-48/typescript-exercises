// 1. Write a function that takes two numbers as parameters and returns their sum
let sum_func=(num1:number,num2:number):number=>{
    return num1+num2;
}
// 2. Write a function that returns a fixed number
let fixed_num=()=>{
    const num1=48;
    return num1;
}

console.log(sum_func(12,16));
// 3. Write a function that takes a string and an optional boolean parameter. If the boolean
// is true, return the string in uppercase; otherwise, return it in lowercase.


let upper_lower=(par1:string,par2?:boolean):string=>{
    if(par2===true){
        par1=par1.toUpperCase();
    }
    else if(par2===false){
        par1=par1.toUpperCase();
    }
    return par1;
}
console.log(upper_lower("Mishi",true));