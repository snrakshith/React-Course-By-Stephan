import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/usplash";
import ImageList from "./ImageList";
// import axios from "axios";
// import Search from "./Search";

class App extends React.Component {
  state = { images: [] };
  // async onSearchSubmit (term) {
  onSearchSubmit = async term => {
    // console.log(term);
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    // console.log(response.data.results);
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10 px" }}>
        {/* <Search /> */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <h3>Found: {this.state.images.length} Images</h3>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
