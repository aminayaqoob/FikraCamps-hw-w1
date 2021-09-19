

// Q1
// Create a function that returns an array of strings sorted by length in ascending order.


// Examples
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

// sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]

// sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]

// sortByLength([]) ➞ []

function sortByLength(str){
    var index=0;
     for(let i=0;i<str.length-1;i++){
         if(str[i].length>str[i+1].length){
             var tmp=str[i];
             str[i]=str[i+1];
             str[i+1]=tmp;
             index++;
         }
     }
     if(index!==0) {
         sortByLength(str);}
    return str;
}
console.log(sortByLength(["a", "ccc", "dddd", "bb"]));
console.log(sortByLength(["apple", "pie", "shortcake"]));
console.log(sortByLength(["may", "april", "september", "august"]));
console.log(sortByLength([]));





// Q2
// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// Assume that the following array of drink objects needs to be sorted:

// drinks = [
//   {name: "lemonade", price: 50},
//   {name: "lime", price: 10}
// ]
// The output of the sorted drinks object will be:

// Examples

// sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

function sortDrinkByPrice(obj){
   for(let i=0;i<obj.length-1;i++){
        var index=0;
        if(obj[i].price>obj[i+1].price){
            let tmp=obj[i].price;
            obj[i].price=obj[i+1].price;
            obj[i+1].price=tmp;
            index++;
        }
    }
    if(index!==0){
        sortDrinkByPrice(obj);
    }
    return obj;
}
drinks = [
       {name: "lemonade", price: 50},
       {name: "lime", price: 10},
       {name: "orange", price:33},
       {name: "mango", price: 55},
     ]
    console.log (sortDrinkByPrice(drinks))



// Q3
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []
// Notes
// Return an empty array if the object is empty.

function toArray(obj){
    let array=[]
    var index=0;
    for(const key in obj){
        if(typeof element=="object"){
            array[index]=toArray(obj[key])
            index++;
        }
        else{
            array[index]=[key,obj[key]];
            index++;
        }
    }
    return array;
}
console.log(toArray({ a: 1, b: 2 }))
console.log(toArray({ shrimp: 15, tots: 12 }))
console.log(toArray({}))

// Q4
// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

// Examples
// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]
// Notes
// Remember to sort the keys.

function keysAndValues(obj){
    var KeysArray=[]
    var ValuesArray=[]
    for(const key in obj){
        KeysArray.push(key);
        ValuesArray.push(obj[key])
    }
    var array=sorting(KeysArray,ValuesArray)
    return array;
}
function sorting(KeysArray,ValuesArray){
    var index=0;
    for(let i=0;i<KeysArray.length-1;i++){
        if(KeysArray[i]>KeysArray[i+1]){
            let tmp=KeysArray[i];
            let tmpIndex=ValuesArray[i];
            KeysArray[i]=KeysArray[i+1];
            ValuesArray[i]=ValuesArray[i+1];
            KeysArray[i+1]=tmp;
            ValuesArray[i+1]=tmpIndex;
            index++;
        }
    }
    if(index!==0)
    sorting(KeysArray,ValuesArray)
    return [KeysArray,ValuesArray]
}
console.log(keysAndValues({ b: 2,a: 1, c: 3 }))
console.log(keysAndValues({ a: "Apple", c: "Google", b: "Microsoft" }))
console.log(keysAndValues({ key3: undefined ,key1: true, key2: false }))


// Q5
// Create a function that takes in a year and returns the correct century.

// Examples
// century(1756) ➞ "18th century"

// century(1555) ➞ "16th century"

// century(1000) ➞ "11th century"

// century(1001) ➞ "11th century"

// century(2005) ➞ "21st century"
// Notes
// All years will be between 1000 and 2010.
// The 11th century is between 1001 and 1100.
// The 18th century is between 1701-1800.

function century(year){
    var obj={1100:"11th century",1200:"12th century",1300:"13th century",1400:"14th century",1500:"15th century",1600:"16th century",1700:"17th century",1800:"18th century",1900:"19th century",2000:"20th century",2100:"21th century"}
    if(year in obj){
        console.log(obj[year])
    }
    else{
        let remind=year%100;
        year=year-remind+100
        console.log(obj[year])
    }
}
century(1756)
century(1555)
century(1000)
century(1001)
century(2005)

// Q6
// Number of Arrays in an Array
// Return the total number of arrays inside a given array.

// Examples
// numOfSubbarrays([[1, 2, 3]]) ➞ 1

// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3

// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4

// numOfSubbarrays([1, 2, 3]) ➞ 0
function numOfSubbarrays(array){
    let index=0;
    for(let i=0;i<array.length;i++){
        if(typeof(array[i])=="object"){
            index++;
            index=index+numOfSubbarrays(array[i])
        }
    }
    return index;
}
console.log(numOfSubbarrays([[1, 2, 3]]))
console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]))
console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]))
console.log( numOfSubbarrays([1, 2, 3]))


// Q7
// Sum of Number Elements in an Array
// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

// Examples
// numbersSum([1, 2, "13", "4", "645"]) ➞ 3

// numbersSum([true, false, "123", "75"]) ➞ 0

// numbersSum([1, 2, 3, 4, 5, true]) ➞ 15


function numbersSum(array){
    let sum=0
    for(let i=0;i<array.length;i++){
        if(typeof(array[i])=="number"){
            sum=sum+array[i]
        }
    }
    return sum 
}
console.log(numbersSum([1, 2, "13", "4", "645"]))
console.log(numbersSum([true, false, "123", "75"]))
console.log(numbersSum([1, 2, 3, 4, 5, true]))



// Q8 Write a program to validate if the number is from multiples of 2 .
// ex: console.log(isMultiplesOfTwo(2))     output: true
// ex: console.log(isMultiplesOfTwo(512))     output: true
// ex: console.log(isMultiplesOfTwo(513))     output: false
// ex: console.log(isMultiplesOfTwo(255))     output: false

function isMultiplesOfTwo(num){
    if((num%2)==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isMultiplesOfTwo(2))
console.log(isMultiplesOfTwo(512))
console.log(isMultiplesOfTwo(513))
console.log(isMultiplesOfTwo(255))
