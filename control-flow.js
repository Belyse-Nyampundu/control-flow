// //Write a function that accepts an array of strings and console.logs each element using a for loop.
 let colors=["blue","red","white","purple"];
 function looping(colors){
 for(let x=0;x<=colors.length; x++){
      console.log(colors[x]);
 }
 }
  looping(colors);

//  //Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2
  let numbers=[2,4,6,8];
  function evenNumbers(numbers){
     numbers.forEach(number=>console.log(number*2))
  }
evenNumbers(numbers)

 //Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
 let nums=[1,2,3,4,5,6]
 let emptyArray=[]
 function passArray(nums){
   
    for(i=0;i<nums.length;i++){
    if(i===4){
        break;
    }
     emptyArray.push(nums[i]*8)
    }
    for(i=nums.length -2;i<nums.length;i++){
        if(i===nums.length -2){
       
        }
        emptyArray.push(nums[i]+5)
    }
    console.log(emptyArray)
 }
 passArray(nums);
 
//  //Write a function that takes in the following array 
// //  and use a while loop to iterate and break when the
// //  item is equal to the fourth index
 function number(){
     let arrNum = [1,2,3,4,5,6,7,8,9];
     let i=0
     while(i < arrNum.length){
         console.log(i)
         i++
         if(i===4){
             break;
         }
     }
 }
number()

// //Write a function that takes in a an array of strings and use a continue statement 
// // when the item is at the second index
 function fruits(){
     let fruits= ['apple','plum','banana','strawberries','kiwi']
     for(let a=0;a< fruits.length; a++){
         if(a===2){
             continue;
         }
         console.log(fruits[a])
     }
 }
 fruits();
