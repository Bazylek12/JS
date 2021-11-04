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

let array = [1,6,23,8,5,4,8,3,7];
let size = array.length-1;
function reverseArray () {
    newArray = new Array()
    for (let i = size; i >= 0;i --) {
        newArray.push(array[i]);
    };
    console.log(newArray);
};
reverseArray(array);