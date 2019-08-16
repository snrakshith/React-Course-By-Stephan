import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null, err: "" };
  // }
  state = { latitude: null, err: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      positon => {
        this.setState({ latitude: positon.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  renderContent() {
    if (this.state.latitude && !this.state.errorMessage) {
      return (
        <div>
          {/* <SeasonDisplay />:{this.state.latitude} */}
          <SeasonDisplay latitude={this.state.latitude} />
        </div>
      );
    }

    if (!this.state.latitude && this.state.errorMessage) {
      return <div>Error:{this.state.errorMessage}</div>;
    }
    return (
      <div>
        <Spinner message="Please Accept The Request.." />
        {/* <Spinner /> */}
      </div>
    );
  }
  render() {
    return <div className="body red">{this.renderContent()}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));

// ----

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     positon => console.log(positon),
//     err => console.log(err)
//   );
//   return <div>Latitude:</div>;
// };
// {
//   /* <div>
//   <div>Latitude:{this.state.latitude}</div>
//   <div>Error:{this.state.errMessage}</div>
// </div>; */
// }
