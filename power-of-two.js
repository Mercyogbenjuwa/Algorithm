//Determine whether an input number is a power of two
//Divide number and future division results by two, until 1 is reached and check if the remainder is always 0
 function isPowerOfTwo (number) {
 if (number < 1) {
    return false;
 }
 let dividedNumber = number;
 while(dividedNumber !== 1){
    console.log('executing...')
    if(dividedNumber % 2 !== 0){
        return false;
    }
    dividedNumber = dividedNumber / 2;
    }
    return true;
 }
 console.log(isPowerOfTwo(8));
 console.log(isPowerOfTwo(5));
 console.log(isPowerOfTwo(20));
 console.log(isPowerOfTwo(16));
 console.log(isPowerOfTwo(13));

 //Best Case: number = 13 => 0(1)
 //Worst Case: 1,125, 899,906, 842, 624 => 0(log n)

 //Max method
 //If number is smaller than 1 return false because number cant be divided by 2
 // 

 function isPowerOfTwo(number){
    if(number < 1){
        return false;
    }
    return (number & (number -1)) === 0;
 }
