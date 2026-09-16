import { createContext, useContext, useState, type ReactNode } from "react";

type StepKey = "Design" | "Functions" | "Custom" | "Summary";
type ThemeKey = "red" | "gb" | "unikko" | "wood";

interface ConfiguratorContextValue {
  activeStep: StepKey;
  setActiveStep: (step: StepKey) => void;

  selectedTheme: ThemeKey;
  setSelectedTheme: (theme: ThemeKey) => void;

  selectedArm: string;
  setSelectedArm: (arm: string) => void;

  rotationY: number;
  setRotationY: (rotation: number) => void;

  sliderValue: number;
  setSliderValue: (value: number) => void;

  handleRotationChange: (value: number) => void;

  is3DOpen: boolean;
  setIs3DOpen: (isOpen: boolean) => void;

  lidOpen: boolean;
  setLidOpen: (isOpen: boolean) => void;

  selectedOptions: Record<string, number>;
  cycleOption: (
    featureKey: string,
    optionCount: number,
    direction: 1 | -1,
  ) => void;
}

const ConfiguratorContext = createContext<ConfiguratorContextValue | null>(
  null,
);

export function ConfiguratorProvider({ children }: { children: ReactNode }) {
  const [activeStep, setActiveStep] = useState<StepKey>("Design");

  const [selectedTheme, setSelectedTheme] = useState<ThemeKey>("red");

  const [selectedArm, setSelectedArm] = useState("standard");

  const [rotationY, setRotationY] = useState(0);

  const [sliderValue, setSliderValue] = useState(50);

  const [is3DOpen, setIs3DOpen] = useState(false);

  const [lidOpen, setLidOpen] = useState(true);

  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, number>
  >({});

  const handleRotationChange = (value: number) => {
    setSliderValue(value);

    const rotation = ((value - 50) / 50) * (Math.PI / 1);

    setRotationY(rotation);
  };

  const cycleOption = (
    featureKey: string,
    optionCount: number,
    direction: 1 | -1,
  ) => {
    setSelectedOptions((prev) => {
      const current = prev[featureKey] ?? 0;

      const next = (current + direction + optionCount) % optionCount;

      return {
        ...prev,
        [featureKey]: next,
      };
    });
  };

  return (
    <ConfiguratorContext.Provider
      value={{
        activeStep,
        setActiveStep,
        selectedTheme,
        setSelectedTheme,
        selectedArm,
        setSelectedArm,
        rotationY,
        setRotationY,
        sliderValue,
        setSliderValue,
        handleRotationChange,
        is3DOpen,
        setIs3DOpen,
        lidOpen,
        setLidOpen,
        selectedOptions,
        cycleOption,
      }}
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
