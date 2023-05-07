import React from "react";
import CartWidget from "./CartWidget";
import itemListContainer from "./itemsListContainer";

const NavBar = () => {
  
return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Juan Perez Vintage</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Mujer</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Hombre</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Niños</a>
          </li>
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Otros
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Oferta</a></li>
              <li><a className="dropdown-item" href="#">Tu cuenta</a></li>
              <li><a className="dropdown-item" href="#">Historia</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <CartWidget/>

  </nav>
  
  
);
   
}

export default NavBar;
