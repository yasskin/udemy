        var userNames = ["mike","john","larry"];
        var userInput = prompt("what is your name?");
        var output = document.getElementById("output");
        var htmlOutput = "";
        if(userNames.indexOf(userInput) > -1) {
             alert("hello");
            htmlOutput = "welcome it was true";
            var age = prompt("age");
            htmlOutput += age > 18 ? " you are over 18" : " you are under 18";
        } else {
            htmlOutput =  "denied was not true ";   
        }
        output.innerHTML = htmlOutput + ", "+ userInput; 