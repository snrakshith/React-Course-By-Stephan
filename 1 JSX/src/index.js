// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Doesn't work as we don't return anything...
const hi = function getTime() {
  console.log("hi");
  // return "hi";
};
// Create a react component
const App = () => {
  // const buttonText = { text: "Click me", num: 1 };
  // const buttonText = { text: "Click me" };
  const buttonText = [1, 2];
  const labelText = "Enter name:";
  const styleApp = { backgroundColor: "blue", color: "white" };

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      {/* <button style={styleApp}>{buttonText.num}</button> */}
      <button style={styleApp}>{buttonText}</button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
