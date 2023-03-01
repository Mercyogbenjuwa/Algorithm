//HOW DO YOU REVERSE A GIVEN STRING STRING IN PLACE
function reverseString(str){
    if (typeof str !=='string' || str ===''){
        return null;
    }
    return str.split('').reverse().join('')
}

//2.HOW DO YOU PRINT DUPLICATE CHARACTERS FROM A STRING.
function duplicateChar(str){
    if (typeof str !=='string' || str ===''){
        return null;
    }
    let charCount = {};
    let duplicateCount = ''
    for(let char of str){
        if(charCount[char]){
            duplicateCount += char
        }else{
            charCount[char] =1;
        }
    }
    return duplicateChar;
}

function duplicateChar (str){
    if (typeof str !=='string' || str ===''){
        return null;
    }
    let charCount = new Set();
    let duplicateCount = [];
    for(let char of str){
        if(charCount.has(char)){
            duplicateCount.push(char)
        }else{
            charCount.add(char)
        }
    }
    return duplicateChar;
}

//HOW DO YOU CHECK IF TWO STRINGS ARE ANAGRAMS OF EACH OTHERS
function isAnagram(str1, str2){
    if (typeof str1 !=='string' || str1 ==='' || typeof str2 !=='string' || str2 ===''){
        return null;
    }
    for(let char of str1){
        charCount1[char] =(charCount1[char] || 0) + 1;
    }
    for(let char of str2){
        charCount2[char] =(charCount2[char] || 0) + 1;
    }
    for(let char in charCount1){
        if(charCount1[char] !== charCount2[char]){
            return false;
        }
    }
    return true;



}

let vowel = 'aeiouAEIOU'
let vowelsCount = 0;
let consonantCount = 0;
for (let char of str){
    if(vowel.includes(char)){
        vowelcount++
    }else{
        if(char <='a' && char >='z'|| char <='A' && char >='Z'){
            consonantCount++
        }
    } return{
        vowels: vowelsCount,
        consonants: consonantCount
    }
}

let count =0;
for(c of char){
    if(c === char){
        count++
    }
    return count
}

str.split('').filter(c => c === char).length;


let charcount1 = {};
let charCount2 = {};
for(let char of str1){
    charcount1[char]= (charcount1[char] || 0) + 1;
}
for(let char of str2){
    charCount2[char]= (charCount2[char] || 0) + 1
}
for(let char in charcount1){
    if(charcount1[char] !== charCount2[char]){
        return false;
    }
    return true;
}