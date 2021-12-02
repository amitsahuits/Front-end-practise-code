//creating the tag 
var newElement = document.createElement("h2");

//creating the text
var newText = document.createTextNode("this is just text")

//appending the txt inside the tag
newElement.appendChild(newText);

//as we use the insert before to insert the tag at perticular place , similarly
//we should use the insertAdjacentElement to put our newly created tag into the targetted place.

//uncomment one by one to get clearity....
var target = document.getElementById("innerid");
// target.insertAdjacentElement("beforebegin", newElement);

// target.insertAdjacentElement("afterbegin", newElement);

// target.insertAdjacentElement("beforeend", newElement);

target.insertAdjacentElement("afterend", newElement);


//-------------------------------------------------------
//above we seperately required to create the tag and text then we were merging it.
//we can do above task simply, by using only
//insertAdjacentElementHTML
var target = document.getElementById("outerid");
var newElement = "<h2>This is the Heading </h2>";
//uncomment one by one for better understanding.
// target.insertAdjacentHTML("beforebegin", newElement);

// target.insertAdjacentHTML("afterbegin", newElement);

// target.insertAdjacentHTML("beforeend", newElement);

// target.insertAdjacentHTML("afterend", newElement);

//similarly if we want only to insert text without any tag.
// then use insertAdjacenttext .