import { useState, useEffect } from "react";
import { auth } from "../firebase/config";

const useUser = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [uid, setUid] = useState("");

  useEffect(() => {
    const displayName = localStorage.getItem("displayName");
    const email = localStorage.getItem("email");
    const photoURL = localStorage.getItem("photoURL");
    const uid = localStorage.getItem("uid");

    if (displayName && email && photoURL && uid !== "") {
      setDisplayName(displayName);
      setEmail(email);
      setPhotoURL(photoURL);
      setUid(uid);
    } else {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const { displayName, email, photoURL, uid } = user;
          console.log("fetching user data");

          // set user data to local
          localStorage.setItem("displayName", displayName);
          localStorage.setItem("email", email);
          localStorage.setItem("photoURL", photoURL);
          localStorage.setItem("uid", uid);

          // set user data if not in localStorage
          setDisplayName(displayName);
          setEmail(email);
          setPhotoURL(photoURL);
          setUid(uid);
        }
      });
    }
  }, []);
  return { displayName, email, photoURL, uid };
};

export default useUser;
