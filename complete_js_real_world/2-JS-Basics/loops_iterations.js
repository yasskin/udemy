////////////////////////
// Loops and Itterations

// the for Loops

for (var i = 0; i < 10; i++) {
  console.log(i);
}

/*
0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
9, true, print 9, update i to 10
10, FALSE, end loop!
*/

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
/*
// for loops
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (var i = names.length -1; i >= 0; i-- ) {
  console.log(names[i]);
}
*/

// while loops
var i = 0;
while(i < names.length) {
  console.log(names[i]);
  i++;
}

// break and continue

for(var i = 1; i <= 5; i++) {
  console.log(i);
  if (i === 3) {
    break;
  }
}

for(var i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
