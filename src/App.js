import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Products from "./pages/Produce";
import PreparedFoods from "./pages/PreparedFoods";
import  Canned  from "./pages/Canned";
import  Bakery  from "./pages/Bakery";
import  Dairy  from "./pages/Dairy";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/produce" component={Products} />
          <Route path="/PreparedFoods" component={PreparedFoods} />
          <Route path="/Canned" component={Canned} />
          <Route path="/Bakery" component={Bakery} />
          <Route path="/Dairy" component={Dairy} />
        </Switch>
      </Router>
    </div>
  );
}
