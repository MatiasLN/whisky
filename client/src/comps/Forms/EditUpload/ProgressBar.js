import React, { useEffect } from "react";
import editStorage from "../../../hooks/useStoreImageUrl";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = editStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
      document.querySelector(".editForm").style.display = "none";
      // document.querySelector(".img-grid").style.display = "grid";
      document.querySelector(".custom-file-upload").innerHTML =
        "Legg til bilde";
      document.querySelector(".thumbnail").innerHTML = "";
    }
  }, [url, setFile]);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
