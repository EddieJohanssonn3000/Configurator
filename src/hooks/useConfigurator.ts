import { useState } from "react";

export function useConfigurator() {
  const [activeStep, setActiveStep] = useState("Colors");

  const [selectedArm, setSelectedArm] = useState("standard");

  return {
    activeStep,
    setActiveStep,

    selectedArm,
    setSelectedArm,
  };
}