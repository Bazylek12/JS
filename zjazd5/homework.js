let soldiers = [];
for (let i = 1; i <= 7; i++) {
    soldiers.push(i);
}
<<<<<<< HEAD

=======
>>>>>>> 7671205 (zmiany)
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

<<<<<<< HEAD
console.log(`${soldiers[0]} remains alive `);
=======
console.log(`${soldiers[0]} remains alive `);

// // populate the array for 100 people
// var team = new Array();
// for (var i = 1; i <= 100; i++) {
//  team[i - 1] = i;
// }

// var current;
// var next;

// var j = 0.
// while (team.length > 1) { // loop until only 1 exists
//  current = team[j];
//  team.push(team[j]); // move current to the end
//  team.shift(); // remove from existing
//  next = team[j];
//  team.shift(); // delete next
//  document.writeln("Number " + current + " kills number " + next + "<br />");
// }
// document.writeln("The last one is number " + team[0]);
// //alert(team[0]);
>>>>>>> 7671205 (zmiany)
