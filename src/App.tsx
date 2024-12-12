import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import VechileUploadScreen from "./screens/VehicleUploadScreen.tsx";
import UploadScreen from "./screens/UploadScreen.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<VechileUploadScreen />} />
      <Route path="/upload" element={<UploadScreen />} />
    </Routes>
  );
}

export default App;
