// Promises
// instantiated with a constructor
// the promise has
// a promise that this object will eventually have a value, a resolve or reject value
// the promise will be in a pending state until th

// const { reject } = require('async');

// MDN web docs: Promise
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// const myPromise = new Promise((resolve, reject) => {
//   if (false) {
//     setTimeout(() => {
//       resolve('I have succeeded');
//     }, 1000);
//   } else {
//     reject('I have failed');
//   }
// });

// myPromise
//   .then((value) => value + '!!!!')
//   .then((newValue) => console.log(newValue))
//   .catch((rejectValue) => console.log(rejectValue));

const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve('I have succeeded');
    }, 1000);
  } else {
    reject('I have failed');
  }
});

myPromise
  .then((value) => value + '!!!!')
  .then((newValue) => console.log(newValue))
  .catch((rejectValue) => console.log(rejectValue));

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => {
    const firstUser = users[0];
    console.log(firstUser);
    return fetch(
      'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
    );
  })
  .then((response) => response.json())
  .then((posts) => console.log(posts))
  .catch((error) => console.log(error));

const myAsyncFunction = async () => {
  try {
    const usersResponse = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    const users = await usersResponse.json();
    const firstUser = users[0];

    console.log(firstUser);

    const postsResponse = await fetch(
      'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
    );
    const posts = await postsResponse.json();

    console.log(posts);
  } catch (err) {
    console.log('There was an error.');
  }
};
