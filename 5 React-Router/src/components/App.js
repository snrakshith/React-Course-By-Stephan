// React Snippets Cheat Sheet: https://bit.ly/2IHe2Gd

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import NavBar from "./NavBar";

// const PageOne = () => {
//   return (
//     <div>
//       <h2>PageOne</h2>
//       <p>
//          Bad Practice!!
//         <a href="/pagetwo"> Go To PageTwo</a>
//          Good Practice!!
//         <Link href="/pagetwo"> Go To PageTwo</Link>
//       </p>
//     </div>
//   );
// };

// const PageTwo = () => {
//   return (
//     <div>
//       <h2>PageTwo</h2>
//       <button>
//          Bad Practice!!
//         <a href="/"> Click Me</a>
//          Good Practice!!
//         <Link href="/"> Click Me</Link>
//       </button>
//     </div>
//   );
// };

const App = () => {
  return (
    <div>
      <Router>
        <div>
          {/* Wiring Up the NavBar Component */}
          <NavBar />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" excat component={StreamEdit} />
          <Route path="/streams/show" excat component={StreamShow} />
          <Route path="/streams/delete" excat component={StreamDelete} />
          {/* <Route path="/" exact component={PageOne} /> */}
          {/* <Route path="/pagetwo" component={PageTwo} /> */}
        </div>
      </Router>
    </div>
  );
};
export default App;
