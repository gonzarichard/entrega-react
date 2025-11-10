import React from "react";
import "./Header.css";

const Header = () => {
  const categorias = ["Ropa", "Electrónica", "Hogar", "Juguetes", "Deportes"];

  return (
    <header className="header">
      <div className="header-logo">
        <h1>MiTienda</h1>
      </div>
      <div className="header-search">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="search-input"
        />
        <button className="search-button">Buscar</button>
      </div>

      {/* Categorías */}
      <nav className="header-categories">
        {categorias.map((cat) => (
          <a key={cat} href="#" className="category-link">
            {cat}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
