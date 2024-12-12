interface ModelOptions {
  [key: string]: string[];
}

type VehicleData = Record<string, ModelOptions>;

export const MODELS: VehicleData = {
  ford: {
    Ranger: ["Raptor", "Raptor X", "wildtrak"],
    Falcon: ["XR6", "XR6Turbo", "XR8"],
    "Falcon Ute": ["XR6", "XR6 Turbo"],
  },
  bmw: {
    "130d": ["xDrive26d", "xDrive30d"],
    "240i": ["xDrive30d", "xDrive 50d"],
    "320e": ["xDrive75d", "xDrive80d", "xDrive85d"],
  },
  tesla: {
    "Model 3": ["Performance", "LongRange", "DualMotor"],
  },
};
