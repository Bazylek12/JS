let tab = [1,6,23,8,4,98,3,7,3,98,4,98];
let suma = 0;
for (let i = 0;i < tab.length;i++) {
    if (i % 2 === 0 ) {
        suma += tab[i];
    } else {
        suma -= tab[i];
    }
}

console.log(suma);
