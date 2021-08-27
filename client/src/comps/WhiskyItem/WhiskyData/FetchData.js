import React, { useState, useContext, useEffect } from "react";
import { projectFirestore } from "../../../firebase/config";
import { WhiskyContext } from "../../../context/WhiskyContext";

const FetchData = ({ notFound, setCallback }) => {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [id] = useState(localStorage.getItem("id"));
  const [uid] = useState(localStorage.getItem("uid"));
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState("");
  const [productUrl, setProductUrl] = useState("");

  const { update } = useContext(WhiskyContext);
  let whiskyName = input.split(" ").join("_");
  const collectionRef = projectFirestore.collection(uid).doc(id);

  useEffect(() => {
    setUrl(
      "https://www.vinmonopolet.no/vmp/search/?q=" +
        whiskyName +
        ":relevance:visibleInSearch:true:mainCategory:brennevin:mainSubCategory:brennevin_whisky&searchType=product"
    );
  }, [input]);

  const handleRequest = () => {
    fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ url: url }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length) {
          setError(null);
          setData(data);
        } else {
          setError(true);
          setData(null);
        }
        setLoading(false);
      });

    const searchResults = document.querySelectorAll(".searchResults");
    searchResults[0].style.display = "block";
    searchResults[1].style.display = "block";
  };

  useEffect(() => {
    if (selected) {
      fetch("/api/singleProduct", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ url: productUrl }),
      })
        .then((response) => response.json())
        .then((data) => {
          data.details.map(getProductDetails);
          function getProductDetails(item) {
            if (item.type === "Varenummer") {
              data.productID = item.value;
            }
            if (item.type === "Produsent") {
              data.destilery = item.value;
            }
            if (item.type === "Farge") {
              data.colour = item.value;
            }
            if (item.type === "Smak") {
              data.taste = item.value;
            }
            if (item.type === "Lukt") {
              data.odour = item.value;
            }
          }

          const updateDetails = async () => {
            await collectionRef.update({
              polet_name: data.name,
              polet_productID: data.productID,
              polet_price: data.price,
              polet_country: data.country,
              polet_region: data.region,
              polet_percentage: data.percentage,
              polet_destilery: data.destilery,
              polet_descColour: data.colour,
              polet_descTaste: data.taste,
              polet_descOdour: data.odour,
            });
            await update({ searchResults: selected });
          };
          updateDetails();

          const searchResults = document.querySelectorAll(".searchResults");
          searchResults[0].style.display = "none";
          searchResults[1].style.display = "none";
        });
    }
  }, [selected]);

  return (
    <>
      <div className="getWhiskyInfo">
        {notFound ? (
          <p className="noDataFound">Søk etter produktet hos Vinmonopolet</p>
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
              Søker etter produkter på Vinmonopolet ...
            </h3>
          ) : (
            <div className="displayData">
              <ul>
                {data &&
                  data.map((data) => (
                    <li
                      key={data.url}
                      onClick={function () {
                        setSelected(data);
                        setProductUrl("http://vinmonopolet.no" + data.url);
                      }}
                    >
                      {data.name}
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

export default FetchData;
