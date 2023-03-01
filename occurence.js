// How do you count the occurrence of a given character in a string?

//Verify the inputs/problems
//Ensure that all inputs are strings. and char is only one character long.

//Think about the problem + verbal solution.
//Create two arguments, str and char and iterate over every character in the string. To check every occurence

//Write out the first version.
function occurence(str, char) {
    if (typeof str !== "string" || typeof char !== "string" || str === "" || char.length !== 1) { 
   return null; 
   }
    let count = 0; 
   for (let c of str) {
    if (c === char) {
    count++; 
   } 
   } 
   return count; 
   } 
   
  
//Verify the results
console.log(occurence('Fatimah', 'a'));
console.log(occurence('Mercy', 'e'));
console.log(occurence('Ogbenjuwa' ,'k'));
//Derive the time complexity.
// The time complexity of this function is O(n), where n is the length of the input string. This is because the function loops through each character in the string and performs a constant-time operation (comparing the character to the given character) on each iteration. Therefore, the total time taken by the function is proportional to the length of the string.

//Explore alternatives
function occurence(str, char) {
    if(typeof str !=='string' || typeof char !=='string' || char.length !== 1 || str ===''){
        return null;
    }
    return str.split('').filter(c => c === char).length;
  }
console.log(occurence('Fatimah', 'a'));
console.log(occurence('Mercy', 'e'));
console.log(occurence('Ogbenjuwa' ,'k'));

//The time complexity of this function is O(n), where n is the length of the input string. The function first checks if the input arguments are valid, which takes constant time. Then it splits the input string into an array of characters, which takes O(n) time. The filter() method then iterates over each character in the array, which also takes O(n) time. Finally, the length of the resulting array is returned, which takes constant time. Therefore, the overall time complexity of the function is O(n).