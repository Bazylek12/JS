let tab = ["Karol",
"Adam", "Rogowski", "Politechnika", "Super", "Weekend"];
let najdluzszy = 0;
let wyraz;
for (let i = 0; i < tab.length; i++) {
    if (tab[i].length >= najdluzszy) {
        najdluzszy = tab[i].length;
        wyraz=tab[i];
    }
}
console.log(wyraz,"-", najdluzszy);