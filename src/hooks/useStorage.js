import { useState, useEffect, useContext } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";
import { UserContext } from "../context/UserContext";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [docId, setDocId] = useState(null);
  const user = useContext(UserContext);
  const uid = user.user.uid;

  useEffect(() => {
    // ref
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection(uid);

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        const title = localStorage.getItem("title");
        const star = localStorage.getItem("rating");
        const notes = localStorage.getItem("notes");
        const polet_country = "";
        const polet_descColour = "";
        const polet_descOdour = "";
        const polet_descTaste = "";
        const polet_destilery = "";
        const polet_name = "";
        const polet_percentage = "";
        const polet_price = "";
        const polet_productID = "";
        const polet_region = "";
        collectionRef
          .add({
            url,
            createdAt,
            title,
            star,
            notes,
            polet_country,
            polet_descColour,
            polet_descOdour,
            polet_descTaste,
            polet_destilery,
            polet_name,
            polet_percentage,
            polet_price,
            polet_productID,
            polet_region,
          })
          .then(function (docRef) {
            setDocId(docRef.id);
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
        setUrl(url);
        localStorage.setItem("rating", "");
        localStorage.setItem("notes", "");
      }
    );
  }, [file, uid]);

  return { progress, url, error, docId };
};

export default useStorage;
