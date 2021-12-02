// with the help of createElement we can create tag inside our html
var newElement = document.createElement('h1')
console.log(newElement); // it will return the created h1 tag

var newText = document.createTextNode("this is just text")
console.log(newText)

//to create comment
var newComment = document.createComment("we created commment")
console.log(newComment)
