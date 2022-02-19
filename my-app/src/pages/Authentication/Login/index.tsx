import { Button, Card, TextField } from "@mui/material";
import React from "react";

export default function Login() {
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
        <Button variant="contained">Log In</Button>
      </Card>
    </>
  );
}
