Object Source Code
Section 2, Lecture 6
```
<div id="output1"></div><div id="output2"></div>

<script>
    var output1 =document.getElementById('output1');
    var output2 =document.getElementById('output2');  

    var myObj = { "firstName" : "Mike" ,"lastName" : "Smith" , "age": 30  };

    console.log(myObj);

    var name = 'Name';

    output1.innerHTML = myObj.firstName;
    output2.innerHTML = myObj['last' + name];    


</script>
```

Object Array Source Code
Section 2, Lecture 8
```
<div id="output1"></div>
<div id="output2"></div>

<script>
    var output1 = document.getElementById('output1');
    var output2 = document.getElementById('output2');

    var myObj = {
        "people": [
            {
                "firstName": "Mike",
                "lastName": "Smith",
                "age": 30
            },
            {
                "firstName": "John",
                "lastName": "Jones",
                "age": 40
            }]
    };

    console.log(myObj);

    var name = 'Name';
    var i = 0;
    output1.innerHTML = myObj.people[i].firstName;
    output2.innerHTML = myObj.people[i]['last' + name];

    var i = 1;
    output1.innerHTML += myObj.people[i].firstName;
    output2.innerHTML += myObj.people[i]['last' + name];
</script>
```
