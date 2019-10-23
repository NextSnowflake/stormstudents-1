'use strict';

// store data
localStorage.setItem('name', 'fox');
localStorage.setItem('legs', 4);


// get data
let name = localStorage.getItem('name');
let legs = localStorage.getItem('legs');


// update data
localStorage.name = 'chicken';
localStorage.setItem('legs', '2');
localStorage.setItem('wings', '2');

console.log(name, legs);
console.log(localStorage.name, localStorage.legs);


// delete data
localStorage.removeItem('legs');
console.log(localStorage.legs);

localStorage.clear();
console.log(localStorage);


// Stringifying and parsing data
const heroes = [
    {name: 'Batman', alias: 'Bruce Wayne'},
    {name: 'Black Widdow', alias: 'Natasha Romanoff'},
    {name: 'Rescue', alias: 'Pepper Potts'},
    {name: 'Wonder Woman', alias: 'Diana'}
];

localStorage.setItem('heroes', JSON.stringify(heroes));
console.log(localStorage);

const storedHeroes = localStorage.getItem('heroes');
console.log(JSON.parse(storedHeroes));











