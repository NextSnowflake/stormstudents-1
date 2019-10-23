console.log("-----filter-----");

const numArray = [50, 34, 7, 20, 33, 2, 10, 9, 69];

// the filter method is nondestructive, the result has to be stored in a variable
const filteredNumArray = numArray.filter(score => score > 20);
console.log(filteredNumArray);


const users = [
    {name: 'Batman', premium: true}, 
    {name: 'WonderWoman', premium: true}, 
    {name: 'Lara Croft', premium: true}, 
    {name: 'Tank Girl', premium: false}, 
    {name: 'ScarletWitch', premium: false}, 
    {name: 'Rescue', premium: false}, 
    {name: 'Wasp', premium: false} 
];
const premiumUsers = users.filter(user => user.premium);
console.log(premiumUsers);


console.log("-----map-----");

const updatedNumArray = numArray.map(score => score + score/2);
console.log(updatedNumArray);

const products = [
    {name: 'Batarang', price: 100},
    {name: 'Lasso of truth', price: 500},
    {name: 'HK USP Match', price: 200},
    {name: 'Water', price: 5},
    {name: 'Red cape', price: 20},
    {name: 'Arc reactor', price: 400},
    {name: 'Wasp wings', price: 100}
];
const productSale = products.map(product => {
    if(product.price > 100) {
        return {name: product.name, price: product.price / 2}
    } else {
        return product;
    }
});
console.log(productSale);


console.log("-----reduce-----");
const NumOfScore = numArray.reduce((acc, curr) => {
    if(curr > 20) {
        acc++;
        // acc += curr;
    }
    return acc;
}, 0);
console.log(NumOfScore);


const scores = [
    {player: 'Batman', score: 50},
    {player: 'CatWoman', score: 50},
    {player: 'WonderWoman', score: 70},
    {player: 'Batman', score: 70},
    {player: 'CatWoman', score: 20},
    {player: 'CatWoman', score: 30},
    {player: 'WonderWoman', score: 50},
    {player: 'Batman', score: 40},
    {player: 'WonderWoman', score: 30}
];


const playerTotal = (playerName) => {
    let playerTotal = scores.reduce((acc, curr) => {
        if(curr.player === playerName) {
            acc += curr.score;
        }
        return acc;
    }, 0);
    console.log(playerTotal);
};

playerTotal('Batman');
