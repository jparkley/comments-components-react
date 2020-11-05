import React from "react";
import CommentDetail from "./CommentDetail";
import Approval from "./Approval";
import comments from "./comments.js";

const App = () => {
  return (
    <div className="ui container comments">
      {comments.map((comment, index) => {
        return (
          <Approval>
            <CommentDetail
              key={index}
              author={comment.author}
              date={comment.date}
              content={comment.content}
            />
          </Approval>
        );
      })}
    </div>
  );
};
export default App;
