let tab = [8,6,23,8,4,98,3,7,3,98,4,98];

let max = tab[0];
let index = [];
for (let i = 0;i < tab.length; i++) {
    if (max <= tab[i]) {
        max = tab[i];
    } 
}
for (let i = 0;i < tab.length;i++) {
    if (tab[i] === max) {
    index.push(i);
    }
}
console.log(index);