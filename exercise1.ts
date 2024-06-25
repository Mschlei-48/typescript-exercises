// 1. Declare a variable that holds a string value without explicitly stating its type

let var1;
// 2. Declare a variable that holds a number value and explicitly state its type

let num1:number;
// 3. Declare a variable that can hold a value of any type
let var_any:any;
// 4. Declare a variable that can hold either a string or a number
let string_num:string|number;

// let func1=(par1:string,action?:boolean):string=>{
//     if(action===true){
//         par1=par1.toUpperCase();
//     }
//     else if(action===false){
//         par1=par1.toLowerCase();
//     }

//     return par1;
// }
// console.log("Output of functions: ",func1("MishiMakade",true));