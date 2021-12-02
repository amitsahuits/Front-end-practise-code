// **************all new lines of codes may overwrite the above written code. first uncomment the after code to see the above code proper working.


//in the last 36 file of java script we've seen that how to create the element like tags or text
//now will see that how to insert the created text inside the created tag.

//lets create the tag and text seperately, then will append both
var newElement = document.createElement('h3')
console.log(newElement); // it will return the created h3 tag

var newText = document.createTextNode("this is just text that have to be appended")
console.log(newText)

//now we've created the tag and text now we will merge text into the tags using append.'

newElement.appendChild(newText);
console.log(newElement)

//we appended now we have to see this in our page.
document.getElementsByClassName('center')[0].appendChild(newElement);
console.log(newElement)
//now see that we have added one more box in the center class by adding h3 tag.
//in the same way , we can append comment.

//this always appends to the last.
//but if we want to append this at anyplace whearver we want then we will use insertbefore
//it takes two arguments 

var target = document.getElementsByClassName('center')[0];
target.insertBefore(newElement,target.childNodes[1]) //childNode[0] means class center ka sabse first child
//we can write any position inside the childNodes[n]

