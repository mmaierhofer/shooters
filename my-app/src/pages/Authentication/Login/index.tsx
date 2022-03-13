import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import GoogleIcon from "@mui/icons-material/Google";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  console.log(auth);
  return (
    <>
      <div className="auth-background">
        <div className="auth-card">
          <div className="auth-box">
            <div className="auth-header">Login</div>
            <div className="auth-google">
              <Button variant="contained">
                <div>
                  <GoogleIcon />
                  Sign in with Google
                </div>
              </Button>
            </div>
            <div className="login-form">
              <TextField
                id="standard-basic"
                label="Email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Password"
                variant="outlined"
                type={"password"}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="auth-info">
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Remember me"
                />

                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <Button variant="contained" onClick={(e) => handleSignIn()}>
                Log In
              </Button>
              <div className="auth-register">
                <div>
                  Not registered yet?{" "}
                  <Link to="/register">Create an Account</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
