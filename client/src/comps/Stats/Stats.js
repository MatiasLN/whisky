import React, { useEffect, useState, useContext } from "react";
import useFirestore from "../../hooks/useFirestore";
import { WhiskyContext } from "../../context/WhiskyContext";

const Details = ({ db }) => {
  const [destilery, setDestilery] = useState(null);
  const [region, setRegion] = useState(null);
  const [country, setCountry] = useState(null);
  const { state } = useContext(WhiskyContext);

  const { distilleries, countries, regions } = useFirestore();

  function checkDb(checkFor, string) {
    let counts = {};
    checkFor.forEach(function (x) {
      counts[x] = (counts[x] || 0) + 1;
    });

    for (const [key, value] of Object.entries(counts)) {
      if (string === key) {
        return (
          <>
            <div>
              <h2>{value}</h2>
              <span>x</span>
            </div>
            <p>{key}</p>
          </>
        );
      }
    }
  }

  useEffect(() => {
    if (db.polet_country) {
      setCountry(checkDb(countries, db.polet_country));
    }
    if (db.polet_destilery) {
      setDestilery(checkDb(distilleries, db.polet_destilery));
    }
    if (db.polet_region) {
      setRegion(checkDb(regions, db.polet_region));
    }
  }, [db, countries, distilleries, regions, state.updateEditedDetails]);

  return (
    <div className="stats">
      {destilery ? <div className="destilery">{destilery}</div> : null}
      {region ? <div className="region">{region}</div> : null}
      {country ? <div className="country">{country}</div> : null}
    </div>
  );
};

export default Details;
