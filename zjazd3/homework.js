let data = require("./Data.json");

let keyGetters = {
    company: (x) => x.company,
    type: (x) => x.type,
    monthYear: (x) =>
      x.date.getFullYear().toString() + "-" + (x.date.getMonth() + 1).toString(),
    dayOfTheWeek: (x) => x.date.getDay(),
    cost: (x) => x.cost,
  };

function Data (cost, type, company, date) {
    this.cost = cost;
    this.type = type;
    this.company = company;
    this.date = date;
}

data = data.map((x) => new Data(Number.parseFloat(x.cost),x.detailsOfPayent.Type,x.detailsOfPayent.company,parseToDate(x.detailsOfPayent.date)));

function parseToDate(dateInString) {
    dateInString = dateInString.split("-");
    return new Date(
      dateInString[2],
      Number.parseInt(dateInString[1]) - 1,
      dateInString[0]
    );
  }
let newObj = {};
for (i in data) {
    let item = data[i];
        if(newObj[item.key[0]] === undefined) {
            newObj[item.key[0]] = 0;
        }
        newObj[item.key[0]] += item.value;
}

let result = {};
result.rows = [];
for (i in newObj) {
    result.rows.push({'key': i, 'value': newObj[i]});
}
console.log(result);
// function getYearSpendings(year) {
//     return data.filter((x) => x.date.getFullYear() === year).reduce((x, y) => x + y.cost, 0);
// }
// let ys = getYearSpendings(2014);
// console.log(`Money spend in 2014: ${ys.toFixed(2)}`);

// function CompanyEarnings(company, value) {
//      return data.forEach((x) => (data.find((y) => y.company === company(x)).cost += value(x)));
    
// }
// let ya = CompanyEarnings(this.company, this.cost);
// console.log(ya);
//console.log(data.forEach((x) => console.log(x.company, x.cost) ));



// function onlyUnique(value, index, self) {
//     return self.indexOf(value) === index;
//   }
  
//   function agregate(data, keyFn, valueFn) {
//     let uniques = data
//       .map(keyFn)
//       .filter(onlyUnique)
//       .map((x) => {
//         return { key: x, value: 0 };
//       });
 
//     data.forEach(
//       (x) => (uniques.find((y) => y.key === keyFn(x)).value += valueFn(x))
//     );
//     return uniques;
//   }
// let a = agregate(data, keyGetters.company, keyGetters.cost);
// console.log(a)
//   let unique = [...new Set(data.map(item => item.company))];
//   console.log(unique)

// let uniques = data.filter(onlyUnique).map((x) => {
//     return { key: x, value: 0};
// });
// data.forEach((x) => (uniques.find((y) => y.key)));
// console.log(uniques);

// function agregate(data, keyFn, valueFn) {
//   let uniques = data
//     .map(keyFn)
//     .filter(onlyUnique)
//     .map((x) => {
//       return { key: x, value: 0 };
//     });

//   data.forEach(
//     (x) => (uniques.find((y) => y.key === keyFn(x)).value += valueFn(x))
//   );
//   return uniques;
// }
// agregate(data, x.company, x.cost);

// function getYearSpendings(financialData, year) {
//   return financialData
//     .filter((x) => x.date.getFullYear() === year)
//     .reduce((x, y) => x + y.cost, 0);
// }



// let data = getData("./Data.json");
// data = data.map(
//   (x) =>
//     new Operation(
//       Number.parseFloat(x.cost),
//       x.detailsOfPayent.Type,
//       x.detailsOfPayent.company,
//       parseToDate(x.detailsOfPayent.date)
//     )
// );

//data.forEach((p,i) => console.log(i, p.cost));

// const personsJson = `{"1":{"firstName":"Jan","lastName":"Kowalski"},"2":{"firstName":"Justyna","lastName":"Kowalczyk"}}`;
// const personsObject = JSON.parse(personsJson);
// const personsMap = new Map(Object.entries(personsObject));
// for (const key of personsMap.keys()) {
//     console.log(key)
// }



   
// let keyGetters = {
//   company: (x) => x.company,
//   type: (x) => x.type,
//   monthYear: (x) =>
//     x.date.getFullYear().toString() + "-" + (x.date.getMonth() + 1).toString(),
//   dayOfTheWeek: (x) => x.date.getDay(),
// };

// let valueGetters = {
//   cost: (x) => x.cost,
// };

// function Operation(cost, type, company, date) {
//   this.cost = cost;
//   this.type = type;
//   this.company = company;
//   this.date = date;
// }



// function getData(address) {
//   return require(address);
// }


// function onlyUnique(value, index, self) {
//   return self.indexOf(value) === index;
// }
// onlyUnique();


// let ys = getYearSpendings(data, 2014); // pass value to funcion, not hordcode it inside it

// let spendingsPerCompany = agregate(data, keyGetters.company, valueGetters.cost);

// let spendingsPerTransaction = agregate(
//   data,
//   keyGetters.type,
//   valueGetters.cost
// );

// let spendingsPerMonthYear = agregate(
//   data,
//   keyGetters.monthYear,
//   valueGetters.cost
// );

// let spendingsPerDay = agregate(
//   data,
//   keyGetters.dayOfTheWeek,
//   valueGetters.cost
// );
// let i = 0;
// console.log(ys);
// console.log(spendingsPerCompany);
// console.log(spendingsPerTransaction);  
// console.log(spendingsPerMonthYear);
// console.log(spendingsPerDay)