
var users = [{name: "James",score: 30,tries: 1}, {name: "Mary", score: 110,tries: 4}, {name: "Henry",score: 80,tries: 3}];

var newScore = function(arr, name, amt) {
    arr.forEach(function(val) {
        if (val.name.toLowerCase() === name.toLowerCase()) {
            val.score = val.score + amt;
        }
    });
    return arr;
};

var newTries = function(arr, name) {
    arr.forEach(function(val) {
        if (val.name.toLowerCase() === name.toLowerCase()) {
            val.tries++;
        }
    });
    return arr;
};


var newArray1 = newScore(users, "Henry", 30);
var newArray2 = newTries(users, "Henry");



