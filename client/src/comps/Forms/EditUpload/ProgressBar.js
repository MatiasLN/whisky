import React, { useEffect } from "react";
import editStorage from "../../../hooks/useStoreImageUrl";

const ProgressBar = ({ file, setFile, setLoading, changeUploadStatus }) => {
  const { url, progress } = editStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
      setLoading(false);
      changeUploadStatus(false);
      document.querySelector(".image").style.display = "block";
      document.querySelector(".thumbnail").innerHTML = "";
      document.querySelector(".editForm").style.display = "none";
      document.querySelector(".submitForm").style.display = "block";
      document.querySelector(".output").style.marginTop = "0px";
      document.querySelector(".thumbnail").style.opacity = "1";
    }
    // eslint-disable-next-line
  }, [url, setFile]);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
