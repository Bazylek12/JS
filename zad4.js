let tab = [8,6,23,8,4,98,3,7,3,98,4,98];

let min = tab[0];
let max = tab[0];

for (let i = 0;i < tab.length; i++) {
    if (max <= tab[i]) {
        max = tab[i];
    }  if (min >= tab[i]) { 
        min = tab[i];
    } 
}
console.log("Najwieksza -",max,"Najmniejsza - ", min);