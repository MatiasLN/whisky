import React, { useState, useContext, useEffect } from "react";
import apiKey from "../../api/Vinmonopolet";
import { projectFirestore } from "../../firebase/config";
import { WhiskyContext } from "../../context/WhiskyContext";

const GetWhiskyData = ({ notFound, setCallback }) => {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [id] = useState(localStorage.getItem("id"));
  const [uid] = useState(localStorage.getItem("uid"));
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(null);
  const [checkForType, setCheckFortype] = useState("");

  const { update } = useContext(WhiskyContext);
  let whiskyName = input.split(" ").join("_");
  const collectionRef = projectFirestore.collection(uid).doc(id);

  useEffect(() => {
    if (whiskyName.match(/^\d/)) {
      setCheckFortype("productId=" + whiskyName);
    } else {
      setCheckFortype("productShortNameContains=" + whiskyName);
    }
  }, [input]);

  const handleRequest = () => {
    const fetchData = async () => {
      console.log("running manual fetch");

      const myHeaders = new Headers();
      myHeaders.append("Ocp-Apim-Subscription-Key", apiKey);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(
        "https://apis.vinmonopolet.no/products/v0/details-normal?changedSince=2000-01-01&" +
          checkForType,
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
    const searchResults = document.querySelectorAll(".searchResults");

    // searchResults.scrollIntoView();
    searchResults[0].style.display = "block";
    searchResults[1].style.display = "block";
  };

  useEffect(() => {
    if (selected) {
      // const updateDetails = async () => {
      //   await collectionRef.update({
      //     polet_name: selected.basic.productLongName,
      //     polet_productID: selected.basic.productId,
      //     polet_percentage: selected.basic.alcoholContent,
      //     polet_price: selected.prices[0].salesPrice,
      //     polet_country: selected.origins.origin.country,
      //     polet_region: selected.origins.origin.region,
      //     polet_destilery: selected.logistics.manufacturerName,
      //     polet_descColour: selected.description.characteristics.colour,
      //     polet_descTaste: selected.description.characteristics.taste,
      //     polet_descOdour: selected.description.characteristics.odour,
      //   });
      //   await update({ searchResults: selected });
      // };
      // updateDetails();

      const fetchData = async () => {
        const myHeaders = new Headers();
        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        const response = await fetch(
          "https://www.vinmonopolet.no/api/products/" +
            selected.basic.productId,
          requestOptions
        );

        const res = await response.json();
        const updateDetails = async () => {
          await collectionRef.update({
            polet_name: res.name,
            polet_productID: res.code,
            polet_price: res.price.value,
            polet_country: res.main_country.name,
            polet_region: res.district.name,
          });
          await update({ searchResults: selected });
        };
        updateDetails();

        const searchResults = document.querySelectorAll(".searchResults");
        searchResults[0].style.display = "none";
        searchResults[1].style.display = "none";
      };
      fetchData();
    }
  }, [selected]);

  return (
    <>
      <div className="getWhiskyInfo">
        {notFound ? (
          <p className="noWataFound">Søk etter produktet hos Vinmonopolet</p>
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
                      {data.basic.productShortName}
                    </li>
                  ))}
              </ul>
              {error && (
                <>
                  <p>
                    Fant dessverre ingen produkter på Vinmonopolet som matcher
                    søket ditt.
                  </p>
                  <button
                    className="addNewBtn"
                    onClick={() => {
                      update({ manual: true });
                    }}
                  >
                    Vil du legge til manuelt?
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GetWhiskyData;
