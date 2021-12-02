var element

document.getElementById("home").addEventListener("click",abc);

//this will add new class to that and if we've made any css for that new class then after adding that class its css automatically will be applied.

function abc() { //when this abc function is called by clicking on home div then this function will add class "xyz" 
    // document.getElementById("home").classList.add("xyz"); 
    //we can add two classes
    document.getElementById("home").classList.add("xyz","efg"); 
    
}



//similarly we can remove the class by .remove function
document.getElementById("home").addEventListener("click", removingfunc);

function removingfunc() { 
    document.getElementById("home").classList.remove("efg")
    
}
//now see by inspecting the function the class efg which we have added is gone.


//--------------- length --------------
var a = document.getElementById("home").classList.length;
console.log(a); //return the number of classes
                           //or                     //index
var a = document.getElementById("home").classList.item(0); //it will show us on console that how much classes we are using in dom home.
console.log(a);

// ---------------toggle -------------
// it will add the class when we click and it will remove the class whenever we click on it again.
document.getElementById("home").addEventListener("click", togglefunc); //togglefunc can we anyname

function togglefunc() {
    document.getElementById("home").classList.toggle("wxy")
}

