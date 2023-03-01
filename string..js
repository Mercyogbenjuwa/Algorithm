// How do you reverse a given string in place?

//SOLUTION
//VERIFY THE INPUTS/PROBLEM
//Ensure that all input is a string, return null for non strings or empty strings.

//THINK ABOUT THE PROBLEM + VERBAL SOLUTION
//First of all we need to access the string before we can split it.
//To access the string we must covert to an array by spliting it.
// then we reverse the array of characters.
//then we join the charaters back and return it.


//WRITE OUT THE FIRST VERSION.
function reverseString(str){
    if(typeof str !=='string' || str === ''){
        return null;
    }
    let strArr = str.split('');
    let start = 0;
    let end = strArr.length -1;
    while(start < end){
        console.log('times')
        let temp = strArr[start];
        strArr[start]= strArr[end];
        strArr[end]=temp;
        start++;
        end--;
    }
    return strArr.join('');
}
//VERIFY THE RESULTS.
console.log(reverseString('Mercy'));
console.log(reverseString('Ogbenjuwa'));
console.log(reverseString('Fatimah'));
//DERIVE THE TIME COMPLEXITY.
//BASED ON THE BESTCASE, AVERAGECASE, WORSTCASE.
//WE have different execution time for different input size, therefore we can say the executive time is proportional to the input size which is O(n) where n is the number of times; ---Linear time complexity.

//EXPLORE ALTERNATIVES.
//We can also use a clear and more concise way, which is to use javascript inbuilt method to carry out the reverse process.
//verify the necessary inputs.

function reverseString(str){
    if (typeof str !=='string'|| str === ''|| !Array.isArray(str)) {
        return null;
    }
    return str.split('').reverse().join('');
}
console.log(reverseString('Mercy'));
console.log(reverseString('Ogbenjuwa'));
console.log(reverseString('Fatimah'));


//INCASE OF AN ARRAY, YOU DON'T NEED TO CALL THE JOIN OR SPLIT OPERATOR YOU JUST REVERSE, WHY? CAUSE AN ARRAY BE ACCESSED AND MANIPULATED.
//VERIFY IT'S AN ARRAY FIRST.
 function reverseString(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    return arr.reverse();
 }
console.log(reverseString(['mercy', 'fatimah', 'ogbenjuwa', 'dee','faith']))