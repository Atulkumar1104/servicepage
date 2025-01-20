import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Developers from "../developers/hire-Developers";


const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/hire" element={ <Developers/>}/>
    </Routes>
  );
};

export default Routers;
