// data/configuratorOptions.ts
export const FEATURES_BY_STEP = {
  Design: [
    { key: "colorTheme", label: "Color Theme" },
    { key: "feet", label: "Feet" },
    { key: "tonearm", label: "Tonearm" },
    { key: "dial", label: "Dials" },
  ],
  Functions: [
    { key: "bluetooth", label: "Bluetooth" },
    { key: "light", label: "Light" },
    { key: "stereo", label: "Stereo" },
  ],
  Custom: [
    { key: "stickers", label: "Stickers" },
    { key: "limitedEdition", label: "Limited Edition" },
    { key: "dustCover", label: "Dust Cover" },
  ],
} as const;
