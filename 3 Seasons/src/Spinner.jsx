import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui massive text loader">{props.message}</div>
    </div>
  );
};
// Define on top of the Spinner Function itself & mainly after the Component Defination..
Spinner.defaultProps = {
  message: "Loading.."
};

export default Spinner;
