export default [
  {
    "id": "0001",
    "name": "container",
    "label": "CONTAINER",
    "icon": "fa-square-o",
    "size": 30,
    "type": "draggable"
  },
  {
    "id": "0002",
    "name": "image",
    "label": "IMAGE",
    "icon": "fa-picture-o",
    "size": 25,
    "type": "draggable"
  },
  {
    "id": "0003",
    "name": "text",
    "label": "TEXT",
    "icon": "fa-text-height",
    "size": 25,
    "type": "draggable"
  },
  {
    "id": "0005",
    "name": "live",
    "label": "LIVE",
    "icon": "fa-globe",
    "size": 25,
    "type": "clickable",
    "event": () => {
      const webContent = document.getElementById("site_body_wrapper").innerHTML;
      const newBody = document.createElement("BODY");
      const newTitle = document.createElement("TITLE");

      newBody.innerHTML = webContent;
      newTitle.innerHTML = "Live Mode: Sample Sitename";

      const liveWindow = window.open("", "");

      liveWindow.document.write(newTitle.outerHTML);
      liveWindow.document.write(newBody.outerHTML);
    }
  }
];
