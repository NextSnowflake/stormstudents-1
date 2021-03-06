// # Constructor & Prototype 
console.log("-----1-----");
// #### 1. Hero
// * Create a constructor function called `Hero` That will accept a variable name as an argument.
// * Use the Hero constructor to create an object myHero with the name 'Link'.
class Hero {
    constructor(name, superpower, alias) {
        this.name = name;
        this.superpower = superpower;
        this.alias = alias;
    }
}
let Link = new Hero("Link", "sword fighting", "no alias");
console.log(Link);


console.log("-----2-----");
// #### 2. Playlist
// Create a constructor function called `Song`. `Song` should take in two arguments, title and artist, which should both be added as properties when the `Song` constructor function is used. The `Song` function should also have a method called play on its prototype. When called, the play function should console.log the name of that specific song preceded by the word 'Playing:'.

class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
    }
    play() {
        return console.log(`Playing: ${this.title} - ${this.artist}`);
    }
}
let song1 = new Song('Time', 'Pink Floyd');
let song2 = new Song('Sweet Life', 'Frank Ocean');
let song3 = new Song('Intro', 'M83');
let song4 = new Song('Bloom', 'ODESZA');
let song5 = new Song('The Less I Know The Better', 'Tame Impala');


song4.play(); //logs 'Playing: Bloom - ODESZA'
song2.play(); //logs 'Playing: Sweet Life - Frank Ocean'
song3.play(); //logs 'Playing: Intro - M83'



console.log("-----3-----");
// #### 3. Person
// * Create a constructor function called `Person` That will accept the arguments name and occupation.
// * Use Person.prototype to add a method whoAreYou that will return: My name is [the person's name] and I am a [the person's occupation].
// * Use the person constructor to create an object person1 with the name Michaelangello and occupation Ninja.
// * Use the whoAreYou method to log to the console person1's name and occupation.
class Person {
    constructor(name, occupation) {
        this.name = name;
        this.occupation = occupation;
    }
}
Person.prototype.whoAreYou = function() {
    console.log(`My name is ${this.name} and I am a ${this.occupation}.`);
}
let Michaelangello = new Person('Michaelangello', 'Ninja');
console.log(Michaelangello);
Michaelangello.whoAreYou();


console.log("-----4-----");
// #### 4. 
// Create a constructor function called arrayString that will take an array as an argument. This constructor will join the array to a single string, and store the string in a variable called str. For example, the following code:
// ```javascript
// let joined = new arrayString(['c','a','t']);
// console.log(joined);
// // will log to the console:
// { str: 'cat' }
// ```
class ArrayString {
    constructor(myArr) {
        this.str = myArr.join('')
    }
}
let favoriteAnimal = new ArrayString(['f', 'o', 'x']);
console.log(favoriteAnimal);


console.log("-----5-----");
// #### 5.  Calendar App
// As part of a calendar app, you will need to create an object that, for any given month, will store all the days in that month.

// * Create a constructor called Day(year, month, day) that will be given a number each for the month, the day and the year.
// * Create a function called getDaysinMonth(year, month) that will be given a number each for the month and the year. This function will return array of Day objects, which will be equal in length to the number of days in the given month.

class Day {
    constructor(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.daysInMonth = [];
        // this.daysInMonth = getDaysInMonth() 
    }
    getDaysInMonth() {
        let myDays = new Date(this.year, (this.month), 0);
        for (let i = 1; i <= myDays.getDate(); i++) {
                this.daysInMonth.push({'month': this.month, 'day': i, 'year': this.year})
        }; 
    }
    // getDaysInMonth() {
    //     let daysArr = []
    //     let myDays = new Date(this.year, (this.month + 1), 0);
    //     for (let i = 1; i <= myDays.getDate(); i++) {
    //             daysArr.push({'month': this.month, 'day': i, 'year': this.year})
    //     }; 
    //     return daysArr;
    // }
}
let dayInJune2019 = new Day(2019, 6, 25);
dayInJune2019.getDaysInMonth();
console.log(dayInJune2019);
