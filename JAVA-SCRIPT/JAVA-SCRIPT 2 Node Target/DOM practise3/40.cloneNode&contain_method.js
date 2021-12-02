// we have created the two unordered list in our html file now will be clone the item from the list one into the list2
var target = document.getElementById("list1").children[0];
var copyElement = target.cloneNode(true); //if we write false here then it will only copy or clone the tags

// console.log(copyElement) this is just to chekc that what it is retruning to us
//now after copying the target value , now we can append that whearver we want

document.getElementById('list2').appendChild(copyElement);
//we copy orange item from the list 1 and appended it to list2


//*****************------contain()------ **************/
//it is very simple method it just return us true if it contain the targetted class or id and if it does not contain then it return the false
// it will return true even if id is inside grandchildrens.
var parentElement = document.getElementById('outerid');
var target = document.getElementById("abc");
// if inside the outerid if the inner id abc is available then it will return us true else return false.

var find = parentElement.contains(target)
console.log(find) //return false , because it does not contain any abc id

var parentElement = document.getElementById('outerid');
var target = document.getElementById("centerid");
// if inside the outerid if the inner id abc is available then it will return us true else return false.

var find = parentElement.contains(target)
console.log(find) //true because centerid is available
