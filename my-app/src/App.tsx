import React, { useState } from "react";
import "./App.scss";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import { BrowserRouter as Router } from "react-router-dom";
import Authentication from "./pages/Authentication";
import { UserContext } from "./contexts/userContext";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./config/firebase";

interface users {
  localId: string;
  email: string;
  emailVerified: boolean;
  lastRefreshAt: number;
}

interface auth {
  kind: string;
  users: Array<users>;
}

function App() {
  console.log("change");
  const auth = getAuth();

  const app = initializeApp(firebaseConfig);

  if (auth) {
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
        </Router>
      </div>
    );
  }
}

export default App;
