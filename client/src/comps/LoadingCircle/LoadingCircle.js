import React from "react";
import LoadingImg from "../../images/loadingCircle.gif";

const LoadingCircle = () => {
  return (
    <div>
      <img
        className="loadingCircleAnimation"
        src={LoadingImg}
        alt="loading animation"
      />
    </div>
  );
};

export default LoadingCircle;
