import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";

const ProgressBar = ({ file, setFile, setRating }) => {
  const { url, progress } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
      setRating(null);
      document.querySelector("form").style.display = "none";
      document.querySelector(".img-grid").style.display = "grid";
      document.querySelector(".backdrop").style.display = "none";
      document.querySelector("#file-title").value = "";
      document.querySelector("#file-notes").value = "";
      document.querySelector(".custom-file-upload").innerHTML =
        "Legg til bilde";
      document.querySelector(".thumbnail").innerHTML = "";
    }
  }, [url, setFile]);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
