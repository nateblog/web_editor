export function generateId() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 15; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

export function allowDrop(ev) {
  ev.preventDefault();
}

export function drag(ev) {
  ev.dataTransfer.setData("newDiv", ev.target.id);
}

export function drop(ev, tool, self) {
  ev.preventDefault();

  if(Object.keys(self).length > 0) {
    if(tool === 'container') {
      var newDiv = document.createElement("div");
      newDiv.setAttribute("class", "container editableElement");
      newDiv.setAttribute("id", generateId());
      newDiv.onclick = (event)=>self.divHighlighter(event);
      newDiv.setAttribute("style", self.state.toolProps.container);
      ev.target.appendChild(newDiv);
    }
  }
}
