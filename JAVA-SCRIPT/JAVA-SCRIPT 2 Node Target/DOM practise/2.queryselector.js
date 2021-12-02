var element;

                                        //queryselector

//this method is like a get and set to target dom 
//remember that it only select the first id or class if two same id or class will be available

document.querySelector(".homepage");
 
element = document.querySelector(".item"); //selecting by class 
//see it only select the first item even though there are four .item class
console.log(element);
                    //OR
element = document.getElementsByClassName("homepage");
console.log(element);

//changing or setting the id name by this method

document.querySelector("#home").setAttribute('style','font-size:80px'); //changing font size of inside html

document.querySelector('#home').innerHTML = "<h1> WooHH </h1>"; //we can set value also through query selector

element = document.querySelector("#home"); //selecting by id

console.log(element);

                                        //queryselectorAll
//queryselector only return or select the first item but queryselectAll will return all the elements with same class or id or tag name
element = document.querySelectorAll(".item"); //selecting by class 
//see it selects all the item class in our html file
console.log(element);

element = document.querySelectorAll(".item")[2];
//will return the third list only
console.log(element);

element = document.querySelectorAll(".item")[2].innerHTML;
//will return the html of third element of class item.
console.log(element);

//it also works on advance css selector
element = document.querySelectorAll("#home h1")[0].innerHTML;
console.log(element);