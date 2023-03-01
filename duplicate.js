// How do you print duplicate characters from a string


//STEPS

//VERIFY INPUTS/PROBLEM
//Input must be a string, return null for empty string or not string.

//THINK ABOUT THE PROBLEM + VERBAL SOLUTION
//iterate over the string and keep a count of each string, store in a dictionary or hash map.
//if a character exists in the hash map it means it's a duplicate string, and used be added to a new string.

//WRITE OUT THE FIRST VERSION
function printDuplicatecharcaters (str){
    if(typeof str !== 'string' || str === ''){
        return null;
    }
    let charCount = {};
    let duplicateChars ='';
    for (char of str){
        console.log('times')
        if (charCount[char]){
            duplicateChars +=char;
        } else {
            charCount[char] = 1;
        }
    }
    return duplicateChars;
}
//VERIFY RESULTS
//Test the code with possible string input
console.log(printDuplicatecharcaters('MercyOgbenjuwaFatimahOnyoibo'))
console.log(printDuplicatecharcaters('JesusBaby'))
console.log(printDuplicatecharcaters('WalkOFFaith'))

//DERIVE THE TIME COMPLEXITY
//Based on the input size 0(n) - Linear time Complexity
//BEST CASE => JesusBaby,
//AVERAGE CASE => WalkOfFaith,
//WORST CASE => MercyOgbenjuwaFatimahOnyoibo

//EXPLORE ALTERNATIVES
function printDuplicatecharcaters (str) {
    if (typeof str !== 'str' || str === ''){
        return null;
    }
    let charCount = new Set();
    let duplicateChars = [];
    for (char of str){
     if(charCount.has(char)){
        duplicateChars.push(char);
     }else{
        charCount.add(char);
     }
    }
    return duplicateChars;
}