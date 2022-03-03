import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import GoogleIcon from "@mui/icons-material/Google";
import { UserContext } from "../../../contexts/userContext";

interface props {
  setAuth: Function;
}

export default function Login({ setAuth }: props) {
  const auth = useContext(UserContext);

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
              <TextField id="standard-basic" label="Email" variant="outlined" />
              <TextField
                id="standard-basic"
                label="Password"
                variant="outlined"
                type={"password"}
              />
              <div className="auth-info">
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Remember me"
                />

                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <Button
                variant="contained"
                onClick={(e) => setAuth({ user: { isLoggedIn: true } })}
              >
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
