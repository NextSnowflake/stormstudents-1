'use strict';

const numArray = [20, 30, 15, 60, 10, 70, 20, 100];

console.log('-----find-----');

const firstMatch = numArray.find(num => num > 50);
console.log(firstMatch);


console.log('-----sort-----');

const sortedNumArray = numArray.sort((a, b) => a - b);
console.log(sortedNumArray);
// the sort method is destructive, so it changes the original array
console.log(numArray);

const players = [
    {player: 'CatWoman', score: 40},
    {player: 'IronMan', score: 60},
    {player: 'ScarletWitch', score: 50},
    {player: 'Robin', score: 20},
    {player: 'SuperMan', score: 50},
    {player: 'WonderWoman', score: 80},
    {player: 'Batman', score: 100},
    {player: 'Rescue', score: 60},
    {player: 'SpiderMan', score: 30}
];

players.sort((a, b) => b.score - a.score);
// this is what's happening here: 
// players.sort((a, b) => {
//     if(a.score > b.score) { //negative number: first value higher - should stay in place
//         return -1;
//     } else if (b.score > a.score) { //positive number: second value higher - should be switched
//         return 1;
//     } else { //zero: both are the same, nothing should be done
//         return 0;
//     }
// })
console.log(players);
