var a = document.getElementById("child-2").previousElementSibling;

console.log(a)

var a = document.getElementById("child-2").nextElementSibling;

console.log(a)

document.getElementById("child-2").nextElementSibling.innerHTML = 'hellow next sibbii';
document.getElementById("child-2").previousElementSibling.innerHTML = 'hellow previous sibbii';
document.getElementById("child-2").previousElementSibling.style.backgroundColor = 'magenta';


//previousSibling & nextSibling
//it just return whatever it found next or previous to it weather it is tag or next line or comment.