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
import Sidebar from "./layouts/Sidebar";

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
  const app = initializeApp(firebaseConfig);

  const auth = getAuth();

  if (auth) {
    return (
      <div className="App">
        <Router>
          <Header />
          <div className="flex flex-row w-full h-screen pt-20 z-50">
            <Sidebar />
            <Main />
          </div>

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
