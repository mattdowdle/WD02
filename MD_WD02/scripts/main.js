function addItem(){
// Value of the form
const value = document.querySelector('#form').value;
// List of parent
const list = document.querySelector('#items');
// Creates a list
const li = document.createElement('li');
// inserts the value into the HTML
li.innerHTML=value;
// Add to UL list
list.appendChild(li);
// Replace box with blank space
document.querySelector('#form').value="";
}