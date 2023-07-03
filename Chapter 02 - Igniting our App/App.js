// imported react and reactdom from nodemodule folder
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement(
    "h1",
    {
      id: "title1",
      style: {
        color:"orange",
      }
    },
    "NAMASTE REACT"
  );
  const heading2 = React.createElement(
    "h1",
    {
      id: "title2",
    },
    "Welcome Everyone!"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading1, heading2]
  );
  
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(container);