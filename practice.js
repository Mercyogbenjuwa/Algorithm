//HOW DO YOU REVERSE A GIVEN STRING STRING IN PLACE

//VERIFY THE INPUTS/PROBLEM
//Ensure that input received is a string, and not a number or empty string.

//THINK ABOUT THE PROBLEM + VERBAL SOLUTION.
//Firstly i want to convert the string into an array of strings why so i can manipulate and access every substring of the array, after that i will reverse the string making the last the first and first the last... after reversing i will join the string back to a string.

//WRITE OUT THE FIRST VERSION.
function reverseString(str){
    if(typeof str !=='string' || str === ''){
        return null;
    }
    return str.split('').reverse().join('')
}

//VERIFY THE RESULTS
console.log(reverseString('Mercy'));
console.log(reverseString('Fatimah'));
console.log(reverseString('Ogbenjuwa'));

//DERIVE THE TIME COMPLEXITY
//BEST CASE =>('Mercy'));
//AVERAGE CASE =>('Fatimah'));
//WORST CASE =>('Ogbenjuwa'));
//BASED ON THE INPUT SIZE WHICH IS N, THAT IS DIRECTLY PROPORTIONAL TO THE INPUT SIZE. 0(n)=> LINEAR TIME COMPLEXITY.

//EXPLORE ALTERNATIVE ==> Please read properly.
function reverseStringInPlace(str) { 
    if (typeof str !== "string" || str === "") { 
    return null;
     }
     let strArr = str.split(""); 
    let start = 0; 
    let end = strArr.length - 1; 
    while (start < end) { 
    let temp = strArr[start];
    strArr[start] = strArr[end]; 
    strArr[end] = temp; 
    start++; 
    end--;
     } 
    return strArr.join("");
     } 
    
//2.HOW DO YOU PRINT DUPLICATE CHARACTERS FROM A STRING.

//VERIFY INPUTS/PROBLEMS
//Ensure that all incoming inputs, are of type of string, and are not empty. return null if criteria is not meet.

//THINK ABOUT THE PROBLEM + VERBAL SOLUTION
//My approach will be to count and store strings appearing more than once in a hash map.
//return duplicate string.

//WRITE OUT THE FIRST VERSION.
function duplicateCharacters (str){
   if(typeof str !=='string' || str === ''){
     return null;
   }
   let charCount = {};
   let duplicateChar = '';
   for(let char of str){
    if(charCount[char]){
        duplicateChar += char;
    }else{
        charCount[char] = 1;
    }
   }
   return duplicateChar;
}
//VERIFY THE RESULTS
console.log(duplicateCharacters('qwertaswedrf'));
console.log(duplicateCharacters('mercy'));
console.log(duplicateCharacters('valentine'));
console.log(duplicateCharacters('file'));

//DERIVE THE TIME COMPLEXITY
//BEST CASE =>
//AVERAGE CASE =>
//WORST CASE =>

//EXPLORE ALTERNATIVES
//USING ARRAY METHODS 
function duplicateCharacters(str){
    if(typeof str !=='string' || str ===''){
        return null
    }
    let charCount = new Set ();
    let duplicateCount = [];
    for(let char of str){
        if(charCount.has(char)){
            duplicateCount.push(char);
        }else{
            charCount.add(char);
        }
    }
    return duplicateCount;
}

//3. HOW DO YOU CHECK IF TWO STRINGS ARE ANAGRAMS OF EACH OTHERS

//VERIFY THE INPUTS/PROBLEMS
//ENSURE BOTH INPUTS ARE STRINGS, AND NOT EMPTY.

//THINK ABOUT THE PROBLEM + VERBAL SOLUTION
//TO check if two strings are anagrams of each other, we need to iterate over them, check the frequency of each string and store in a hashmap. if the frequency are equal.

//WRITE OUT THE FIRST VERSION
function isAnagram (str1, str2){
    if(typeof str1 !=='string' || str1 ==='' || typeof str2 !=='string' || str2 ===''){
        return null;
    }
    let charCount1 = {};
    let charCount2 = {};
    for(let char of str1){
        charCount1[char] =(charCount1[char] || 0) + 1;
    }
    for(let char of str2){
        charCount2[char] =(charCount2[char] || 0) + 1;
    }
    for(let char in charCount1){ //= study
        if(charCount1[char] !== charCount2[char]){
        return false;
        }
    }
    return true;
}
//VERIFY THE RESULTS
console.log(isAnagram('silent', 'listen'));
console.log(isAnagram('triangle', 'integral'));
console.log(isAnagram('file', 'life'));
console.log(isAnagram('hello', 'world'))

//DERIVE THE TIME COMPLEXITY.
//BEST CASE =>
//AVERAGE CASE =>
//WORST CASE =>
//NOTE O(N)

//EXPLORE ALTERNATIVES
function isAnagram(str1, str2){
    if(typeof str1 !=='string' || str1 ==='' || typeof str2 !=='string' || str2 ===''){
        return false;
    }
    let charcount1 = str1.split('').sort().join('');
    let charcount2 = str2.split('').sort().join('');
    return charcount1 === charcount2;
}
console.log(isAnagram('silent', 'listen'));
console.log(isAnagram('triangle', 'integral'));
console.log(isAnagram('file', 'life'));
console.log(isAnagram('hello', 'world'))
//O(log n)=> logarithmic time complexity.


//4.How do you count a number of vowels and consonants in a given string?

//VERIFY INPUTS/PROBLEMS
//INPUT MUST BE STRING RETURN NULL IF NOT STRING

//THINK ABOUT THE PROBLEM + VERBAL SOLUTION
//ITERATE OVER THE STRING, INCREMENT COUNT FOR VOWEL OR CONSONANT.

//WRITE OUT THE FIRST VERSION
function countVowelsAndConsonants(str) { 
    if (typeof str !== "string" || str === "") { 
    return null;
     } 
    let vowels = "aeiouAEIOU";
    let vowelsCount = 0; 
    let consonantsCount = 0; 
    for (let char of str) {
     if (vowels.includes(char)) {
     vowelsCount++; 
    } else if (char >= "a" && char <= "z" || char >= "A" && char <= "Z") { 
    consonantsCount++; 
    }
     } 
    return{ 
    vowels: vowelsCount, 
    consonants: consonantsCount
     }; 
    } 
//VERIFY THE RESULTS
console.log(countVowelsAndConsonants('Mercy'));
console.log(countVowelsAndConsonants('Fatimah'));
console.log(countVowelsAndConsonants('Ogbenjuwa'));

//DERIVE THE TIME COMPLEXITY
//BEST CASE => Mercy
//AVERAGE CASE => Fatimah
//WORST CASE => Ogbenjuwa

//EXPLORE ALTERNATIVES
function countVowelsAndConsonants(str){
    if(typeof str !=='string' || str ===''){
        return null;
    }
    let vowels = str.match(/[aeiouAEIOU]/g) || []
    let consonants = str.match(/[^aeiouAEIOU/s]/g) || [];
    return {
        vowel: vowels.length,
        consonants: consonants.length
    }
}

//O(n)

//HOW DO YOU COUNT THE OCCURENCE OF A GIVEN CHARCTER IN A STRING.

//VERIFY THE INPUTS/PROBLEMS
//ENSURE ALL INPUTS ARE STRINGS

//THINK ABOUT THE PROBLEM + VERBAL SOLUTION.
//CREATE TWO INPUTS, ONE FOR THE STRING YOU NEED TO CHECK, SECOND FOR THE SPECIAL CHARCATER.

//WRITE THE FIRST VERSION
function occurrence(str, char){
    if (typeof str !=='string' || typeof char !='string' || str ==='' || char.length != 1){
        return null;
    }
    let count = 0;
    for(let c of str){
        if(c === char){
        count++;
    }
    }
    return count
}
//VERIFY THE RESULTS
console.log(occurrence('Mercy', 'c'));
console.log(occurrence('Fatimah', 'a'))
console.log(occurrence('dsvcvgghgmzxxbbdqpiuggvb', 'x'))
//DERIVE THE TIME COMPLEXITY.
//=> 0(n)

//EXPLORE ALTERNATIVE
function occurence (str, char){
    if (typeof str !=='string' || typeof char !='string' || str ==='' || char.length != 1){
        return null;
    }
    return str.split('').filter(c => c === char).length
}
//O(n).