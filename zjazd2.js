// Zad 1

// let array = [1,6,23,8,5,4,8,3,7];
// function Sum(array) {
//     let sum = 0;
//     for (let i = 0;i < array.length; i++) {
//         sum += array[i];
//     }
//     console.log(sum);
// };
// Sum(array);

// Zad 2

// let array = [1,6,23,8,5,4,8,3,7];
// function sumOfFirstAndLastIndex(array) {
//     let lastElement = array.pop();
//     console.log(array[0] + lastElement);
// };
// sumOfFirstAndLastIndex(array);

// zad 3

// function factorial(x) {
//     n = 1;
//     for (let i = x;i > 0;i--) {
//         n = n * x--;
//     }
//     console.log(n);
// };
// factorial(7);

// zad 4

// let array = [1,6,23,8,5,4,8,3,7];
// let size = array.length-1;
// function reverseArray () {
//     newArray = new Array()
//     for (let i = size; i >= 0;i --) {
//         newArray.push(array[i]);
//     };
//     console.log(newArray);
// };
// reverseArray(array);

// zad 5

// let array = [1,3,4,1,0,3];
// function subIndex() {
//   newArray = new Array();
//   sum1 = 0;
//   sum2 = 0;
//   sum3 = 0;

//   for(let i = 0; i < array.length; i++){
//       if (i=1) {
//         sum1=array[i]+array[i-1];
//       }
//       if (i=3){
//           sum2=array[i]+array[i-1];
//       }
//       if (i=5){
//             sum3=array[i]+array[i-1];
//     }
//       newArray.push(sum1,sum2,sum3);
//   }
  
//   console.log(newArray);
// }
// subIndex(array);

// zad 6 

// let array = [1,3,4,1,0];

// function subIndex() {
//     newArray = new Array();
//     sum1 = 0;
//     sum2 = 0;
//     sum3 = 0;
//     sum1=array[0]+array[1];
//     sum2=array[2]+array[3];
//     sum3=array[4]+array[4];
//     newArray.push(sum1,sum2,sum3);

//     console.log("newArr: ",newArray);
// }
// subIndex(array);


// zad 7


// let array = [1,6,23,8,4,8,3,7];

// function randomIndex() {
//   return array[Math.floor(Math.random() * array.length)];
// }
// console.log(randomIndex());

// zad 8

// let array = [1,6,23,8,4,8,3,7];

// function randomInt(array,n) {
//     newArray = new Array();
//     let random = 0;
//     let min = 0;

//   for(let i = 0; i < n; i++){
//     random = array[Math.floor(Math.random() * array.length)];
//     newArray.push(random);
//   }

//   min = Math.min(...newArray)
  
//   console.log("newArray: ",newArray)
//   console.log("min: ",min)
// }
// randomInt(array,12)

// zad 9

// function currentDay(){

//     let today = new Date();
//     let weekDay = today.getDay();
//     let names = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    
// console.log("Dzisiaj jest:",names[weekDay]);
// }
// currentDay();


// zad 12

// function whenIsFriday() {

//     let today = new Date();
//     let weekDay = today.getDay();
//     let timeLeft = 5 - weekDay;

//     if (timeLeft > 0){
//         console.log("Do Piątku zostało: "+timeLeft+" dni");
//     }else if (timeLeft < 0){
//         timeLeft=7+timeLeft;
//         console.log("Do Piątku zostało: "+timeLeft+" dni");
//     }else if (timeLeft == 0){
//         console.log("Dzisiaj jest piątek");
//     }
// }
// whenIsFriday();

// zad 13 

// function operations(x, y) {

//     let sum = x + y;
//     let sub = x - y;
//     let mul = x * y;
//     let div = x / y;
 
//     let result = {
//         result_sum: sum,
//         result_sub: sub,
//         result_mul: mul,
//         result_div: div
//     }

//   console.log("Inputs: "+x,y);
//   console.log(result);
//  }
// operations(5,5);