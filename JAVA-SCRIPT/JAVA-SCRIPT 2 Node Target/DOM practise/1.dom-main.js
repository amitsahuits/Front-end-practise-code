var element;

                        //get method

// targeting by id 
//innerText gives the inner content (without tags) of any id which was given.
console.log('innertext -->') 

element = document.getElementById('navbar').innerText;
console.log(element);

//innerHtml gives the inner content (with all tags within) of any id which was given.
console.log('innerHTML -->')
element = document.getElementById('home').innerHTML;
console.log(element);

//getAttribute, here attribute means the id name, class name, style, events and etc provided by the programmer.
console.log('getAttribute -->')
element = document.getElementById('home').getAttribute('class');
console.log(element);
element = document.getElementById('home').getAttribute('id');
console.log(element);
element = document.getElementById('home').getAttribute('style');
console.log(element);

//attributes, here it provides all attribute like an array then we can target it with the assigned index number.
console.log('attributes -->')
element = document.getElementById('home').attributes
console.log(element);
element = document.getElementById('home').attributes[2] 
console.log(element);
element = document.getElementById('home').attributes[2].value 
console.log(element);


                        //set method
//inner text did not add tags it just put text
console.log('innertext -->') 
document.getElementById("home").innerText = "<h1> yaAaS </h1>";

element = document.getElementById('home').innerText;
console.log(element);

//inner text did not add tags , for that we should use innerHTML
document.getElementById("home").innerHTML = "<h1> yaAaS </h1>";
element = document.getElementById('home').innerHTML;
console.log(element);


//it will set the class value to sweethome.  'attribut' : 'value'
document.getElementById("home").setAttribute('class','sweethome');
//now looking that whether is it changed or not.
element = document.getElementById("home").getAttribute('class');
console.log(element);


document.getElementById("home").setAttribute('style','border:10px dotted yellow');
//now looking that whether is it changed or not.
element = document.getElementById("home").getAttribute('style');
console.log(element);


//this is not recommended to use because no one will learn which attribute at which index number that is why above method is best to set value of attributes
document.getElementById("home").attributes[2].value = 'border:8px dotted blue';
//because attributes[2] = style ,if u want to see how then check above line 30


//removeAttribute
