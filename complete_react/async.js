// Promises
// instantiated with a constructor
// the promise has
// a promise that this object will eventually have a value, a resolve or reject value
// the promise will be in a pending state until th

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
  .then(value => value + '!!!!')
  .then(newValue => console.log(newValue))
  .catch(rejectValue => console.log(rejectValue));
