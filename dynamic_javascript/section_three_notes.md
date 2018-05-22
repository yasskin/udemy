# Source Code AJAX request
## Section 3, Lecture 17

http://codepen.io/discoveryvip/pen/VKgkOG?editors=1010

http://myjson.com/

* Ajax (also AJAX; /ˈeɪdʒæks/; short for asynchronous JavaScript and XML) is a set of web development techniques using many web technologies on the client-side to create asynchronous Web applications. With Ajax, web applications can send data to and retrieve from a server asynchronously (in the background) without interfering with the display and behavior of the existing page. By decoupling the data interchange layer from the presentation layer, Ajax allows for web pages, and by extension web applications, to change content dynamically without the need to reload the entire page. In practice, modern implementations commonly substitute JSON for XML due to the advantages of being native to JavaScript

```
// This is the client-side script.

// Initialize the HTTP request.

var xhr = new XMLHttpRequest();
xhr.open('get', 'send-ajax-data.php');

// Track the state changes of the request.
xhr.onreadystatechange = function () {
    var DONE = 4; // readyState 4 means the request is done.
    var OK = 200; // status 200 is a successful return.
    if (xhr.readyState === DONE) {
        if (xhr.status === OK) {
            alert(xhr.responseText); // 'This is the returned text.'
        } else {
            alert('Error: ' + xhr.status); // An error occurred during the request.
        }
    }
};

```

AJAX Asynchronous JavaScript and XML
```
<div id="output1">People List
    <br>
</div>
<div id="output2"></div>

<script>
    var output1 = document.getElementById('output1');
    var output2 = document.getElementById('output2');

    var hr = new XMLHttpRequest();
    var url = "https://api.myjson.com/bins/1lzpg";

    hr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(hr.responseText);
            console.log(myObj);
            output1.innerHTML = myObj.people[1].firstName;
        }
    }

    hr.open("GET", url, true);
    hr.send();

    console.log(hr);
</script>
```


Source Code with ReadyStates
Section 3, Lecture 20
AJAX Asynchronous JavaScript and XML
```
<div id="output1">People List
    <br>
</div>
<div id="output2"></div>

<script>
    var output1 = document.getElementById('output1');
    var output2 = document.getElementById('output2');

    var hr = new XMLHttpRequest();
    var url = "https://api.myjson.com/bins/1lzpg";

    hr.onreadystatechange = function () {
        if(this.status == 404){
            console.log('not found');
        }else{
        if(this.readyState == 1){
            console.log('setup');
       }
               if(this.readyState == 2){
            console.log('sent');
       }
                   if(this.readyState == 3){
            console.log('processed');
       }     
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(hr.responseText);
            console.log(myObj);
            output1.innerHTML = myObj.people[1].firstName;
        }}
    }


    hr.open("GET", url, true);

    hr.send();

    console.log(hr);
</script>
```
