        var userNames = ["mike","john","larry"];
        var checkUser = userNames.indexOf("mike") > -1 ? true : false;
        var output = document.getElementById("output");
        
        
        var login = false;
        var outputHolder = "";
        var userOkay = login ? outputHolder = "true" : outputHolder = "false";
        output.innerHTML = userOkay;
        
       // login ? alert("okay") : alert("denied");


        var userNames = ["mike","john","larry"];
        var userInput = prompt("what is your name?");
        var output = document.getElementById("output");
        output.innerHTML = userNames.indexOf(userInput) > -1 ?  "welcome " : "denied";
        output.innerHTML += ", "+ userInput;