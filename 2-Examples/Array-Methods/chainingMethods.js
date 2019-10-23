'use strict';

const products = [
    {name: 'BatMobil', price: 500},
    {name: 'RedCape', price: 30},
    {name: 'ArcReactor', price: 600},
    {name: 'Bow', price: 100},
    {name: 'Shield', price: 300}
];

const promos = products
    .filter(product => product.price >= 300)
    .map(product => `The ${product.name} is ${product.price / 2} intergalactic credits!`);


console.log(promos);


