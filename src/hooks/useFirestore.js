import { useState, useEffect, useContext } from "react";
import { projectFirestore } from "../firebase/config";
import useUser from "../hooks/useUser";
import { WhiskyContext } from "../context/WhiskyContext";

const useFirestore = () => {
  const { uid } = useUser();
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [titles, setTitles] = useState([]);
  const [distilleries, setDistilleries] = useState([]);
  const [countries, setCountry] = useState([]);
  const [regions, setRegion] = useState([]);
  const { update } = useContext(WhiskyContext);

  useEffect(() => {
    if (uid) {
      const unsub = projectFirestore
        .collection(uid)
        .orderBy("createdAt", "desc")
        .onSnapshot((snap) => {
          let documents = [];
          let titles = [];
          let distilleries = [];
          let countries = [];
          let regions = [];
          snap.forEach((doc) => {
            titles.push(doc.data().title);
            distilleries.push(doc.data().polet_destilery);
            countries.push(doc.data().polet_country);
            regions.push(doc.data().polet_region);
            documents.push({ ...doc.data(), id: doc.id });
          });
          setDocs(documents);
          setLoading(false);
          setTitles(titles);
          setDistilleries(distilleries);
          setCountry(countries);
          setRegion(regions);
          update({
            countedWhiskyData: {
              titles: titles,
              distillery: distilleries,
              country: countries,
              region: regions,
            },
          });
        });
      return () => unsub();
      // this is a cleanup function that react will run when
      // a component using the hook unmounts
    }
  }, [uid]);
  return { docs, loading, titles, distilleries, countries, regions };
};

export default useFirestore;
