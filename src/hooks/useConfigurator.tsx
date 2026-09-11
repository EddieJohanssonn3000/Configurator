import { createContext, useContext, useState, type ReactNode } from "react";

type StepKey = "Design" | "Functions" | "Custom";

interface ConfiguratorContextValue {
  activeStep: StepKey;
  setActiveStep: (step: StepKey) => void;
  selectedArm: string;
  setSelectedArm: (arm: string) => void;
}

const ConfiguratorContext = createContext<ConfiguratorContextValue | null>(
  null,
);

export function ConfiguratorProvider({ children }: { children: ReactNode }) {
  const [activeStep, setActiveStep] = useState<StepKey>("Design");
  const [selectedArm, setSelectedArm] = useState("standard");

  return (
    <ConfiguratorContext.Provider
      value={{ activeStep, setActiveStep, selectedArm, setSelectedArm }}
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
