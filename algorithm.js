// HOW DO YOU PRINT DUPLICATE CHARACTERS FROM A STRING.

//STEPS:
//VERIFY THE INPUTS/PROBLEMS
//Ensure that all inputs are strings, and i should not receive any empty string, i should throw false if not a string.

//THINK ABOUT THE PROBLEM + VERBAL SOLUTION
//Iterate over the string, store a new string in a new count , and add a string that appears more than one as a duplicate

//WRITE OUT THE FIRST VERSION
function printingDuplicateCharacters (str){
if(typeof str !=='string'|| str === ''){
    return false;
}
let charCount = {};
let duplicateCount = '';
for(char of str){
    console.log('times')
    if (charCount[char]){
        duplicateCount += char;
    } else {
        charCount[char] = 1;
    }
} 
return duplicateCount;
}
//VERIFY THE RESULTS
// console.log(printingDuplicateCharacters(''));
// console.log(printingDuplicateCharacters('Ikenna'));
// console.log(printingDuplicateCharacters('Akuchi'));
// console.log(printingDuplicateCharacters('dvsaghcsgvvhgcgdgcggvvbvbvbxvgagg'))

//DERIVE THE TIME COMPLEXITY
//Best case => Akuchi
//Average case =>Ikenna
//Worst case => dvsaghcsgvvhgcgdgcggvvbvbvbxvgagg
//Proportional to input size of n O(n)

//EXPLORE ALTERNATIVE SOLUTION.

function printingDuplicateCharacters (str){
    if (typeof str !=='string' || str === ''){
        return null;
    }
    let charCount = new Set();
    let duplicateCount = [];
    for(char of str){
        if(charCount.has(char)){
            duplicateCount.push(char);
        }else{
            charCount.add(char);
        }
    }
    return duplicateCount;
}
console.log(printingDuplicateCharacters(''));
console.log(printingDuplicateCharacters('Mercy'));
console.log(printingDuplicateCharacters('Ogbenjuwa'));
console.log(printingDuplicateCharacters('dvsaghcsgvvhgcgdgcggvvbvbvbxvgagg'))