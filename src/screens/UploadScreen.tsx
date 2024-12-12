import React from "react";
import { useLocation } from "react-router-dom";

function UploadScreen() {
  const location = useLocation();
  const { make, model, badge, logbook } = location.state || {};

  if (!location.state) {
    return <div>No data received</div>;
  }

  return (
    <div>
      <span>Make: {make}</span>
      <span> Model: {model}</span>
      <span>Badge: {badge}</span>
      <span>Logbook: {logbook}</span>
    </div>
  );
}

export default UploadScreen;
