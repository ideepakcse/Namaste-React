// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements
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