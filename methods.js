function generateId() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 15; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("newDiv", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "container editableElement");
  newDiv.setAttribute("id", generateId());
  newDiv.setAttribute("onclick", "highlight(event)");
  newDiv.setAttribute("style", "background-color: red; width: 100%; height: 100px; border: 0px solid");
  ev.target.appendChild(newDiv);
}

function highlight(ev) {
  var divID = ev.target.id;
  document.getElementById(divID).style.border = "2px solid blue";
}
