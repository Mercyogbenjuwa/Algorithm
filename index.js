// write two algoritms :
// 1.The first algorithm should take an array of numbers as input 
// and return the minimium value in the array (i.e the smallest number)

function findMinimumValue(numbers){
    return Math.min(...numbers); //-1 
}
 console.log(findMinimumValue([1, 2, 3, 4]));

 //O(n) - Depends on the number of n times.

//Best case  : [1, 2, 3]
//Worst case : [3, 2, 1]
//Average case: [2, 1, 3]



function findMinimumValue(numbers) {
    return numbers.reduce((a, b) => Math.min(a, b));
}



// 2. The second algorithm should take a number as input and return true
// if it's an evennummber, false for odd numbers.


function isEven(n){
    if(n % 2 === 0){ 
        return "even"
    }
    else {
        return "odd"
    }
}
console.log(isEven(10)); // Output: "even"

//Time complexity 
function isEven(num) {
    //The first line executes only once
    return num % 2 === 0;
}

//This is constant time 
//Why? we have no if statements or loops
//One Case: 0(1)
console.log(isEven(10));

