//Calculate the factorial of a number

function factorial(n){
    // You start with 1 because anything multiply by 0 is 0
    let result = 1;
    for(let i = 2; i <= n; i++){
        
        result = result * i;
    }
    return result;
}
console.log(factorial(2));
console.log(factorial(5));
console.log(factorial(20));
console.log(factorial(25));
