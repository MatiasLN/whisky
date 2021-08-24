import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import StarRating from "../../StarRating/StarRating";

const EditUpload = ({ title, notes }) => {
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

  const handleSetRating = (rating) => {
    setRating(rating);
    localStorage.setItem("rating", rating);
  };

  const handleExit = (e) => {
    e.preventDefault();
    document.querySelector("form").style.display = "none";
    document.querySelector(".whiskyItem").style.display = "grid";
    document.querySelector("#file-title").value = "";
    document.querySelector("#file-title").style.borderColor = "#4e4e4e";
    document.querySelector("#file-notes").value = "";
    document.querySelector(".custom-file-upload").innerHTML =
      "Legg til nytt bilde";
    document.querySelector(".thumbnail").innerHTML = "";
    if (document.body.classList.contains("error")) {
      document.querySelector(".error").remove();
    }
  };

  const handleInput = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "title") {
      console.log(value);
      localStorage.setItem("title", value);
    } else if (name === "notes") {
      localStorage.setItem("notes", value);
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (!document.getElementById("file-title").value) {
      var node = document.getElementById("file-title");
      node.insertAdjacentHTML(
        "afterend",
        "<div class='error'><p>Du må legge til en tittel</p></div>"
      );
      node.scrollIntoView();
      node.style.borderColor = "red";
    } else {
      setFile(submit);
    }
  };

  return (
    <>
      <button
        className="editWhiskyBtn"
        onClick={(e) => {
          document.querySelector(".editForm").style.display = "flex";
          document.querySelector(".whiskyItem").style.display = "none";
        }}
      >
        Rediger {title}
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
        <input
          id="file-title"
          type="text"
          name="title"
          placeholder={title}
          onChange={(event) => handleInput(event)}
        />
        <textarea
          id="file-notes"
          name="notes"
          rows={5}
          cols={5}
          placeholder={notes}
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
            <ProgressBar file={file} setFile={setFile} setRating={setRating} />
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
    </>
  );
};
export default EditUpload;
