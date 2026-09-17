export const FEATURES_BY_STEP = {
  Design: [
    {
      key: "colorTheme",
      label: "Color Theme",
      options: ["red", "gb", "unikko", "wood"],
    },
    { key: "leg", label: "Feet", options: ["A", "B"] },
    { key: "arm", label: "Tonearm", options: ["A", "B"] },
    { key: "button", label: "Dials", options: ["A", "B"] },
  ],
  Functions: [
    { key: "bluetooth", label: "Bluetooth", options: ["on", "off"] },
    { key: "light", label: "Light", options: ["on", "off"] },
    { key: "stereo", label: "Stereo", options: ["on", "off"] },
  ],
  Custom: [
    { key: "stickers", label: "Stickers", options: ["none", "logo"] },
    { key: "dustCover", label: "Slip Mat", options: ["off", "on"] },
  ],
} as const;
