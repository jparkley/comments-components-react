import React from "react";
import faker from "faker";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a className="avatar" href="/">
        <img src={faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a className="author" href="/">
          <h3>{props.author}</h3>
        </a>
        <p className="date">{props.date}</p>
      </div>
      <div className="text">{props.content}</div>
    </div>
  );
};

export default CommentDetail;
