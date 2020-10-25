import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={About} />
          <Route path="/join-us" component={JoinUs} />
          <Route path="/donate" component={Donate} />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
