import React, { useState } from "react";
import ResourceList from "./ResourceList";

const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todo")}>Todo</button>
      </div>
      {/* {this.state.resources} */}
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
