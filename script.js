let input = document.getElementById('input');
let ul = document.getElementsByTagName('ul')[0];
const addButton = document.getElementById('addButton');
const hideButton = document.getElementById('hideButton');
const showButton = document.getElementById('showButton');
const removeButton = document.getElementById('removeLastItem');




addButton.addEventListener('click', ()=>{
  let li = document.createElement('li');
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = '';
})

removeButton.addEventListener('click',()=>{
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
})
//Note on the li:last-child
//The li is not a child of all of the li's
//What this is saying to do is to select the list item that is the last child of its parent.


hideButton.addEventListener('click',()=>ul.style.display="none");

showButton.addEventListener('click', ()=> ul.style.display='block');