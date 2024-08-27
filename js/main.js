

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

    let savePoint = localStorage.getItem("left off");
    let display = "Start!" 
    
    if(savePoint == null){
        localStorage.setItem("left off", "WelcomePage")
    }
    
    
    if (savePoint != null & savePoint != "WelcomePage"){
        // then the button says continue
        display = "Continue!"
            
        // save that page in memory (local storage)       ***** THIS STEP SHOULD BE DONE OUTSIDE, in each page's js file*****  

    } 

    document.getElementById("link").innerText = display

}

function goThere(){
    // change the a to the first page for the safebae content (don't forget to put a / in front)
    let a = "/avatarPage.html" 
    let savePoint = localStorage.getItem("left off");

    //here set the pages links html's  (with / in front)
    if( savePoint == "Avatar"){
        a = "/avatarPage.html"
    }   
    
    window.location.pathname = a;
}

