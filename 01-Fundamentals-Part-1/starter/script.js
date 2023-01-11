"use strict";
console.log("Hello world!");
let currYear = 2023;
let birthYear = 1986;
// let message = "You are " + (currYear - birthYear) + " years old";
//let message = `You are ${currYear - birthYear} years old`;
// let message = `this is
// a message for
// test`;
// let age = 18;

// let message =
//   age >= 18 ? "you can get a driver lisence" : "you can't get a driver lisence";

// console.log(message);

// function futureReminder(date, message) {
//   let msg = `on ${date} remind me ${message}`;
//   return msg;
// }

// const futureReminder = function (date, message) {
//   let msg = `on ${date} remind me ${message}`;
//   return msg;
// };

// const futureReminder = (date, message) => `on ${date} remind me ${message}`;

// console.log(futureReminder(17, "wake up!"));

const arr = new Array("amir", "marziye");
arr[3] = "vahid";
arr[1] = 4;
arr[2] = true;
console.log(arr);

console.log(arr.unshift("test"));
console.log(arr);

console.log(arr.includes(40));

const amir = {
  gender: "male",
  job: "engineer",
  firstName: "Amir",
  lastName: "Mirza",
};

console.log(amir.job);
console.table(amir);
