"use strict";

var React = require("react");
var ReactStyle = require("react-style");

var coreIcons = require("./icons/core-icons.html");
coreIcons = coreIcons.substr(coreIcons.indexOf("<defs>") + "<defs>".length);
coreIcons = coreIcons.substr(0, coreIcons.indexOf("</defs>"));
var socialIcons = require("./icons/social-icons.html");
socialIcons = socialIcons.substr(socialIcons.indexOf("<defs>") + "<defs>".length);
socialIcons = socialIcons.substr(0, socialIcons.indexOf("</defs>"));

var div;
if (typeof window !== "undefined") {
  div = document.createElement("div");
  div.innerHTML = coreIcons + socialIcons;
}

var Icon = React.createClass({
  displayName: "Icon",

  render: function render() {
    if (!this.props.icon) {
      return React.createElement("div", null);
    }

    if (window.SVGSVGElement) {
      return React.createElement("svg", { styles: this.props.styles, viewBox: "0 0 24 24", height: "100%", width: "100%", preserveAspectRatio: "xMidYMid meet", ref: "svg", dangerouslySetInnerHTML: { __html: div.querySelector("#" + this.props.icon).innerHTML } });
    } else {
      // TODO: should go to generated image sprite
      return React.createElement("div", null);
    }
  }

});

module.exports = Icon;