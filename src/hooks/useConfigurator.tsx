import { createContext, useContext, useState, type ReactNode } from "react";

type StepKey = "Colors" | "Functions" | "Custom" | "Background";

interface ConfiguratorContextValue {
  activeStep: StepKey;
  setActiveStep: (step: StepKey) => void;
  selectedArm: string;
  setSelectedArm: (arm: string) => void;

  rotationY: number;
  setRotationY: (rotation: number) => void;

  sliderValue: number;
  setSliderValue: (value: number) => void;

  handleRotationChange: (value: number) => void;
}

const ConfiguratorContext = createContext<ConfiguratorContextValue | null>(
  null,
);

export function ConfiguratorProvider({ children }: { children: ReactNode }) {
  const [activeStep, setActiveStep] = useState<StepKey>("Colors");
  const [selectedArm, setSelectedArm] = useState("standard");
  const [rotationY, setRotationY] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);

  const handleRotationChange = (value: number) => {
  setSliderValue(value);

  const rotation =
    ((value - 50) / 50) * (Math.PI / 2);

  setRotationY(rotation);
    };

  return (
    <ConfiguratorContext.Provider
      value={{ activeStep, setActiveStep, selectedArm, setSelectedArm, rotationY, setRotationY, sliderValue, setSliderValue, handleRotationChange }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
}

export function useConfigurator() {
  const ctx = useContext(ConfiguratorContext);
  if (!ctx) {
    throw new Error(
      "useConfigurator must be used within a ConfiguratorProvider",
    );
  }
  return ctx;
}
