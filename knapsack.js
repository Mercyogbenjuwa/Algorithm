//You got a list of items, where every item has a value and a weight. You got a bag that holds a maximum weight of x.
// Write a program that maximizes the value of items you put into the bag whilst ensuring that you don't exceed the maximum weight.

//questions to ask?
//can items be used more than once

//evaluate all possible cases/combinations
//check the threshold 
//derive all possible cobinations of weight.

//Pseudocode
//create a function and call it maxWeight
// call the function and pass input parameter.
//instatiate an array
//inside the array instatiate an object.
//That has a value and a weight.
//Declare a variable maximum = x;
//inside the object we will loop through the object, if a user trys to add anything above the maximum weight we return 'bag is full'

function knapsack(items, cap, itemIndex){
    console.log('time')
    if(cap === 0 || itemIndex < 0){
        return {items: [], value: 0, weight: 0};
    }
if(cap < items[itemIndex].weight){
    return knapsack(items, cap, itemIndex -1);
}
const sackWithItem  = knapsack(
    items, cap - items[itemIndex].weight,
     itemIndex-1
     );
const sackWithouItem = knapsack(items, cap, itemIndex -1);
const valueWithItem = sackWithItem.value + items [itemIndex].value;
const valueWithoutItem = sackWithouItem.value;
if (valueWithItem > valueWithoutItem){
    const updatedSack ={
        items: sackWithouItem.items.concat(items[itemIndex]),
        value: sackWithItem.value + items[itemIndex].value,
        weight: sackWithItem.weight + items[itemIndex].weight
    };
    return updatedSack;
} else{
    return sackWithouItem
}

    return {};

}
    let items = [
        {id: 'a', value: 10,  weight: 3},
        {id: 'b', value:  6,   weight: 8},
        {id: 'c', weight: 10,  weight: 3},       
];
let maxCap = 8;
const allPermutations = knapsack(items, maxCap, items.length-1);
console.log(allPermutations);

