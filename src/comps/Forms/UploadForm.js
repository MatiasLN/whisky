import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import StarRating from "./../StarRating/StarRating";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpg", "image/jpeg", "image/heic"];
  const [rating, setRating] = useState(0);
  const [submit, setSumbit] = useState("");

  function handleUpload(e) {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      let image = document.createElement("img");
      image.src = URL.createObjectURL(selected);
      console.log(image);
      setSumbit(selected);
      setError("");
      document.querySelector(".submitForm").style.display = "block";
      document.querySelector(".thumbnail").innerHTML = "";
      document.querySelector(".thumbnail").appendChild(image);
      console.log(selected);
      document.querySelector(".custom-file-upload").innerHTML =
        "Velg et annet bilde";
    } else {
      setFile(null);
      setError("Du kan bare legge til bildefiler (png, heic or jpeg)");
    }
  }

  const handleSetRating = (rating) => {
    setRating(rating);
    localStorage.setItem("rating", rating);
  };

  const handleExit = (e) => {
    if (e.target.classList.contains("backdrop")) {
      document.querySelector("form").style.display = "none";
      document.querySelector(".img-grid").style.display = "grid";
      document.querySelector(".backdrop").style.display = "none";
      document.querySelector("#file-title").value = "";
      document.querySelector("#file-notes").value = "";
      document.querySelector(".custom-file-upload").innerHTML =
        "Legg til bilde";
      document.querySelector(".thumbnail").innerHTML = "";
    }
  };

  const handleInput = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "title") {
      localStorage.setItem("title", value);
    } else if (name === "notes") {
      localStorage.setItem("notes", value);
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    setFile(submit);
  };

  return (
    <>
      <button
        className="addNewBtn"
        onClick={(e) => {
          document.querySelector(".uploadForm").style.display = "flex";
          document.querySelector(".backdrop").style.display = "block";
          document.querySelector(".img-grid").style.display = "none";
        }}
      >
        Legg til ny whisky
      </button>
      <div
        className="backdrop"
        onClick={handleExit}
        style={{ display: "none" }}
      >
        <form className="uploadForm" style={{ display: "none" }}>
          <input
            id="file-title"
            type="text"
            name="title"
            placeholder="Hva heter whiskyen?"
            onChange={(event) => handleInput(event)}
          />
          <textarea
            id="file-notes"
            name="notes"
            rows={5}
            cols={5}
            placeholder="Smaksnotater ..."
            onChange={(event) => handleInput(event)}
          />
          <div className="starRating">
            <StarRating rating={rating} setRating={handleSetRating} />
          </div>
          {<div className="thumbnail"></div>}
          <label htmlFor="file-upload" className="custom-file-upload">
            Legg til bilde
          </label>
          <input id="file-upload" type="file" onChange={handleUpload} />
          <div className="output">
            {error && <div className="error">{error}</div>}
            {file && (
              <ProgressBar
                file={file}
                setFile={setFile}
                setRating={setRating}
              />
            )}
            {
              <button
                type="submit"
                className="addNewBtn submitForm"
                onClick={(e) => handleSumbit(e)}
              >
                Legg til i samlingen
              </button>
            }
          </div>
        </form>
      </div>
    </>
  );
};
export default UploadForm;
