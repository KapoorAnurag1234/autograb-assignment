import React, { memo } from "react";
import Button from "./Button.tsx";
import { BUTTON_TYPE } from "../constants/vehicle.ts";
import type { Vehicle } from "../types/vehicle.d.ts";

const options = [
  { make: "tesla", model: "Model 3", badge: "Performance" },
  { make: "ford", model: "Ranger", badge: "Wildtrak" },
];

interface QuickSelectButtonsProps {
  handleVehicle: (data: Vehicle) => void;
}

function QuickSelectButtons({ handleVehicle }: QuickSelectButtonsProps) {
  return (
    <div className="flex flex-column">
      {options.map(({ make, model, badge }) => (
        <div key={make}>
          <Button
            title={`${make.toLocaleUpperCase()} ${model.toLocaleUpperCase()} ${badge.toLocaleUpperCase()} `}
            type={BUTTON_TYPE.BUTTON}
            onClick={() => handleVehicle({ make, model, badge })}
          />
        </div>
      ))}
    </div>
  );
}

export default memo(QuickSelectButtons);
