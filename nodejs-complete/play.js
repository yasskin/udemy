
const fetchData = () => {
  
  const promise = new Promise((resolve, reject)=> {
    setTimeout(()=> {
      resolve('Done');
    }, 1500);
  });

  return promise;
}

setTimeout(()=> {
  console.log('timer is done!');
  fetchData().then(done => {
    console.log(text);
    console.log(text)
    return fetchData()
  })
  .then(text2 => {
    console.log(text2)
  });
}, 2000);

console.log('hello');
console.log('hi');

// const person = {
//   name: 'Noah',
//   age: 48,
//   greet() {
//     console.log('Hi I am ' + this.name);
//   }
// };

// const printName = ({ name, age }) => {
//   console.log(name + age);
// }

// printName(person);

// const { name, age } = person;

// console.log(name, age);

// // const copiedPerson = {...person};
// // console.log(copiedPerson);

// const hobbies = ['sports', 'cooking']

// const [hobby1, hobby2] = hobbies;

// console.log(hobby1, hobby2);

// // for (let hobby of hobbies) {
// //   console.log(hobby);
// // }

// // console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// // console.log(hobbies);

// //hobbies.push('Programming');
// const copiedArray = [...hobbies];
// console.log(copiedArray)

// const toArray = (...args) => {
//   return args
//  }

// console.log(toArray(1,2,3,4));


//person.greet();
//console.log(person);
// objects
// key is also called "property" or "field"
// let name = 'Noah';

// const person = (name) => {
  
//   return (
//     'Name' + name

//   );
// };

// const hobbies = ['sports', 'cooking', 1, true, {}]

// //console.log(person)

// person.greet(name);

// const name = 'Noah';
// let age = 29;
// const hasHobbies = false;

// age = 30;

// // named function + anonymous function
// //const summarizeUser = function (userName, userAge, userHasHobbies) {

// // arrow function
// const summarizeUser = (userName, userAge, userHasHobbies) => {

//   return (
//     'My name is ' + userName +
//     ', I am ' + userAge + 
//     ' and it is ' + userHasHobbies + ' that I have hobbies.'
//   );
// }

// const add = (a, b) => a + b;

// // one argument gets no parenthesis
// const addOneArgument = a => a + 1;

// // no arguments get empty parenthesis
// const addOneArgument = () => 1 + 2;

// console.log(add(1, 2));

// // call the function
// console.log(summarizeUser(name, age, hasHobbies));

