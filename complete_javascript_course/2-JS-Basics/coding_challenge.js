
// coding CHALLENGE

var years = [1960, 1970, 1980, 1990];

function printFullAge(years) {
  var ages = [];
  var fullAges = [];

  for (var i = 0; i < years.length; i++) {
      ages[i] = 2016 - years[i];
  }

  for (i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
      console.log('Person ' + (i + 1) + ' is of full age: ' + ages[i] + " years old.");
      fullAges.push(true);
    } else {
      console.log('Person ' + (i + 1) + ' is underage: ' + ages[i] + " years old.");
      fullAges.push(false);
    }
  }
  return fullAges;
}

var full_1 = printFullAge(years);
console.log(full_1);
var full_2 = printFullAge([2012, 1915, 1999]);
console.log(full_2);
