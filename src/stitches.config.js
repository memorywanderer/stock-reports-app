import { createStitches } from "@stitches/react";

export const {
  styled,
  createTheme,
  globalCss,
  getCssText,
  theme
} = createStitches({
  theme: {
    colors: {
      accent: "#2e2ee5",
      "accentHover": "#7a86cc",
      background: "#fff",
      "backgroundSecondary": "#efefef",
      "backgroundTertiary": "#d9d9d9",
      typography: "#101010",
      "typographySecondary": "#646464",
      "typographyAccent": "#fff",
      "growth": "#219e55",
      "negative": "#d43b2d",
      "shine": "rgba(229,229,229,0.8)",
    }
  }
});

export const darkTheme = createTheme({
  colors: {
    accent: "#6674cc",
    background: "#12151c",
    "backgroundSecondary": "#353942",
    "backgroundTertiary": "#50545f",
    typography: "#f7f7f7",
    "typographySecondary": "#d8d8da",
    "growth": "#319b4c",
    "negative": "#ef3d30",
  }
});

const globalStyles = globalCss({
  "@font-face": [
    {
      fontWeight: 350,
      fontStyle: "normal",
      fontFamily: "PPNeueMontreal",
      fontDisplay: "optional",
      src: 'local("PPNeueMontreal"), url("/fonts/PPNeueMontreal-Book.woff") format("woff")',
    },
    {
      fontWeight: 500,
      fontStyle: "normal",
      fontFamily: "PPNeueMontreal",
      fontDisplay: "optional",
      src: 'local("PPNeueMontreal"), url("/fonts/PPNeueMontreal-Medium.woff") format("woff")',
    },
    {
      fontWeight: 700,
      fontStyle: "normal",
      fontFamily: "PPNeueMontreal",
      fontDisplay: "optional",
      src: 'local("PPNeueMontreal"),url("/fonts/PPNeueMontreal-Bold.woff") format("woff")',
    },
  ],

  "body": {
    maxWidth: "1700px",
    margin: "0 auto",
    padding: "0 14px",
    background: "$background",
    color: "$typography"
  },
});

globalStyles();