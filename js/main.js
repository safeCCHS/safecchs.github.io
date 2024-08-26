

function increaseFn() { 
    var btn = document.getElementById("myButton"); 
    var currwidth = btn.clientWidth; 
    var currheight = btn.clientHeight; 
    btn.style.width = 500 + "px"; 
    btn.style.height = 500 + "px"; 



    //btn.style.width = (currwidth + 20) + "px"; 
    //btn.style.height = (currheight + 10) + "px"; 
} 

function displayText(){

    if(empty){
        localStorage.setItem("left off", "WelcomePage")
    }
    

    let savePoint= localStorage.getItem("left off");
    
    let display = "Start!" 
    
    if (savePoint != "WelcomePage"){
        // then the button says continue
        display = "Continue!"
            
        // save that page in memory (local storage)       ***** THIS STEP SHOULD BE DONE OUTSIDE, in each page's js file***** 
     
        // set button link to the page saved in memory 
    } 
    document.getElementById("startButton").innerText = display



}

