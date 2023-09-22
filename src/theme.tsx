import { createTheme, ThemeOptions, Shadows } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

const defaultTheme = createTheme();

const defaultShadows: ThemeOptions["shadows"] = [...defaultTheme.shadows];

const getDesignTokens = (mode: PaletteMode) => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375, //Mobile
      md: 768, //Tablet
      lg: 992, //Laptop - not used
      xl: 1440, //Desctop
    },
  },

  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: {
            paper: "#F8F8FB",
            default: "#F8F8FB",
          },
          primary: {
            main: "#7C5DFA",
            light: "#7C5DFA",
            dark: "#7E88C3",
          },
          secondary: {
            main: "#373B53",
            light: "#7E88C3",
            dark: "#0C0E16",
          },
          info: {
            main: "#888EB0",
            light: "#DFE3FA",
            dark: "#FFFFFF",
          },
          grey: {
            50: "#FFFFFF",
            100: "#858BB2",
            200: "#7E88C3",
            300: "#858BB2",
            400: "#F9FAFE",
            500: "#DFE3FA",
            600: "#373B53",
            700: "#9277FF",
            800: "#0C0E16",
            900: "#FFFFFF",
          },
          text: {
            primary: "#0C0E16",
            secondary: "#1E2139",
          },
          success: {
            main: "#33D69F",
          },
          warning: {
            main: "#FF8F00",
          },
        }
      : {
          background: {
            paper: "#141625",
            default: "#141625",
          },
          primary: {
            main: "#252945",
            light: "#9277FF",
            dark: "#DFE3FA",
          },
          secondary: {
            main: "#1E2139",
            light: "#858BB2",
            dark: "#1E2139",
          },
          info: {
            main: "#DFE3FA",
            light: "#1E2139",
            dark: "#141625",
          },
          grey: {
            50: "#1E2139",
            100: "#FFFFFF",
            200: "#888EB0",
            300: "#DFE3FA",
            400: "#252945",
            500: "#FFFFFF",
            600: "#0C0E16",
            700: "#7C5DFA",
            800: "#DFE3FA",
            900: " #252945",
          },
          text: {
            primary: "#FFFFFF",
            secondary: "#FFFFFF",
          },
          success: {
            main: "#33D69F",
          },
          warning: {
            main: "#FF8F00",
          },
        }),
  },
  typography: {
    fontFamily: "League Spartan",
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      fontSize: "70px",
      lineHeight: "33px",
      letterSpacing: -1,
    },
    h2: {
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "22px",
      letterSpacing: -0.75,
    },
    h3: {
      fontWeight: 700,
      fontSize: "15px",
      lineHeight: "24px",
      letterSpacing: -0.25,
    },
    h4: {
      fontWeight: 700,
      fontSize: "15px",
      lineHeight: "15px",
      letterSpacing: -0.25,
    },
    body1: {
      fontWeight: 500,
      fontSize: "13px",
      lineHeight: "18px",
      letterSpacing: -0.1,
    },
    body2: {
      fontWeight: 500,
      fontSize: "13px",
      lineHeight: "15px",
      letterSpacing: -0.25,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "24px !important",
          height: "48px",
          size: "medium",
          p: 24,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          opacity: 0.7,
        },
        icon: {
          height: 8,
          width: 8,
          opacity: 1,
        },
        label: {
          opacity: "1 !important",
        },
        "& .MuiChip-label": {
          opacity: 1,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        // root: { pl: 0, pr: 0 },
      },
    },
  },
  shadows: defaultShadows.map(() => "none") as Shadows,
});
export default getDesignTokens;
