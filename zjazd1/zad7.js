let tab = [1,6,23,8,4,98,3,7,3,98,4,98];
let suma = 0;
let parzyste =[];
let srednia = 0;

for (let i = 0;i < tab.length;i++) {
    if (tab[i]%2 === 0) {
        suma += tab[i];
        parzyste.push(i);
    }
}
srednia = suma / parzyste.length;
console.log(suma);
console.log(parzyste);
console.log(srednia);