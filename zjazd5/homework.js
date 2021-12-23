let soldiers = [];
for (let i = 1; i <= 7; i++) {
    soldiers.push(i);
}

let alive;
let dead;

let i = 0;
while (soldiers.length > 1) {
    alive = soldiers[i];
    soldiers.push(soldiers[i]);
    soldiers.shift();
    dead = soldiers[i];
    soldiers.shift();
    console.log(`${alive} kill ${dead}`);
}

console.log(`${soldiers[0]} remains alive `);