var button=document.getElementById('counter');
button.onclick=function(){
    //creating request object
    var request = new XMLHttpRequest();
    
    
    //capture the request and store it
    
    request.onreadystatechange = function(){
        if(request.readystate == XMLHttpRequest.DONE)
        {
            if(request.status == 200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
     }
  };
  //make request
  request.open('GET','http://a-diti.imad.hasura-app.io/',true);
  request.send(null);
    
};