import React from "react";
import LoadingImg from "../../images/loading.gif";

const Loading = () => {
  return (
    <div>
      <img
        className="loadingAnimation"
        src={LoadingImg}
        alt="loading animation"
      />
      <p className="loading">Laster ...</p>;
    </div>
  );
};

export default Loading;
