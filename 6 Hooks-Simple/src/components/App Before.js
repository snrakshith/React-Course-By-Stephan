import React from "react";

class App extends React.Component {
  state = { resources: "posts" };
  render() {
    return (
      <div>
        <div>
          <button onClick={e => this.setState({ resources: "posts" })}>
            Posts
          </button>
          <button onClick={e => this.setState({ resources: "todo" })}>
            Todo
          </button>
        </div>
        {this.state.resources}
      </div>
    );
  }
}
export default App;
