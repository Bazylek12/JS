let balls = [1,2,1,1,1,1,1,1];
const arr = balls.sort(() => 0.5 - Math.random());

let tab1 = [];
let tab2 = [];
let tab3 = [];
let highest = [];

tab1 = arr.slice(0, 3);
tab2 = arr.slice(3, 6);
tab3 = arr.slice(6, 8);

let sum1 = tab1.reduce((acc, sum) => acc + sum, 0);
let sum2 = tab2.reduce((acc, sum) => acc + sum, 0);

if (sum1 === sum2) {
    if (tab3[0] > tab3[1]) {
        highest.push(tab3[0]);
    } else {
        highest.push(tab3[1]);
    }
} else if (sum1 > sum2) {
    if (tab1[0] === tab1[1]) {
        highest.push(tab1[2]);
    } else if (tab1[0] > tab1[1]) {
        highest.push(tab1[0]);
    } else {
        highest.push(tab1[1]);
    }
} else {
    if (tab2[0] === tab2[1]) {
        highest.push(tab2[2]);
    } else if (tab2[0] > tab2[1]) {
        highest.push(tab2[0]);
    } else {
        highest.push(tab2[1]);
    }
}

console.log(arr);
console.log(`The heavier ball is in the ${arr.indexOf(parseInt(highest))+1} position in the array`);