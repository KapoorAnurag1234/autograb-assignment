import React, { memo } from "react";
import type { Vehicle } from "../types/vehicle.d.ts";
import { MODELS } from "../vehicle.ts";
import Select from "./Select.tsx";

interface VehicleSelectorProps {
  vehicle: Vehicle;
  handleVehicle: (data: Vehicle) => void;
}

function VehicleSelector({ vehicle, handleVehicle }: VehicleSelectorProps) {
  const makeOptions = Object.keys(MODELS).map((make) => ({
    name: make,
    value: make,
  }));
  const modelOptions = vehicle.make
    ? Object.keys(MODELS[vehicle.make]).map((model) => ({
        name: model,
        value: model,
      }))
    : [];
  const badgeOptions = vehicle.model
    ? MODELS[vehicle.make][vehicle.model].map((badge) => ({
        name: badge,
        value: badge,
      }))
    : [];

  return (
    <div className="flex flex-column">
      <Select
        label="Make"
        options={makeOptions}
        value={vehicle.make}
        onChange={(value) =>
          handleVehicle({ make: value, model: "", badge: "" })
        }
      />
      {vehicle.make && (
        <Select
          label="Model"
          options={modelOptions}
          value={vehicle.model}
          onChange={(value) =>
            handleVehicle({ ...vehicle, model: value, badge: "" })
          }
        />
      )}
      {vehicle.model && (
        <Select
          label="Badge"
          options={badgeOptions}
          value={vehicle.badge}
          onChange={(value) => handleVehicle({ ...vehicle, badge: value })}
        />
      )}
    </div>
  );
}

export default memo(VehicleSelector);
