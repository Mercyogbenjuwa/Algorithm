
//Verify the inputs/problems
//Creating a function that checks for the value of the user inout in an ordered array.
//ensure all input are numbers

//Think about the problem
//The first logical step will be to search the value of every element in the array, checking if the value of any element in the array is greater than the user input. 

//Write out a first version
function linearSearch(array, value){
    if(!Array.isArray(array, value)){
        return null;
    }
    for(let i=0; i< array.length; i++){
        if(array[i] === value){
            return i;
        }else if(array[i] > value){
            return -1
        }
    }
    return -1
}

//Verify the results
console.log(linearSearch([1,2,4,6,7,8,9], 9))
//Derive the time complexity.
//O(n) => Linear
