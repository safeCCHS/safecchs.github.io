import anime from js/anime.js

function increaseFn() { 
    var btn = document.getElementById("myButton"); 
    var currwidth = btn.clientWidth; 
    var currheight = btn.clientHeight; 
    btn.style.width = 500 + "px"; 
    btn.style.height = 500 + "px"; 



    //btn.style.width = (currwidth + 20) + "px"; 
    //btn.style.height = (currheight + 10) + "px"; 
} 