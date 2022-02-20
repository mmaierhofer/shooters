import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

interface props {
  setAuth: Function;
}

export default function Authentication({ setAuth }: props) {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/register" element={<Register setAuth={setAuth} />} />
        <Route path="/" element={<Login setAuth={setAuth} />} />
      </Routes>
    </>
  );
}
