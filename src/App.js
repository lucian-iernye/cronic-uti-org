import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import About from "./containers/About/About";
import JoinUs from "./containers/JoinUs/JoinUs";
import Donate from "./containers/Donate/Donate";
import Conditions from "./containers/Conditions/Conditions";
import Contact from "./containers/Contact/Contact";

const App = () => {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
