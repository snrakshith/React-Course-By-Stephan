import React from "react";

function onInputChange(event) {
  // return event.target.value;
  console.log(event.target.value);
}
function onClickChange() {
  console.log("Something Happened...");
}

const Search = () => {
  return (
    <div>
      <form>
        <div>
          <label>Search Images...</label>
          <input type="text" onChange={onInputChange} onClick={onClickChange} />
        </div>
      </form>
    </div>
  );
};

export default Search;
