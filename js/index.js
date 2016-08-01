"use strict";

$(document).ready(function () {
  var NonMarkedObject = React.createClass({
    displayName: "NonMarkedObject",

    onTextChange: function onTextChange(e) {
      this.props.updateText(e.target.value);
    },
    render: function render() {
      return React.createElement("textarea", {
        className: "nonmarked",
        value: this.props.data,
        onChange: this.onTextChange });
    }

  });

  var MarkedObject = React.createClass({
    displayName: "MarkedObject",

    render: function render() {
      return React.createElement("span", {
        className: "marked",
        dangerouslySetInnerHTML: {
          __html: marked(this.props.data.toString())
        } });
    }

  });

  var MarkdownData = React.createClass({
    displayName: "MarkdownData",

    getInitialState: function getInitialState() {
      return {
        data: this.props.data
      };
    },
    updateCurrentText: function updateCurrentText(text) {
      this.setState({
        data: text
      });
    },
    render: function render() {

      return React.createElement(
        "div",
        { className: "markdown" },
        React.createElement(NonMarkedObject, {
          data: this.state.data,
          updateText: this.updateCurrentText }),
        React.createElement(MarkedObject, {
          data: this.state.data })
      );
    }

  });

  var initalContent = "Heading\r\n=======\r\n\r\nSub-heading\r\n-----------\r\n \r\n### Another deeper heading\r\n \r\nParagraphs are separated\r\nby a blank line.\r\n\r\nLeave 2 spaces at the end of a line to do a  \r\nline break\r\n\r\nText attributes *italic*, **bold**, \r\n`monospace`, ~~strikethrough~~ .\r\n\r\nShopping list:\r\n\r\n  * apples\r\n  * oranges\r\n  * pears\r\n\r\nNumbered list:\r\n\r\n  1. apples\r\n  2. oranges\r\n  3. pears\r\n\r\nThe rain---not the reign---in\r\nSpain.\r\n\r\n  *[Herman Fassett](https:\/\/freecodecamp.com\/hermanfassett)* ";

  ReactDOM.render(React.createElement(MarkdownData, { data: initalContent }), document.getElementById('markdownPrev'));
});