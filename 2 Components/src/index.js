// Importing Stuff
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

// Creating the components
const App = () => {
  return (
    <div className="ui container comments">
      {/* We Provide in the Props */}

      <h1>Profiles of Users:</h1>
      <ApprovalCard>
        <CommentDetails
          author="Jane"
          date="7 / 5 / 2018"
          context="Hi Guys"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="San"
          date="7 / 8 / 2018"
          context="Welcome Guys"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Jany"
          date="17 / 5 / 2018"
          context="Happy Birthday"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <div>
          <h4>Warning!!!</h4>
          <p>Do you want to close the App.</p>
        </div>
      </ApprovalCard>
    </div>
  );
};

// Rendering it on screen..
ReactDOM.render(<App />, document.querySelector("#root"));
