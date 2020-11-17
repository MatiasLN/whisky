import React, { useEffect, useState } from "react";
import useStorage from "../hooks/useStorage";
import { projectFirestore } from "../firebase/config";
import StarRating from "./StarRating";
import ProgressBar from "./ProgressBar";

const ChangeForm = ({ file, setFile }) => {
  const { url, title, note, star, docId } = useStorage(file);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpg", "image/jpeg", "image/heic"];
  const [rating, setRating] = useState(star);

  const handleUpload = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png, heic or jpeg)");
    }
  };

  const handleSetRating = (rating) => {
    setRating(rating);
    localStorage.setItem("rating", rating);
  };

  //   const handleExit = (e) => {
  //     if (e.target.classList.contains("backdrop")) {
  //       document.querySelector(".uploadForm").style.display = "none";
  //       document.querySelector(".changeForm").style.display = "flex";
  //       document.querySelector(".img-grid").style.display = "grid";
  //       document.querySelector(".backdrop").style.display = "none";
  //       document.querySelector("#file-title").value = "";
  //       document.querySelector("#file-notes").value = "";
  //     }
  //   };

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
    const collectionRef = projectFirestore.collection("images").doc(docId);
    collectionRef.update({ title: localStorage.getItem("title") });
    collectionRef.update({ notes: localStorage.getItem("notes") });
    collectionRef.update({ star: rating });
    document.querySelector(".uploadForm").style.display = "none";
    document.querySelector(".changeForm").style.display = "none";
    document.querySelector(".img-grid").style.display = "grid";
    document.querySelector(".backdrop").style.display = "none";
    document.querySelector("#file-title").value = "";
    document.querySelector("#file-notes").value = "";
  };

  return (
    <>
      <form className="changeForm" style={{ display: "none" }}>
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
          placeholder={note}
          onChange={(event) => handleInput(event)}
        />
        <div className="starRating">
          <StarRating rating={rating} setRating={handleSetRating} />
        </div>
        <label htmlFor="file-upload" className="custom-file-upload">
          Velg et annet bilde
        </label>
        <input id="file-upload" type="file" onChange={handleUpload} />
        <div className="output">
          {error && <div className="error">{error}</div>}
          {/* {file && <ProgressBar file={file} setFile={setFile} />} */}
          {/* {url && <img src={url} className="thumbnail" alt={url} />} */}
        </div>
        <button
          type="submit"
          className="addNewBtn"
          onClick={(e) => handleSumbit(e)}
        >
          Legg til i samlingen
        </button>
      </form>
    </>
  );
};
export default ChangeForm;
