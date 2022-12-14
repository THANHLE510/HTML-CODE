var elList, addLink, newEl, newText, counter, ListItems;

elList = document.getElementById('list');
addLink = document.querySelectorAll('a');
counter = document.getElementById('counter');

function addItem(e){
    e.preventDefault();
    newEl = document.createElement('li');
    newText = document.createTextNode('New list item');
    newEl.appendChild(newText);
    elList.appendChild(newEl);
}

function updateCount(){
    listItems = elList.getElementsByTagName('li').length;
    counter.innerHTML = listItems;
}

addLink.addEventListener('click',addItem,false);
elList.addEventListener('DOMNodeInserted',updateCount,false);
