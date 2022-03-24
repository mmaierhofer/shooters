import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";

export default function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}
