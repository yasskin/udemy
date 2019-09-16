        // ask a question
        // random number for random response
        // use switch to create some random responses
        // output the response back with the question
        
        var answer = "something went wrong";
        var output = document.getElementById("output");

        var question = prompt("Ask me anything");
        var randomNumber = Math.floor(Math.random()*6);
        switch (randomNumber){
            case 0:
                answer = "it will work out";
                break;
            case 1:
                answer = "Maybe maybe not";
                break;
            case 2:
                answer = "Probably not";
                break;
            case 3:
                answer = "Highly likely";
                break;
            default:
                answer = "I don't know about that";
        }
        output.innerHTML = "You asked me "+question+"<br>I think that "+answer;
        