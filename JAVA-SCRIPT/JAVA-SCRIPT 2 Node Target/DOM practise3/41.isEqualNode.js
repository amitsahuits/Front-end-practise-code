//it return if it find equal.
//critera for comparision

//Same Node Type :-
//same Node Name :- same tag like both which we are compairing li tag
//Same Node Value :- like same text inside both tag
//Same childNodes eg:- both should container same tag inside like both must have li tag inside thier paragraph tag(p)
//Same attributes eg:- id ,class
//Same attribute values eg:- id & class names

target1 = document.getElementById("test1").firstElementChild

target2 = document.getElementById("test2").children[1] //because it second child is same as first child of firstElementChild.

var equal = target1.isEqualNode(target2)

console.log(equal)