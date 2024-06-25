// Objective:
// Create a basic calculator class in TypeScript that can perform addition, subtraction,
// multiplication, and division. The class should include validation to ensure that the inputs are
// valid numbers and that division by zero is handled correctly.
// Requirements:
// 1. Class Definition:
// ○ Create a Calculator class with methods for addition, subtraction,
// multiplication, and division.
// 2. Validation:
// ○ Implement input validation to ensure the provided values are numbers.
// ○ Ensure that the division method handles division by zero appropriately.
// 3. Methods:
// ○ Add function
// ○ Minus function
// ○ Divide function
// ○ Multiply function


class Calculator{
    add_function(val:any,val2:any):number|string{
        let sum:number|string=0;
        if(typeof val=="number" && typeof val2=="number"){
            sum=val+val2;
        }
        else{
            sum="Invalid Input";
        }
        return sum; 
    }
    minus_function(val:any,val2:any):number|string{
        let diff:number|string=0;
        if(typeof val==="number" && typeof val2==="number"){
            diff=val-val2;
        }
        else{
            diff="Invalid input";
        }
        return diff;
    }
    div_function(val:any,val2:any):number|string{
        let div:number|string="";
        if(typeof val==="number" && typeof val2==="number"){
            if(val2===0){
                div="Cannot divide by 0.";
            }
            else{
                div=val/val2;
            }
        }
        else{
            div+=" Invalid input"
        }
        return div;
    }

    mul_function(val:any,val2:any):number|string{
        let mul:number|string=0;
        if(typeof val==="number" && typeof val2==="number"){
            mul=val*val2;
        }
        else{
            mul="Invalid Input";
        }
        return mul;
    }
}

let new_math=new Calculator;
console.log(new_math.add_function(12,3));
console.log(new_math.minus_function(12,"Mishi Makade was here"));
console.log(new_math.div_function("hey",0));
console.log(new_math.mul_function(12,3));