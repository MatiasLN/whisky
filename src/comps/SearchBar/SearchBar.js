import React, { useContext, useState, useEffect } from "react";
import useFirestore from "../../hooks/useFirestore";
import { UserContext } from "../../context/UserContext";

export default function SearchBar() {
  const [data, setData] = useState("");
  const user = useContext(UserContext);
  const uid = user.user.uid;
  const { titles } = useFirestore(uid);

  useEffect(() => {
    if (titles.length) {
      setData(titles);
    }
  }, [titles]);

  return (
    <div className="search">
      <input type="text" placeholder="Søk etter whisky" />
    </div>
  );
}
