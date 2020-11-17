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
  console.log(uid);

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
        collectionRef
          .add({ url, createdAt, title, star, notes })
          .then(function (docRef) {
            setDocId(docRef.id);
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error, docId };
};

export default useStorage;
