let years = [1974, 1900, 1985, 2000, 2012];
let year;
for (let i = 0;i < years.length;i ++) {
    year = years[i];
    if (year%4 === 0 && (year%100 !== 0 || year%400 === 0)) {
        console.log(year, "był rokiem przestepnym.");
    }
}
