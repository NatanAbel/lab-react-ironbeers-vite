import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div >
      <header>
        <ul style={{ marginLeft: "40px" , display:"flex" ,justifyContent:"space-around",listStyle:"none"}}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/allBeers">All Beers</NavLink></li>
          <li><NavLink to="/newBeer">New Beer</NavLink></li>
          <li><NavLink to="/randombeer">Random Beer</NavLink></li>
        </ul>
      </header>
      
    </div>
  );
}

export default Header;
