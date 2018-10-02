import React from "react";

const Result = props => {
  return (
    <div>
      <div>
        <h5>
          {props.children} {props.total}
        </h5>
      </div>
    </div>
  );
};

export default Result;
