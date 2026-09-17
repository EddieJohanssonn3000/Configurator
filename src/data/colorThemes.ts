export const COLOR_THEMES = {
  red: {
    label: "Red",
    parts: {
      arm: ["/models/RED/RED_RED_Arm_A.glb", "/models/RED/RED_RED_Arm_B.glb"],
      body: [
        "/models/RED/RED_RED_Body_A.glb",
        "/models/RED/RED_RED_Body_B.glb",
      ],
      button: [
        "/models/RED/RED_RED_Button_A.glb",
        "/models/RED/RED_RED_Button_B.glb",
      ],
      leg: ["/models/RED/RED_RED_Leg_A.glb", "/models/RED/RED_RED_Leg_B.glb"],
      lid: ["/models/RED/RED_RED_Lid.glb"],
      slipmat: ["/models/SLIPMAT/RED_Slipmat.glb"],
    },
  },
  gb: {
    label: "Gb",
    parts: {
      arm: ["/models/GB/GB_Arm_A.glb", "/models/GB/GB_Arm_B.glb"],
      body: ["/models/GB/GB_Body_A.glb", "/models/GB/GB_Body_B.glb"],
      button: ["/models/GB/GB_Button_A.glb", "/models/GB/GB_Button_B.glb"],
      leg: ["/models/GB/GB_Leg_A.glb", "/models/GB/GB_Leg_B.glb"],
      lid: ["/models/GB/GB_Lid.glb"],
      slipmat: ["/models/SLIPMAT/GB_Slipmat.glb"],
    },
  },
  unikko: {
    label: "Unikko",
    parts: {
      arm: [
        "/models/UNIKKO/Unikko_Arm_A.glb",
        "/models/UNIKKO/Unikko_Arm_B.glb",
      ],
      body: [
        "/models/UNIKKO/Unikko_Body_A.glb",
        "/models/UNIKKO/Unikko_Body_B.glb",
      ],
      button: [
        "/models/UNIKKO/Unikko_Button_A.glb",
        "/models/UNIKKO/Unikko_Button_B.glb",
      ],
      leg: [
        "/models/UNIKKO/Unikko_Leg_A.glb",
        "/models/UNIKKO/Unikko_Leg_B.glb",
      ],
      lid: ["/models/UNIKKO/Unikko_Lid.glb"],
      slipmat: ["/models/SLIPMAT/Unikko_Slipmat.glb"],
    },
  },
  wood: {
    label: "Wood",
    parts: {
      arm: [
        "/models/WOOD/WOOD_WOOD_Arm_A.glb",
        "/models/WOOD/WOOD_WOOD_Arm_B.glb",
      ],
      body: [
        "/models/WOOD/WOOD_WOOD_Body_A.glb",
        "/models/WOOD/WOOD_WOOD_Body_B.glb",
      ],
      button: [
        "/models/WOOD/WOOD_WOOD_Button_A.glb",
        "/models/WOOD/WOOD_WOOD_Button_B.glb",
      ],
      leg: [
        "/models/WOOD/WOOD_WOOD_Leg_A.glb",
        "/models/WOOD/WOOD_WOOD_Leg_B.glb",
      ],
      lid: ["/models/WOOD/WOOD_WOOD_Lid.glb"],
      slipmat: ["/models/SLIPMAT/WOOD_Slipmat.glb"],
    },
  },
} as const;
