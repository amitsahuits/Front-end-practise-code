type = 'text/javascript'

var element ;
//it is working if html has inline or internal css
//asking the 
element = document.querySelector("#navbar").style.backgroundColor;
console.log(element);


//setting the value to the nav bar. //it will override the previously define black property
document.querySelector("#navbar").style.backgroundColor = 'pink';
//checking wheather is it changed or not.
console.log(element);


// document.querySelector("#navbar nav a").style.backgroundColor = 'blue';
element = document.querySelector("#navbar nav a").style.backgroundColor;
console.log(element);

//to set multiple css style but setAttribute method is only works on getElementById
document.getElementById('home').setAttribute('style','color:blue ; background-color : black');

//-----------------onclick event Event listner--------------------
//---------------------------------------------------------------------------------
// creating event for mouse over ,if we hover mouse into the navbar this will change its color
// document.getElementById("navbar").onmouseover = abc;
// function abc(){
//     document.getElementById("navbar").style.background = "crimson"
// }
// -------------------------------------------------------------------------------------

//we can perform the same operation with the help of addEventListener 
//addEventListener----
//main advantage of addEventListener is that we can add multiple event for same target

document.getElementById("navbar").addEventListener("click",abc); 
function abc() {
    document.getElementById("navbar").style.background = "green"
}
//we can also define inline function //advantage of this inline function that we do not have to give the name to this function
document.getElementById("navbar").addEventListener("click",function() {
    document.getElementById("navbar").style.border = "5px dotted cyan" ;   
} );

//shortcut****
document.getElementById("navbar").addEventListener("click", function () {
    this.style.fontSize = "25px"; //using "this" means it will understand that we are targetting what we define above at line 46
});


//---------------------------------------------------------------------------------------



