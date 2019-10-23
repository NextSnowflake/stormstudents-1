'use strict';

const getTodos = resource => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data)
            } else if (request.readyState === 4) {
                reject('error getting resource');
            }
        });
        
        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.open('GET', resource);
        request.send();
        
    });
};

console.log(1);
console.log(2);

getTodos('./Todos/batmans.json').then(data => {
    console.log('promise one resolved:', data);
    return getTodos('./Todos/catWoman.json');
}).then(data => {
    console.log('promise two resolved:', data);
    return getTodos('./Todos/wonderWoman.json');
}).then(data => {
    console.log('promise three resolved:', data);
}).catch(err => {
    console.log('promise rejected:', err);
});

console.log(3);
console.log(4);



// callback hell!!!
// getTodos('./Todos/batman.json', (err, data) => {
//     console.log(data);
//     getTodos('./Todos/catWoman.json', (err, data) => {
//         console.log(data);
//         getTodos('./Todos/wonderWoman.json', (err, data) => {
//             console.log(data);
//         });
//     });
// });


// promise example 
// const getSomething = () => {
    
//     return new Promise((resolve, reject) => {
//         resolve('some data');
//         // reject('some error');
//     });
// };

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

