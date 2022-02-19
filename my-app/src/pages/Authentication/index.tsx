import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

export default function Authentication() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}
