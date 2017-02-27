console.log('Loaded!');
//change html content
var element=document.getElementById('main-text');
element.innerHTML= 'something new';

//move the image
var img=document.getElementById('madi');
img.onclick = function () {
    img.style.marginLeft = '100px';

    
};