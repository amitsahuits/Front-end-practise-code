//replace(newElement,oldElement); always takes two argument
// first lets create the item that we want to replace with.
var newElement = document.createElement("h1")
var newText = document.createTextNode("wow new Outer heading")

newElement.appendChild(newText);
// now the newElement is = <li>wor new OUter heading</li>

// targetting the child which needs to be replaced
var target = document.getElementById("outerid");

var oldElement = target.children[0]

// console.log(target) this is just to check what chikdren we're gettting
target.replaceChild(newElement,oldElement)


//----------------------------------------------------
//remove(target) always take one element
var target = document.getElementById("innerid");
var oldElement = target.children[0];
target.removeChild(oldElement)