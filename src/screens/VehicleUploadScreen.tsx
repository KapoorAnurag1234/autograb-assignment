import React, { useState } from "react";
import VehicleSelector from "../components/VehicleSelector.tsx";
import FileReaderComponent from "../components/FileReaderComponent.tsx";
import type { Vehicle } from "../types/vehicle.js";
import { BUTTON_TYPE } from "../constants/vehicle.ts";
import QuickSelectButtons from "../components/QuickSelectButtons.tsx";
import { postData } from "../api.ts";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button.tsx";

function VechileUploadScreen() {
  const [vehicle, setVehicle] = useState<Vehicle>({
    make: "",
    model: "",
    badge: "",
  });
  const [fileContent, setFileContent] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await postData("/upload", {
        ...vehicle,
        logbook: fileContent,
      });

      navigate("/upload", { state: response });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h1>Drill Down Form</h1>
      <div className="container">
        <VehicleSelector vehicle={vehicle} handleVehicle={setVehicle} />
        {vehicle.badge && (
          <div className="flex flex-column">
            <p>Upload Log Book:</p>
            <FileReaderComponent handleFileContent={setFileContent} />
            {fileContent && (
              <Button
                title="Submit"
                type={BUTTON_TYPE.SUBMIT}
                onClick={handleSubmit}
              />
            )}
          </div>
        )}

        <h1>Select a Vehicle</h1>

        <QuickSelectButtons handleVehicle={setVehicle} />
      </div>
    </>
  );
}

export default VechileUploadScreen;
