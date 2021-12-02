var a = 0;
stp = setInterval(Anim, 100); //1000ms --> 1 second.
//this function will trigger after every 1 second
function Anim(){
    // a = a + 10;
    // document.getElementsByClassName("test")[0].innerText = a;

    a = a + 10;
    if(a == 400){
        clearInterval(stp); //after given condition this function will trigger and stop the setInterval funciton
    }else{
        var target = document.getElementsByClassName("test")[0];
        target.style.marginLeft = a + 'px';
        target.style.marginTop = a + 'px';
    }
}








// a = document.getElementsByClassName("test")[0].innerText;
// console.log(a)

