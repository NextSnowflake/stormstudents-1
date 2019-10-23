'use strict'

const now = new Date();
console.log(now);
// 2019-10-15T08:39:07.830Z


// year, months, day, time
const year = now.getFullYear();
console.log(year);
// 2019

const month = now.getMonth();
console.log(`Index of the month: ${month}`);
// Index of the month: 9

const date = now.getDate();
console.log(date);
// 15


// Week starts with Sunday
const dayOfWeek = now.getDay();
console.log(`Index of the day of the week: ${dayOfWeek}`)
// Index of the day of the week: 2

const hours = now.getHours();
console.log(hours);
// 10

const minutes = now.getMinutes();
console.log(minutes);
// 39

const seconds = now.getSeconds();
console.log(seconds);
// 7


// since 12AM 01.01.1970
const timestamp = now.getTime();
console.log(timestamp);
// 1571128747830


// date strings
console.log(now.toDateString());
// Tue Oct 15 2019
console.log(now.toTimeString());
// 10:39:07 GMT+0200 (Central European Summer Time)
console.log(now.toLocaleString());
// 10/15/2019, 10:39:07 AM
console.log(now.toLocaleTimeString());
// 10:39:07 AM
console.log(now.toLocaleDateString());
// 10/15/2019



console.log('---------');
const myBirthday = new Date('Sat Oct 26 2019 00:00:00');
console.log(myBirthday);
// 2019-10-25T22:00:00.000Z

const myBirthdayTimestamp = myBirthday.getTime();
const daysUntil = Math.ceil((myBirthdayTimestamp - timestamp) / 24 / 60 / 60 / 1000) ;
console.log(`${daysUntil} days until my birthday!`);
// 11 days until my birthday!


// converting timestamps into date objects
const unknownTimestamp = 21571128747830;
const intoTheFuture = new Date(unknownTimestamp);
console.log(intoTheFuture);
// 2653-07-24T20:12:27.830Z
