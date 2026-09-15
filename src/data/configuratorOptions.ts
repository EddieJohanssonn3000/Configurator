export const FEATURES_BY_STEP = {
  Design: [
    {
      key: "colorTheme",
      label: "Color Theme",
      options: ["#1a1a1a", "#8b5e3c", "#c9c9c9"],
    },
    { key: "feet", label: "Feet", options: ["MOCK_LEG_A", "MOCK_LEG_B"] },
    { key: "tonearm", label: "Tonearm", options: ["standard", "none"] },
    { key: "dial", label: "Dials", options: ["classic", "modern"] },
  ],
  Functions: [
    { key: "bluetooth", label: "Bluetooth", options: ["on", "off"] },
    { key: "light", label: "Light", options: ["on", "off"] },
    { key: "stereo", label: "Stereo", options: ["on", "off"] },
  ],
  Custom: [
    { key: "stickers", label: "Stickers", options: ["none", "logo"] },
    { key: "limitedEdition", label: "Limited Edition", options: ["off", "on"] },
    { key: "dustCover", label: "Dust Cover", options: ["off", "on"] },
  ],
} as const;
