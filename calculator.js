class Calculator {
    constructor()
    {
        this.result=0;
    }
    add(n)
    {
        this.result+=n;
    }
    subtract(n)
    {
        this.result-=n;
    }
    multiply(n)
    {
        this.result*=n;
    }
    divide(n)
    {
        // if(n==0)
        //     throw new Error("Division by zero is not possible");
        this.result/=n;
    }
    clear()
    {
        this.result=0;
    }
    getResult()
    {
        return this.result;
    }
    calculate(s)
    {
        this.result=eval(s);
    }
}
let calc=new Calculator();
calc.add(5); // Add 5 to the result
console.log(calc.getResult()); 
calc.multiply(3); 
console.log(calc.getResult()); 
calc.subtract(7); // Subtract 7 from the result
console.log(calc.getResult()); // Output: 8
calc.divide(2); // Divide the result by 2
console.log(calc.getResult()); // Output: 4
calc.clear(); // Clear the result
console.log(calc.getResult()); // Output: 0
calc.calculate('10 + 2 * (6 - (4 + 1) / 2) + 7');
console.log(calc.getResult())

// Using Constructor Function:-
// function Calculator(result)
// {
//     this.result=result;
//     this.add=function(n)
//     {
//         result+=n;
//         //return result;
//     };
//     this.subtract=function(n)
//     {
//         result-=n;
//         //return result;
//     };
//     this.multiply=function(n)
//     {
//         result*=n;
//         //return result;
//     };
//     this.divide=function(n)
//     {
//         if(n==0)
//             throw new Error('Division by zero is not possible');
//         result/=n;
//         //return result;
//     };
//     this.clear=function()
//     {
//         result=0;
//     };
//     this.getResult=function()
//     {
//         return result;
//     };
//     this.calculate=function(s)
//     {

//     };
// }

// let a = new Calculator(10);
// console.log(a);
// a.add(20);
// a.add(30);
// console.log(a.getResult());
// a.divide(0);
// console.log(a.getResult());