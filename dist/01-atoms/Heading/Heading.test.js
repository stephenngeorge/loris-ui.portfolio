// this is a default file generated by loris that sets 
// up some simple testing behaviour for you. You may need 
// to reconfigure this file if, for example, your component 
// has some required props
import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading';
it("renders without crashing", function () {
  var div = document.createElement("div");
  ReactDOM.render(React.createElement(Heading, null), div);
  ReactDOM.unmountComponentAtNode(div);
});