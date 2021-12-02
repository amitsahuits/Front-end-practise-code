//we can target any element by targetting its parent node
var a = document.getElementsByClassName("inner")[0].parentElement;
//checking what we will get on console 
console.log(a);

//it will make the parent element of inner i.e outer class of red color
var a = document.getElementsByClassName("inner")[0].parentElement.style.background = 'seagreen';

//another example of parent element

//see we are targetting the inner class dom by its child inner head because inner class is the parent of the innerhead.
var a = document.getElementById("innerhead").parentElement.style.background = 'yellow'



//similar command is parentNode
//the only difference between parent node and parentElement is this , the parentElement return nothing if it does not find any parent ,but parentNode will find something else if it does not get the parent.

var a = document.getElementById("innerhead").parentElement.style.background = 'blue'