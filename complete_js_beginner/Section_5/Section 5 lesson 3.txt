        var myTime = prompt("what hour is it?");
        
        var output = document.getElementById("output");
        
        if(myTime >= 8 && myTime < 12) {
            output.innerHTML = "Wake up its morning";
        } else if (myTime >= 12 && myTime < 13) {
            output.innerHTML = "go to Lunch";
        } else if (myTime >= 13 && myTime <= 16) {
            output.innerHTML = "Go to work";
        } else if (myTime >16 && myTime < 20) {
            output.innerHTML = "Dinner Time";
        } else if (myTime >= 22) {
            output.innerHTML = "Time to go to sleep";
        } else {
           output.innerHTML = "You should be sleeping";
        }