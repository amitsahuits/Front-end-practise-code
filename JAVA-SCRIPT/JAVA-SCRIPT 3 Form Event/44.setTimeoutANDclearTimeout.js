var id = setTimeout(Anim,3000);
//this function will trigger Anim function after every 3 second.

//making an function that willl change the box width after 3 second 
//and also making button that can stop this change if we press it before given seconds
function Anim() {
    var target = document.getElementsByClassName("test")[0];
    target.style.width = "500px";
}

//this will stop the setTimeout function. but we should click this before 3 second as we declare in setTimeout function
function stopanimation() {
    clearTimeout(id)
}