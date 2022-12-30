import React, { useState, useContext } from "react";
import { WhiskyContext } from "../../../context/WhiskyContext";
import ProgressBar from "./ProgressBar";

const EditUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpg", "image/jpeg", "image/heic"];
  const [submit, setSumbit] = useState("");
  const [uploadImage, setUploadImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const { update } = useContext(WhiskyContext);

  const changeUploadStatus = (callback) => {
    // set to false when upload is done
    setUploadImage(callback);
  };

  function handleUpload(e) {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      let image = document.createElement("img");
      image.src = URL.createObjectURL(selected);
      let imgUrl = (image.src = URL.createObjectURL(selected));
      setSumbit(selected);
      setError("");
      document.querySelector(".thumbnail").innerHTML = "";
      document.querySelector(".thumbnail").appendChild(image);
      document.querySelector(".editForm").style.display = "block";
      document.querySelector(".image").style.display = "none";
      setUploadImage(true);
      update({
        edit: { imgUrl: imgUrl },
      });
    } else {
      setFile(null);
      setError("Du kan bare legge til bildefiler (png, heic or jpeg)");
    }
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    setFile(submit);
    setLoading(true);
    document.querySelector(".submitForm").style.display = "none";
    document.querySelector(".output").style.marginTop = "-25px";
    document.querySelector(".thumbnail").style.opacity = "0.1";
  };

  return (
    <>
      {uploadImage ? (
        <div className="output">
          {error && <div className="error">{error}</div>}
          {loading && <div className="loading">Laster opp bildet ...</div>}
          {file && (
            <ProgressBar
              file={file}
              setFile={setFile}
              setLoading={setLoading}
              changeUploadStatus={changeUploadStatus}
            />
          )}
          {
            <button
              type="submit"
              className="submitForm"
              onClick={(e) => handleSumbit(e)}
            >
              Legg til bilde
            </button>
          }
        </div>
      ) : (
        <>
          <label htmlFor="file-upload" className="changeImageBtn">
            Velg et annet bilde
          </label>
        </>
      )}
      <form className="editForm" method="post" style={{ display: "none" }}>
        {<div className="thumbnail"></div>}
        <input id="file-upload" type="file" onChange={handleUpload} />
      </form>
    </>
  );
};
export default EditUpload;
