
//children---------------------
//it is same as parentElement ,it target all childs

//let see what is returning when we target any dom or node 
var a = document.getElementById("outerid").children;
//checking what we will get on console 
console.log(a);

var a = document.getElementById("outerid").children[1];
console.log(a)


//lets target any parent and change properties of childrens
document.getElementById("outerid").children[0].style.background = "pink"; //targetting h1

//childNode---------------------------
//its work same like the children
// the only difference is that the childNode will return or target everything as a child ,even comment and enter(new line).

//let see what is returning when we target any dom or node 
var a = document.getElementById("innerid").childNodes;
//checking what we will get on console 
console.log(a);

//targetting the childNodes and setting its property
document.getElementById("innerid").childNodes[1].style.background = "white"; //targetting h1

//firstElementChild & lastElementChild--------------------

//firstElementChild
var a = document.getElementById("outerid").firstElementChild
console.log(a)
//it will return the first child node

//lastElementChild
document.getElementById("outerid").lastElementChild.style.color = "cyan"
var a = document.getElementById("outerid").lastElementChild
console.log(a)
//it will return the last child node

//firstChild & lasChild------------------------
// it works same as above firstelementchild and lastelementchiild
// the main difference is that it will considered even the space and comments if occurs as first or lastchild

var a = document.getElementById("innerid").firstChild
console.log(a) //see in the cosole ,it is returning the text which contain the "next line" ,that means it found the new line as the first child.

//same is lastchild