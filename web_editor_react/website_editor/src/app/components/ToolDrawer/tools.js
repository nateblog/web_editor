export default [
  {
    "id": "0001",
    "hasProps": true,
    "name": "settings",
    "label": "SETTINGS",
    "icon": "fa-cog",
    "size": 24,
    "type": "clickable",
    "event": (self) => {
      const { usedTool } = self.state;
      self.setState({selectedDiv: "", selectedClass: ""});
      if(document.getElementById("component_properties_wrapper").style["display"] === "none" || document.getElementById("component_properties_wrapper").style["display"] === "") {
        document.getElementById("component_properties_wrapper").style.display = "block";
      } else {
        if(usedTool === "settings") {
          document.getElementById("component_properties_wrapper").style.display = "none";
        }
      }
    }
  },
  {
    "id": "0002",
    "hasProps": true,
    "name": "container",
    "label": "CONTAINER",
    "icon": "fa-square-o",
    "size": 30,
    "type": "draggable"
  },
  {
    "id": "0003",
    "hasProps": true,
    "name": "image",
    "label": "IMAGE",
    "icon": "fa-picture-o",
    "size": 25,
    "type": "draggable"
  },
  {
    "id": "0004",
    "hasProps": true,
    "name": "text",
    "label": "TEXT",
    "icon": "fa-text-height",
    "size": 25,
    "type": "draggable"
  },
  {
    "id": "0005",
    "hasProps": false,
    "name": "live",
    "label": "LIVE",
    "icon": "fa-globe",
    "size": 25,
    "type": "clickable",
    "event": () => {
      const webContent = document.getElementById("site_body_wrapper").innerHTML;
      const newBody = document.createElement("BODY");
      const newTitle = document.createElement("TITLE");

      /** BODY STYLE **/
      newBody.style.margin = "0px";
      newBody.style.boxSizing = "border-box";

      newBody.innerHTML = webContent;
      newTitle.innerHTML = "Live Mode: Sample Sitename";

      const liveWindow = window.open("", "");

      liveWindow.document.write(newTitle.outerHTML);
      liveWindow.document.write(newBody.outerHTML);
    }
  }
];
