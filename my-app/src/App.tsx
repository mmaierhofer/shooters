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

function App() {
  const isLoggedIn: boolean = true;

  const [auth, setAuth] = useState({ user: { isLoggedIn: false } });
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

  if (auth.user.isLoggedIn) {
    return (
      <div className="App">
        <UserContext.Provider value={auth}>
          <Router>
            <Header />
            <Main />
            <Footer />
          </Router>
        </UserContext.Provider>
      </div>
    );
  } else {
    return (
      <div className="App">
        <UserContext.Provider value={auth}>
          <Router>
            <Authentication setAuth={setAuth} />
          </Router>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
