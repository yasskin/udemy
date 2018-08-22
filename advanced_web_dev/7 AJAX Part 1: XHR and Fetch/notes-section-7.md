# AJAX

## Asynchronous JavaScript and XML

* AJAX is not a library, it's not a framework, a technology, not a tool

* AJAX is just an approach to web development (that's it)

* XMLHTTP Requests

* Ajax : A New Approach to Web Applications (2005) - Identifying and naming a trend

* A different way to structure apps using existing technology

* Adaptive Path AJAX : A new approach to Web Applications - Feb 2005, by Jesse James Garrett
http://adaptivepath.org/ideas/ajax-new-approach-web-applications/

* This led to "single page apps" and frameworks that help manage single-page Applications

* Making Requests with JavaScript
1. XMLHTTP Request
2. The Fetch API (a newer approach)
3. 3rd Party Libraries: jQuery, Axios, etc.

* AJAX makes request through JavaScript

## XML and JSON

* Both are data formats.

* Data Formats - API's respond with pure data, not structure. They use data formats like XML and JSON

* XML - Extended Markup Language - syntactically similar to HTML but it does not describe presentation like HTML
```
<pin>
  <title>Adorable Main Coon</title>
  <author>Cindy S.</author>
  <num-saves>18</num-saves>
</pin>
```
* JSON - JavaScript Object Notation - looks like JavaScript objects
```
'pin': {
  'title':'Adorable Main Coon',
  'author': 'Cindy S.',
  'num-saves': 800
}
```
* JSON is popular because it works well with JavaScript

* JSONView chrome extension
https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en

75. Making Our First Request with AJAX

Request from Github Zen API
https://api.github.com/zen

* XMLHTTP Request - XHR for short. The original way of making requests from the browser.

```
var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
 if(XHR.readyState == 4) {
   if(XHR.status == 200) {
    console.log(XHR.responseText);    
   } else {
     console.log("There was a problem");
   }
 }
}

XHR.open("GET", "https://api.github.com/zen");
XHR.send();
```

## Random Dog Pictures AJAX STARTER
https://codepen.io/noah-yasskin/pen/ERWVyV?editors=1111

//

## Coindesk api

https://www.coindesk.com/api/

* BPI real-time data

https://api.coindesk.com/v1/bpi/currentprice.json

AJAX Bitcoin

## Fetch API (The XHR Update / Replacement)

* more powerful, better syntax

### This is how you make Fetch happen
```
fetch(url)
.then(function(res) {
  console.log(res);
})
.catch(function(error) {
  console.log(error);
});
```
### Parsing JSON with Fetch
```
fetch(url)
.then(function(response) {
  return response.json();
})
.then(function(data){
  console.log(data);
  })
.catch(function() {
  console.log("problem!");
});
```
### Fetch Options
```
fetch(url, {
  method: 'POST',
  body: JSON.stringify({
    name: 'blue',
    login: 'bluecat',
  })
})
.then(function(response){
  console.log(response);
  return response.json();
  })
.then(function(data) {
  // do something
})
.catch(function(error) {
  // handle error
});
```




































//
