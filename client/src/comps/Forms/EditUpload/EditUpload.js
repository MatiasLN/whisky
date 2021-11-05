import React, { useState, useEffect, useContext } from "react";
import ProgressBar from "./ProgressBar";
import { WhiskyContext } from "../../../context/WhiskyContext";

const EditUpload = ({ title, notes }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpg", "image/jpeg", "image/heic"];
  const [submit, setSumbit] = useState("");
  const { state } = useContext(WhiskyContext);

  useEffect(() => {
    console.log(state.id);
  }, []);

  function handleUpload(e) {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      let image = document.createElement("img");
      image.src = URL.createObjectURL(selected);
      setSumbit(selected);
      setError("");
      document.querySelector(".submitForm").style.display = "block";
      document.querySelector(".thumbnail").innerHTML = "";
      document.querySelector(".thumbnail").appendChild(image);
      document.querySelector(".custom-file-upload").innerHTML =
        "Velg et annet bilde";
    } else {
      setFile(null);
      setError("Du kan bare legge til bildefiler (png, heic or jpeg)");
    }
  }

  const handleExit = (e) => {
    e.preventDefault();
    document.querySelector("form").style.display = "none";
    document.querySelector(".whiskyItem").style.display = "grid";
    document.querySelector(".custom-file-upload").innerHTML =
      "Legg til nytt bilde";
    document.querySelector(".thumbnail").innerHTML = "";
    if (document.body.classList.contains("error")) {
      document.querySelector(".error").remove();
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    setFile(submit);
  };

  return (
    <>
      <button
        className="changeImageBtn"
        onClick={(e) => {
          document.querySelector(".editForm").style.display = "flex";
        }}
      >
        Last opp et nytt bilde {title}
      </button>
      <form className="editForm" method="post" style={{ display: "none" }}>
        <button
          action="action"
          type="submit"
          className="closeForm"
          onClick={(e) => handleExit(e)}
        >
          Lukk
        </button>
        {<div className="thumbnail"></div>}
        <label htmlFor="file-upload" className="custom-file-upload">
          Legg til bilde
        </label>
        <input id="file-upload" type="file" onChange={handleUpload} />
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
          {
            <button
              type="submit"
              className="addNewBtn submitForm"
              onClick={(e) => handleSumbit(e)}
            >
              Legg til bilde
            </button>
          }
        </div>
      </form>
    </>
  );
};
export default EditUpload;
