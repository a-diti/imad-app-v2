var button=document.getElementById('counter');
//var counter=0;

button.onclick = function () {
    //creating request object
   /* var request = new XMLHttpRequest();
    
    
    //capture the request and store it
    
    request.onreadystatechange = function () {
        if(request.readystate == XMLHttpRequest.DONE)
        {
            if(request.status == 200){
            var counter = request.responseText;*/
            counter = counter + 1;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
      /*  }
     }
  };
  //make request
  request.open('GET','http://a-diti.imad.hasura-app.io/counter',true);
  request.send(null);*/
    
};