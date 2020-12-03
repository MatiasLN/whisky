import React, { useState, useEffect, useContext } from "react";
import apiKey from "../../api/Vinmonopolet";
import { projectFirestore } from "../../firebase/config";
import { UserContext } from "../../context/UserContext";
import { WhiskyContext } from "../../context/WhiskyContext";
import { useHistory } from "react-router";

const GetWhiskyData = ({ notFound }) => {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(true);

  const user = useContext(UserContext);
  const { state } = useContext(WhiskyContext);
  let uid = user.user.uid;
  let whiskyName = input.split(" ").join("_");
  state.id = "ioxoXTIksLO2rAedhvHI;";
  const collectionRef = projectFirestore.collection(uid).doc(state.id);
  const history = useHistory();
  console.log(uid);

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
        "https://apis.vinmonopolet.no/products/v0/details-normal?productShortNameContains=" +
          whiskyName,
        requestOptions
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
    document.querySelector(".searchResults").style.display = "block";
  };

  const handleDataFromSearch = () => {
    const polet_name = localStorage.getItem("polet_name");
    const polet_productID = localStorage.getItem("polet_productID");
    const polet_percentage = localStorage.getItem("polet_percentage");
    const polet_country = localStorage.getItem("polet_country");
    const polet_region = localStorage.getItem("polet_region");
    const polet_destilery = localStorage.getItem("polet_destilery");
    const polet_descColour = localStorage.getItem("polet_descColour");
    const polet_descTaste = localStorage.getItem("polet_descTaste");
    const polet_descOdour = localStorage.getItem("polet_descOdour");

    collectionRef.update({ polet_name: polet_name });
    collectionRef.update({ polet_productID: polet_productID });
    collectionRef.update({ polet_percentage: polet_percentage });
    collectionRef.update({ polet_country: polet_country });
    collectionRef.update({ polet_region: polet_region });
    collectionRef.update({ polet_destilery: polet_destilery });
    collectionRef.update({ polet_descColour: polet_descColour });
    collectionRef.update({ polet_descTaste: polet_descTaste });
    collectionRef.update({ polet_descOdour: polet_descOdour });

    history.go(0);
  };

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
            <ul className="displayData">
              {data &&
                data.map((data) => (
                  <>
                    <li
                      key={data.basic.productId}
                      onClick={handleDataFromSearch}
                    >
                      {data.basic.productLongName}
                    </li>

                    {localStorage.setItem(
                      "polet_name",
                      data.basic.productLongName
                    )}
                    {localStorage.setItem(
                      "polet_productID",
                      data.basic.productId
                    )}
                    {localStorage.setItem(
                      "polet_percentage",
                      data.basic.alcoholContent
                    )}
                    {localStorage.setItem(
                      "polet_country",
                      data.origins.origin.country
                    )}
                    {localStorage.setItem(
                      "polet_region",
                      data.origins.origin.region
                    )}
                    {localStorage.setItem(
                      "polet_destilery",
                      data.logistics.manufacturerName
                    )}
                    {localStorage.setItem(
                      "polet_descColour",
                      data.description.characteristics.colour
                    )}
                    {localStorage.setItem(
                      "polet_descTaste",
                      data.description.characteristics.taste
                    )}
                    {localStorage.setItem(
                      "polet_descOdour",
                      data.description.characteristics.odour
                    )}
                  </>
                ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default GetWhiskyData;
