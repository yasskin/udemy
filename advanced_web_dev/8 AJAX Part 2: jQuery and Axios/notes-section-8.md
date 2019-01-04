## AJAX with jQuery

# Making A Request and Parsing JSON

```
$.getJSON('/my/url', function(data) {

  });

$.ajax
$.get
$.post
$.getJSON
```

```
$.ajax({
  method: "GET",
  url: "some.api.com",
  })
  .done(function(res) {
    console.log(res);
  })
  .fail(function() {
    //do something
  })
```

## axios.get - makes requests - creates an XMLHttp Request under the hood
```
axios.get(url)
  .then(function(res) {
    console.log(res.data);
  })
  .catch(function(e){
    console.log(e);
  })
```
```
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <button id="getDataBtn">Get Data</button>
```
```  
  var url = "https://opentdb.com/api.php?amount=1";

$("#getDataBtn").click(function(){
  console.log("calling axios now");

  axios.get(url)
  .then(function(res){
    console.log(res.data.results[0].question);    
        })
  .catch(function(){
    console.log("ERR");
  })  
});
```
