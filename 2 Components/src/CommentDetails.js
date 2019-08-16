import React from "react";

const CommentDetails = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.img} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {/* Here we consume the props */}
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.context}</div>
      </div>
    </div>
  );
};

export default CommentDetails;
