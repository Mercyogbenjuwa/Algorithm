// How do you count a number of vowels and consonants in a given string?

//VERIFY INPUTS/PROBLEMS
//Input must be a string, and must not be empty else return null.

//THINK ABOUT THE PROBLEM + VERBAL SOLUTION
//create a loop that iterates through the input and increment and every vowel or consonant .

//WRITE OUT THE FIRST VERSION
function isConsonantOrVowel(str) { 
    if (typeof str !== "string" || str === "") { 
    return null;
     } 
    let vowels = "aeiouAEIOU";
    let vowelsCount = 0; 
    let consonantsCount = 0; 
    for (let char of str) {
        console.log('times')
     if (vowels.includes(char)) {
     vowelsCount++; 
    } else if (char >= "a" && char <= "z" || char >= "A" && char <= "Z") { 
    consonantsCount++; 
    }
     } 
    return { 
    vowels: vowelsCount, 
    consonants: consonantsCount
     }
     ; 
    } 

//VERIFY THE RESULTS
console.log(isConsonantOrVowel('Mercy'));
console.log(isConsonantOrVowel('Fatimah'));
console.log(isConsonantOrVowel('Ogbenjuwa'));
//DERIVE THE TIME COMPLEXITY 
//BEST CASE => Mercy 
//AVERAGE CASE => Fatimah
//WORST CASE => Ogbenjuwa
// This is a linear complexity, other operations have a constant time complexity, O(n)
//EXPLORE ALTERNATIVES
