import React from "react";
import { Routes, Route } from "react-router-dom";
import Locations from "../../pages/Locations";
import Workshop from "../../pages/Workshop";
import Workshops from "../../pages/Workshops";

export default function Main() {
  return (
    <>
      <Routes>
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/workshop/add" element={<Workshop />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/" element={<Workshops />} />
      </Routes>
    </>
  );
}
