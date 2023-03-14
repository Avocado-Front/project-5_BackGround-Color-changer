let back = document.querySelector('.container');

let redv,greenv,bluev;

setInterval(function(){
    redv = Math.floor(Math.random()*255);
    greenv = Math.floor(Math.random()*255);
    bluev = Math.floor(Math.random()*255);
    back.style.backgroundColor = 'rgb'+'('+redv+','+greenv+','+bluev+')'
},2000);