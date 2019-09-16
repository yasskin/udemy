        var myTime = prompt("What are you doing?");
        var output = document.getElementById("output");
        var html;
        
        switch (myTime) {
            case "Get Up":
                html = "8:00AM";
                break;
            case "Lunch":
                html ="12:00PM";
                break;
            case "Dinner":
                html ="6:00PM";
                break;
            default:
                html = "Not found";
        }
        
        output.innerHTML = html;