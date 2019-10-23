class FavoriteAnimal {
    constructor(type, legs, mammal, activity) {
        this.type = type;
        this.legs = legs;
        this.mammal = mammal;
        this.activity = this.does(activity);
        this.sightings = 0;
        this.store();

    }

    does(doActivity) {
        return `The ${this.type} love to ${doActivity}.`;
    }

    store() {
        myFavoriteAnimalArr.push(this);
    }

    incrSightingCount() {
        this.sightings += 1;
        console.log(`I saw ${this.sightings} ${this.type} so far in my life.`);
        return this;
    }
}
const myFavoriteAnimalArr = [];

const fox = new FavoriteAnimal('Foxes', 4, true, 'steal chickens');
const owl = new FavoriteAnimal('Owls', 2, false, 'say "Hoo-hoo"');
const wolverine = new FavoriteAnimal('Wolverines', 4, true, 'be a dick');

console.log(myFavoriteAnimalArr)

/* fox.incrSightingCount().incrSightingCount().incrSightingCount().incrSightingCount().incrSightingCount();
owl.incrSightingCount().incrSightingCount().incrSightingCount().incrSightingCount().incrSightingCount().incrSightingCount(); */

console.log(fox.does('walk in the snow'));



//just trying out the 'every' method.
function pureTypes(favoriteAnimalArr) {
    const animalArr = [];

    const pushAnimal = element => animalArr.push(element.type);

    favoriteAnimalArr.every(pushAnimal);

    return console.log(animalArr);
};

pureTypes(myFavoriteAnimalArr)

