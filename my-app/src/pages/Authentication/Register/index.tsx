import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import GoogleIcon from "@mui/icons-material/Google";

interface props {
  setAuth: Function;
}

export default function Register({ setAuth }: props) {
  return (
    <>
      <div className="auth-background">
        <div className="auth-card">
          <div className="auth-box">
            <div className="auth-header">Sign Up</div>
            <div className="auth-google">
              <Button variant="contained">
                <div>
                  <GoogleIcon />
                  Sign up with Google
                </div>
              </Button>
            </div>
            <div className="auth-form">
              <TextField id="standard-basic" label="Name" variant="outlined" />
              <TextField id="standard-basic" label="Email" variant="outlined" />
              <TextField
                id="standard-basic"
                label="Password"
                variant="outlined"
                type={"password"}
              />
              <TextField
                id="standard-basic"
                label="Repeat Password"
                variant="outlined"
                type={"password"}
              />
              <div className="auth-info">
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label=" Agree to the Terms & Conditions"
                />
              </div>
              <Button
                variant="contained"
                onClick={(e) => setAuth({ user: { isLoggedIn: true } })}
              >
                Log In
              </Button>
              <div className="auth-register">
                <div>
                  Already have an Account? <Link to="/login">Sign in</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
