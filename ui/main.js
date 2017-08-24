console.log('Loaded!');

//change the text of main-text div

var element=document.getElementById('main-text');

element.innerHTML='new value';

//move image

var madi= document.getElementById('madi');
madi.onclick=function(){
    madi.style.marginleft='100px';
};