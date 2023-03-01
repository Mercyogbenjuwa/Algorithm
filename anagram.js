//3.How do you check if two strings are anagrams of each other?

//VERIFY INPUTS/PROBLEM
//Ensure that both inputs are string and not empty.Return false if criteria is not meet.

//THINK ABOUT THE PROBLEM + VERBAL SOLUTION.
//To determine if both strings are anagrams of each  other,we need to compare the frequency of the strings and check if the are the same, if the are then the are both anagrams of each other.

//WRITE OUT THE FIRST VERSION
function isAnagram (str1, str2){
    if (typeof str1 !=='string' || str1 === '' || typeof str2 !=='string' || str2 === ''){
        return false;
    }
    let charCount1 = {};
    let charCount2 = {};
    for(char of str1){
        console.log('TIMES')
        charCount1[char] =(charCount1[char] || 0)+ 1;
    }
    for(char of str2){
        console.log('TIMES')
        charCount2[char] = (charCount2[char] || 0) + 1;
    }
    if(charCount1[char] !== charCount2[char]){
        return false;
    }
    return true;
}
//VERIFY THE RESULTS
console.log(isAnagram('silent', 'listen'));
console.log(isAnagram('triangle', 'integral'));
console.log(isAnagram('file', 'life'));
console.log(isAnagram('hello', 'world'));

//DERIVE THE TIME COMPLEXITY 
//BASED ON THE INPUT THE USER SENDS THE TIME COMPLEXITY IS EXECUTED, THEREFORE IT'S SAFE TO SAY THE TIME COMPLEXITY OF THIS CODE IS O(N) WHERE NUMBER OF TIMES THE INPUT IS EXECUTED. IT'S PROPORTIONAL TO THE INPUT SIZE.
//BEST CASE => (FILE, LIFE)
//AVERAGE CASE => (SILENT, LISTEN)
//WORST CASE => (TRIANGLE, INTEGRAL)

//EXPLORE ALTERNATIVES
function isAnagram (str1, str2){
    if(typeof str1 !=='string' || str1 === '' || typeof str2 !=='string' || str2 ===''){
        return false;
    }
    let charCount1 = str1.split('').sort().join('');
    let charcount2 = str2.split('').sort().join('');
    return charCount1 === charcount2;
}
console.log(isAnagram('silent', 'listen'));
console.log(isAnagram('triangle', 'integral'));
console.log(isAnagram('file', 'life'));
console.log(isAnagram('hello', 'world'));

//THE TIME COMPLEXITY IS O(Log n) where n is the length of the longest string, the sort method takes O(log n)to sort both strings. but the spilit and jin method takes O(n).
