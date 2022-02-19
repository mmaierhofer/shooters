import React from "react";
import { Button, Card, TextField } from "@mui/material";

export default function Register() {
  return (
    <>
      <Card sx={{ maxWidth: 600 }}>
        <TextField id="standard-basic" label="Email" variant="standard" />
        <br />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type={"password"}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Repeat Password"
          variant="standard"
          type={"password"}
        />
        <br />
        <TextField id="standard-basic" label="Firstname" variant="standard" />
        <br />
        <TextField id="standard-basic" label="Lastname" variant="standard" />
        <br />
        <Button variant="contained">Sign Up</Button>
      </Card>
    </>
  );
}
