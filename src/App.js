import React from "react";

import "./App.css";
import Home from "./containers/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
