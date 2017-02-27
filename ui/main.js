console.log('Loaded!');
//change html content
var element=document.getElementById('main-text');
element.innerHTML= 'something new';

//move the image
var img=document.getElementById('madi');
var marginLeft = 0;
function marginRight(){
    
    marginLeft = marginLeft+  5;
      img.style.marginLeft = marginLeft +'px';
}

img.onclick = function () {
    var interval = setInterval(marginRight,50);
  

    
};