import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
  onClickChange() {
    console.log("Something Happened...");
  }
  // Event Handler For Forms
  onFormSubmit = event => {
    event.preventDefault();
    // console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          {/* <div className="field"> */}
          <div>
            <label>
              <h1>Search Images </h1>
              <input
                type="text"
                value={this.setState.term}
                onChange={e =>
                  this.setState({ term: e.target.value.toUpperCase() })
                }
                // onChange={this.onInputChange}
                onClick={this.onClickChange}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
