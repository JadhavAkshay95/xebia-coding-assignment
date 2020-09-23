import React, { useEffect, useState } from "react";
import { searchPlanetService } from "../service";
import PlanetCard from "./PlanetCard";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [planetList, setPlanetList] = useState([]);
  const [loader, setLoader] = useState([]);
  const [searchCount, setSearchCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setSearchCount(0);
    }, 1000 * 60);

    if (searchTerm !== "" && searchCount <= 15) {
      setSearchCount(searchCount + 1);
      setLoader(true);
      searchPlanetService(searchTerm)
        .then((data) => data.json())
        .then((data) => {
          setPlanetList(
            data.results.sort((a, b) => a.population - b.population)
          );
          setLoader(false);
        });
    }
  }, [searchTerm]);

  const searchHandler = ($event) => {
    setPlanetList([]);
    setSearchTerm($event.target.value);
  };

  return (
    <div>
      <div className="search-container">
        <h1>Search</h1>
        <input
          className="search-input"
          type="search"
          placeholder="Search Planet"
          value={searchTerm}
          onChange={searchHandler}
        />
      </div>
      {loader ? (
        <div>Loading...</div>
      ) : (
        <div>
          {planetList &&
            planetList.map((planet, i) => {
              return <PlanetCard planet={planet} fontSize={20 + i} />;
            })}

          {planetList &&
            !planetList.length &&
            searchTerm &&
            searchTerm !== "" &&
            searchCount <= 15 && <p>No search planet found!</p>}
        </div>
      )}
      {searchCount > 15 && <p> search limit exceed!</p>}
    </div>
  );
};

export default Search;
