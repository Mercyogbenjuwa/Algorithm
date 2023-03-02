//array = [4,3,5,7,2,1]
//array = [4,3,5,7,2,1]sort array in asc order you can't use inbuild sort method

//Verify inputs/array
function bubbleSort(arr){
    let length = arr.length;
    for(let i =0; i <length; i++){
        for (let j = 0; j<length; j++){
            if(arr[j]> arr[j + 1]){
                let temp = arr[j];
                arr[j]= arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([4,3,5,7,2,1]))
