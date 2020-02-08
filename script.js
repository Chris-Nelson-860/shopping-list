//Set Variables
let input = document.getElementById('input');
let ul = document.getElementsByTagName('ul')[0];
const addButton = document.getElementById('addButton');
const hideButton = document.getElementById('hideButton');
const showButton = document.getElementById('showButton');
const removeButton = document.getElementById('removeLastItem');



//Declare Functions
function addListItem(){
    let li = document.createElement('li');
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = '';
}

function removeListItem(){
    let li = document.querySelector('li:last-child');
  ul.removeChild(li);
}
//Add functionality so that you can hit enter and it will add the item in the input to the list.
//KEY EVENTS: Look further into events as objects and key events!
input.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        addListItem();
    }
});

addButton.addEventListener('click', addListItem);

removeButton.addEventListener('click',removeListItem);
//Note on the li:last-child
//The li is not a child of all of the li's
//What this is saying to do is to select the list item that is the last child of its parent.


hideButton.addEventListener('click',()=>ul.style.display="none");

showButton.addEventListener('click', ()=> ul.style.display='block');