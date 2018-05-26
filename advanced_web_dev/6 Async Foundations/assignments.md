Assignment: Exercise: countDown Function
 25 minutes to complete   1652 Student Solutions
Your goal is to Implement a function called countDown that accepts a time in seconds. The function will print the time remain to the console every second. Instead of printing 0, the function should print "Ring Ring Ring!!!".

```
var time = 5000;

var countDown = setInterval(function() {
  seconds = time / 1000;
  console.log("time left:", seconds + " seconds and counting.");
  time = time -1000;
    if (time === 0) {
      console.log("Ring Ring Ring!!!")
      clearInterval(countDown);
    }
  }, 1000);
```

```

function countDown(seconds) {
  var intervalId = setInterval(function() {
      seconds--;
      if (seconds > 0) {
        console.log("Timer:", seconds + " seconds");
      } else {
        console.log("Ring Ring Ring!");
        clearInterval(intervalId);
      }
    }, 1000);
}

countDown(3);

```
