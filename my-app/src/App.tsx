import React, { useState } from "react";
import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import { BrowserRouter as Router } from "react-router-dom";
import Authentication from "./pages/Authentication";

function App() {
  const isLoggedIn: boolean = false;

  if (isLoggedIn) {
    return (
      <div className="App">
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Router>
          <Authentication />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
