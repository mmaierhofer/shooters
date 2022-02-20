import React, { useState } from "react";
import "./App.scss";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import { BrowserRouter as Router } from "react-router-dom";
import Authentication from "./pages/Authentication";
import { UserContext } from "./contexts/userContext";

function App() {
  const isLoggedIn: boolean = false;

  const [auth, setAuth] = useState({ user: { isLoggedIn: false } });

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
