import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeers() {
  const [allBeers, setAllbeers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const fetchBeers = async () => {
    const responese = await axios.get(
      "https://ih-beers-api2.herokuapp.com/beers"
    );

    console.log("responese...", responese.data);

    setAllbeers(responese.data);
  };
  useEffect(() => {
    fetchBeers();
  }, []);

  const handleChange = async (event) => {
    setSearchInput(event.target.value);

    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchInput}`
    );

    console.log("responseSearch...", response.data);
    setAllbeers(response.data);
  };

  return (
    <div>
      <img src="src/assets/beers.png" alt="beers" />
      <Header />
      <h1>All Beers</h1>
      <label>
        search some beers
        <input
          placeholder="search some beers"
          value={searchInput}
          type="text"
          onChange={handleChange}
        />
      </label>
      {allBeers.map((beer) => {
        return (
          <div key={beer._id} style={{display:"flex", marginBottom:"45px"}}>
            <img src={beer.image_url} alt="beer" style={{ height: "250px" }} />
            <div style={{display:"flex", flexDirection:"column"}}>
            <p>{beer.name}</p>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            <Link to={`/allBeers/${beer._id}`}>Beer Details</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeers;
