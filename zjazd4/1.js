let data = require("./Data.json");

let dataGet = {
  company: (x) => x.company,
  type: (x) => x.type,
  month: (x) => x.date.getFullYear().toString() + "-" + (x.date.getMonth() + 1).toString(),
  day: (x) => x.date.getDay(),
  cost: (x) => x.cost,
};
console.log(day);