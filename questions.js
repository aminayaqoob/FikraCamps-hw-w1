/** Q1
 * Assume you have the USD prices for this week from Saturday to Thursday
 * in contrast to the Iraqi Dinar as an array
 * arr = [150, 146, 142, 143, 145, 144]
 * calculate the max profit at which day you should buy at and what day should you sell at
 * for this example we buy at Monday an we sell at Wednesday
 */

function BestProfit(arr) {
     arr.sort();
     return arr[5]-arr[0]
 }
console.log(BestProfit([150, 146, 142, 143, 145, 144]));

/** Q2
 * assume you have two time periods
 * for example
 * period1 = 13/5/2021 01:00 to 14/5/2021 01:00
 * period2 = 15/5/2021 01:00 to 16/5/2021 01:00
 * write a function that tells us whether two given periods overlap or not
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "15/5/2021 13:00","16/5/2021 13:00" ) => no overlap
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "14/5/2021 13:00","16/5/2021 13:00" ) => overlap
 */

function CheckOverlap(t1Start,t1End,t2Start,t2End){
    var SplitArray1=t1Start.split(/[/ _]/)
    var SplitArray2=t1End.split(/[/ _]/)
    var SplitArray3=t2Start.split(/[/ _]/)
    var SplitArray4=t2End.split(/[/ _]/)
   
    const a=[2,1,0,3];
    for(let i=0;i<4;i++){    
        if((SplitArray1[a[i]]==SplitArray2[a[i]])&&(SplitArray2[a[i]]==SplitArray3[a[i]])&&(SplitArray3[a[i]]==SplitArray4[a[i]])){
            continue;
        }
        else if(SplitArray2[a[i]]>=SplitArray3[a[i]]){
            return("They are overlapped");
            break;
        }
        return("They are no overlapped");
    

}
}
console.log( CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "15/5/2021 13:00","16/5/2021 13:00"));
console.log( CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "14/5/2021 13:00","16/5/2021 13:00" ));

/** Q3
 * assume you have a shoes factory and the production lines produces shoes as follows
 * L R LL R R RR LL
 * write a function that takes these shoes as in a string
 * shoes = "RLRLRRLL"
 * then return how many pairs in it
 * result = 4
 * example HowManyPairs("RLRLRRLL") => 4
 * example HowManyPairs("RRLLRRRLLR") => 2
 */

function HowManyPairs(shoes) {
     let array1=shoes.split(/[L_]/)  //[ 'R', 'R', 'RR', '', '' ] 
     let array2=shoes.split(/[R_]/)  //[ '', 'L', 'L', '', 'LL' ]  
     let array=[]
     array1.forEach((element)=>{
         if(element!==''){
             array.push(element);
         }
     });                             //[ 'R', 'R', 'RR' ]                            
     array2.forEach((element)=>{
        if(element!==''){
            array.push(element);
        }
    });                             //[ 'R', 'R', 'RR', 'L', 'L', 'LL' ]     
    var obj={};
    for(let i=0;i<array.length;i++){
        var key=array[i];
        obj[key]=(isNaN(obj[key]) ? 1 : obj[key]+1);  //{ RR: 1, RRR: 1, R: 1, LL: 2 }
    }
    
    var LengthObj={};
    for(const key in obj){
        var length=key.length;
        LengthObj[length]=(isNaN(LengthObj[length]) ? 0 : LengthObj[length]+1);  //{ '1': 1, '2': 1 }
    }
    let min=Number.MAX_SAFE_INTEGER;
    let sum=0;
    for(const length in LengthObj){
        if(LengthObj[length]){
            for(const key in obj){
                if(key.length===parseInt(length)){
                    if(obj[key]<min){
                        min=obj[key]
                    }
                }
            }
            sum=sum+(length*min)
        }
    }
    return sum;
}
console.log(HowManyPairs("RLRLRRLL"));
/** Q4
 *    Write a function that takes a string and return JSON of all the letters and its count. check the example to know more
 *    letterCount('abcac') => {a: 2, b: 1, c: 2}
 */

function HowManyLetters(word) {
     var obj={};
     for(let i=0;i<word.length;i++){
        var key=word[i];
        obj[key]=(isNaN(obj[key]) ? 1 : obj[key]+1);
     }
     return obj;

 }
 console.log(HowManyLetters("kkssffoos"));
 

/** Q5
  * Create a function that takes an array of integers as an argument and returns the same array in ascending order. Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.
 
 Examples
 sortArray([2, -5, 1, 4, 7, 8]) ➞ [-5, 1, 2, 4, 7, 8]
 
 sortArray([23, 15, 34, 17, -28]) ➞ [-28, 15, 17, 23, 34]
 
 sortArray([38, 57, 45, 18, 47, 39]) ➞ [18, 38, 39, 45, 47, 57]
 Notes
 The arrays can contain either positive or negative elements.
 The arrays will only contain integers.
 The arrays won't contain duplicate numbers.
 This is a challenge to enhance your ability, using the sort built-in won't enhance your skills.
  */
function sortArray(array){
     var index=0;
     for(let i=0;i<array.length-1;i++){
         if(array[i]>array[i+1]){
             var tmp=array[i];
             array[i]=array[i+1];
             array[i+1]=tmp;
             index++;
         }
     }
     if(index!==0) {
         sortArray(array);}
    return array;
 }
 console.log(sortArray([2, -5, 1, 4, 7, 8]));
 console.log(sortArray([23, 15, 34, 17, -28]));
 console.log(sortArray([38, 57, 45, 18, 47, 39]));
/** Q6
  * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 
 Examples
 minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 
 minMax([2334454, 5]) ➞ [5, 2334454]
 
 minMax([1]) ➞ [1, 1]
  */
function minMax(array){
     array.sort();
     return [array[0],array[array.length-1]];
 }
 console.log(minMax([1, 2, 3, 4, 5]))
 console.log(minMax([2334454, 5]))
 console.log(minMax([1]))


/** Q7
  * Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
 
 Examples
 missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
 
 missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
 
 missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
 Notes
 The array of numbers will be unsorted (not in order).
 Only one number will be missing.
  */
function missingNum(array){
     for(let i=1;i<11;i++){
         if(array.includes(i))continue;
         console.log(i);
     }
 }
 missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]);
 missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]);
 missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]);
/** Q8
  * Write a function that accepts a positive integer between 0 and 999 inclusive and returns a string representation of that integer written in English.
 
 Examples
 numToEng(0) ➞ "zero"
 
 numToEng(18) ➞ "eighteen"
 
 numToEng(126) ➞ "one hundred twenty six"
 
 numToEng(909) ➞ "nine hundred nine"
 Notes
 There are no hyphens used (e.g. "thirty five" not "thirty-five").
 The word "and" is not used (e.g. "one hundred one" not "one hundred and one").
  */
function numToEng(num){
   var obj={0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine",10:"ten",11:"eleven",12:"twelve",13:"thirteen",14:"fourteen",15:"fifteen",16:"sixteen",17:"seventeen",18:"eighteen",19:"nineteen",20:"twenty",30:"thirty",40:"forty",50:"fifty",60:"sixty",70:"seventy",80:"eighty",90:"ninety",100:"one hundred",200:"two hundred",300:"three hundred",400:"four hundred",500:"five hundred",600:"six hundred",700:"seven hundred",800:"eight hundred",900:"nine hundred"}  
   if(num in obj){
       console.log(obj[num])  
    }
    else if(num>100){ 
      let FirstRemind=num %100;
      num=num-FirstRemind
      if(FirstRemind in obj){
        console.log(obj[num],obj[FirstRemind]);
      }
      else{
        let SecondRemind=FirstRemind %10;
        FirstRemind=FirstRemind-SecondRemind;
        console.log(obj[num],obj[FirstRemind],obj[SecondRemind])
      }
    }   
     
 }
 numToEng(18)
 numToEng(0) 
 numToEng(126)
 numToEng(909)
