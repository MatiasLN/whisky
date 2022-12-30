import { useState, useEffect } from "react";
import { projectStorage, projectFirestore } from "../firebase/config";

const useStoreImageUrl = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [docId,] = useState(localStorage.getItem("id"));
  const [uid] = useState(localStorage.getItem("uid"));
  const [id] = useState(localStorage.getItem("id"));

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
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
        projectFirestore
          .collection(uid)
          .doc(id)
          .update({ url })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
        setUrl(url);
      }
    );
    // eslint-disable-next-line
  }, [file, uid]);

  return { progress, url, error, docId };
};

export default useStoreImageUrl;
