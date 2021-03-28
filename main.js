var input = document.getElementById("mainDeckList");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("enter").click();
  }
});

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Main Deck
// Create a new list item when clicking on the "Add" button
function newElementMainDeck() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("mainDeckList").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("mainDeck").appendChild(li);
    }
    document.getElementById("mainDeckList").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    // Label for Subdeck
    var subdeckLabel = document.createElement('label');
    li.appendChild(subdeckLabel);

    // Input for Label
    var subdeckInput = document.createElement('input'); 
    subdeckInput.type = "text"; 
    subdeckInput.placeholder = "add a subdeck";
    subdeckInput.className = "subdeck";
    subdeckInput.id = "subDeckList";
    subdeckLabel.appendChild(subdeckInput);

    // Span for Label
    var subdeckSpan = document.createElement('span');
    subdeckSpan.id = "subdeckEnter";
    subdeckSpan.className = "addBtn";
    subdeckLabel.appendChild(subdeckSpan);

    // UL for subdeck list
    var subdeckList = document.createElement('ul');
    subdeckList.id = "subDeck";
    subdeckList.className = "list";
    li.appendChild(subdeckList);

    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}











