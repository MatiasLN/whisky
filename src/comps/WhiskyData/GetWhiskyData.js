import React, { useState, useContext, useEffect } from "react";
import apiKey from "../../api/Vinmonopolet";
import { projectFirestore } from "../../firebase/config";
import { UserContext } from "../../context/UserContext";
import { WhiskyContext } from "../../context/WhiskyContext";

const GetWhiskyData = ({ notFound, setCallback }) => {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [id] = useState(localStorage.getItem("id"));
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(null);

  const { update } = useContext(WhiskyContext);
  const user = useContext(UserContext);
  let uid = user.user.uid;
  let whiskyName = input.split(" ").join("_");
  const collectionRef = projectFirestore.collection(uid).doc(id);

  const handleRequest = () => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Ocp-Apim-Subscription-Key", apiKey);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(
        "https://apis.vinmonopolet.no/products/v0/details-normal?changedSince=2000-01-01&productShortNameContains=" +
          whiskyName,
        requestOptions
      );
      const data = await response.json();
      if (data.length) {
        setError(null);
        setData(data);
      } else {
        setError(true);
        setData(null);
      }
      setLoading(false);
    };
    fetchData();
    const searchResults = document.querySelector(".searchResults");
    searchResults.scrollIntoView();
    searchResults.style.display = "block";
  };

  useEffect(() => {
    if (selected) {
      const updateDetails = async () => {
        await collectionRef.update({
          polet_name: selected.basic.productLongName,
        });
        await collectionRef.update({
          polet_productID: selected.basic.productId,
        });
        await collectionRef.update({
          polet_percentage: selected.basic.alcoholContent,
        });
        await collectionRef.update({
          polet_price: selected.prices[0].salesPrice,
        });
        await collectionRef.update({
          polet_country: selected.origins.origin.country,
        });
        await collectionRef.update({
          polet_region: selected.origins.origin.region,
        });
        await collectionRef.update({
          polet_destilery: selected.logistics.manufacturerName,
        });
        await collectionRef.update({
          polet_descColour: selected.description.characteristics.colour,
        });
        await collectionRef.update({
          polet_descTaste: selected.description.characteristics.taste,
        });
        await collectionRef.update({
          polet_descOdour: selected.description.characteristics.odour,
        });
        await update({ searchResults: selected });
      };
      updateDetails();

      document.querySelector(".searchResults").style.display = "none";
    }
  }, [selected]);

  return (
    <>
      <div className="getWhiskyInfo">
        {notFound ? (
          <p className="noWataFound">Fant ikke noe data fra Vinmonopolet</p>
        ) : (
          <p>Stemmer ikke informasjonen?</p>
        )}
        <div className="searchForm">
          <input
            type="text"
            onChange={(event) => setInput(event.target.value)}
          />
          <button className="addNewBtn search" onClick={handleRequest}>
            Finn riktig produkt
          </button>
        </div>
        <div className="searchResults">
          {isLoading ? (
            <h3 className="loadingData">
              Laster inn data fra Vinmonopolet ...
            </h3>
          ) : (
            <div className="displayData">
              <ul>
                {data &&
                  data.map((data) => (
                    <li
                      key={data.basic.productId}
                      onClick={function () {
                        setSelected(data);
                      }}
                    >
                      {data.basic.productLongName}
                    </li>
                  ))}
              </ul>
              {error && (
                <div>
                  <p>
                    Fant dessverre ingen produkter på Vinmonopolet som matcher
                    søket ditt.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GetWhiskyData;
