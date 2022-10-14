var itemsTwo = document.getElementById('two');
var elText = itemsTwo.firstChild.nodeValue;
elText = elText.replace('pine nuts','kale');
itemsTwo.firstChild.nodeValue = elText;