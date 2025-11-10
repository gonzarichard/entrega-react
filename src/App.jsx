import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <ItemListContainer greeting="¡Bienvenido a MiTienda, disfruta nuestras ofertas!" />
    </>
  );
};

export default App;
