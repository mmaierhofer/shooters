import React, { useState } from "react";
import "./App.scss";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import { BrowserRouter as Router } from "react-router-dom";
import Authentication from "./pages/Authentication";
import { UserContext } from "./contexts/userContext";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
  const auth = getAuth();
  // TODO: Replace the following with your app's Firebase project configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCfzdCzDKA4q-eBE_fbvMDG9GcVVVCY2TU",
    authDomain: "wrkshp-1289c.firebaseapp.com",
    projectId: "wrkshp-1289c",
    storageBucket: "wrkshp-1289c.appspot.com",
    messagingSenderId: "544956692352",
    appId: "1:544956692352:web:981e13ad0ce5459efeb365",
    measurementId: "G-0VYEQVKSM3",
  };

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
