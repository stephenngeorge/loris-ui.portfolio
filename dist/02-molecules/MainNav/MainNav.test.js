// this is a default file generated by loris that sets 
// up some simple testing behaviour for you. You may need 
// to reconfigure this file if, for example, your component 
// has some required props
import React from 'react';
import ReactDOM from 'react-dom';
import MainNav from './MainNav';
it("renders without crashing", function () {
  var div = document.createElement("div");
  ReactDOM.render(React.createElement(MainNav, null), div);
  ReactDOM.unmountComponentAtNode(div);
});