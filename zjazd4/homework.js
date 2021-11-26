let data = require("./Data.json");

let dataGet = {
  company: (x) => x.company,
  type: (x) => x.type,
  month: (x) => x.date.getFullYear().toString() + "-" + (x.date.getMonth() + 1).toString(),
  day: (x) => x.date.getDay(),
  cost: (x) => x.cost,
};

function Data(cost, type, company, date) {
  this.cost = cost;
  this.type = type;
  this.company = company;
  this.date = date;
}

function parseToDate(date) {
  date = date.split("-");
  return new Date(
    date[2],
    Number.parseInt(date[1]) - 1,
    date[0]
  );
}
data = data.map((x) => new Data(
  Number.parseFloat(x.cost),
  x.detailsOfPayent.Type,
  x.detailsOfPayent.company,
  parseToDate(x.detailsOfPayent.date)));


function YearSpendings(year) {
  return data.filter(x => x.date.getFullYear() === year).reduce((acc, value) => acc + value.cost, 0);
};

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
};

function companyEarn(company, cost) {
  let unique = data.map(company).filter(onlyUnique).map((x) => {
    return {
      key: x,
      value: 0
    };
  });
  data.forEach((x) => (unique.find((y) => y.key === company(x)).value += cost(x)));
  return unique;
}

function spendingByType(type, cost) {
  let unique = data.map(type).filter(onlyUnique).map((x) => {
    return {
      key: x,
      value: 0
    };
  });
  data.forEach((x) => (unique.find((y) => y.key === type(x)).value += cost(x)));
  return unique;
};

function spendingByMonth(month, cost) {
  let unique = data.map(month).filter(onlyUnique).map((x) => {
    return {
      key: x,
      value: 0
    };
  });
  data.forEach((x) => (unique.find((y) => y.key === month(x)).value += cost(x)));
  return unique;
};

function spendingByDay(day, cost) {
  let unique = data.map(day).filter(onlyUnique).map((x) => {
    return {
      key: x,
      value: 0
    };
  });
  data.forEach((x) => (unique.find((y) => y.key === day(x)).value += cost(x)));
  return unique;
};

let ys = YearSpendings(2014);
console.log(`Money spend in 2014: ${ys.toFixed(2)} \n`);
let ce = companyEarn(dataGet.company, dataGet.cost);
let sbt = spendingByType(dataGet.type, dataGet.cost);
let sbm = spendingByMonth(dataGet.month, dataGet.cost);
let sbd = spendingByDay(dataGet.day, dataGet.cost);

for (let i = 0; i <= 2; i++) {
  console.log(`Company: ${ce[i].key}, earnings: ${(ce[i].value).toFixed(2)} `);
}
for (let i = 0; i <= 4; i++) {
  console.log(`Type: ${(sbt[i].key)}, earnings: ${(sbt[i].value).toFixed(2)} `);
}
for (let i = 0; i <= 12; i++) {
  console.log(`Month: ${(sbm[i].key)}, earnings: ${(sbm[i].value).toFixed(2)} `);
}
for (let i = 0; i <= 6; i++) {
  console.log(`Day: ${(sbd[i].key)}, earnings: ${(sbd[i].value).toFixed(2)} `);
}
