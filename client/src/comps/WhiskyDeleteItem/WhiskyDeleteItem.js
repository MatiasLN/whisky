import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";

export default function WhiskyDeleteItem({ title }) {
  const [id] = useState(localStorage.getItem("id"));
  const [uid] = useState(localStorage.getItem("uid"));

  const history = useHistory();
  const closeDeletePopup = () => {
    document.querySelector(".deleteItemContainer").style.display = "none";
  };

  const confirmDelete = () => {
    const collectionRef = projectFirestore.collection(uid).doc(id);
    const executeDelete = async () => {
      await collectionRef.delete();
    };
    executeDelete();
    history.push("/whisky");
  };

  return (
    <div className="deleteItemContainer">
      <div className="deleteItem">
        <p className="deleteText">Vil du slette {title}?</p>
        <div className="buttonGroup">
          <button className="deleteButton" onClick={confirmDelete}>
            Ja, slett
          </button>
          <button className="closeButton" onClick={closeDeletePopup}>
            Nei, gå tilbake
          </button>
        </div>
      </div>
    </div>
  );
}
