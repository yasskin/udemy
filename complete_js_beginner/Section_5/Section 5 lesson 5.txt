        // prompt heads or tails
        // turn value into number
        // use math random to 0 - 1
        // return back in the output if the user was correct or not
        
        var html = "something went wrong";
        var output = document.getElementById("output");
        var question = prompt("heads or tails");
        var result = question == "heads" ? 1 : 0;
        var randomNumber = Math.floor(Math.random()*2);
        if(result == randomNumber) {
            html = "yes guessed correctly";
        }else{
            html = "you were wrong";        
        }
        output.innerHTML = html;