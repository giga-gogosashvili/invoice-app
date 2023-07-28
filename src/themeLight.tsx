import { createTheme, ThemeOptions, Shadows } from "@mui/material/styles";

// const breakpointValues = {
//   xs: 0,
//   sm: 375,
//   md: 768,
//   lg: 992,
//   xl: 1440,
// };

const defaultTheme = createTheme();

// get the default `shadows` object
const defaultShadows: ThemeOptions["shadows"] = [...defaultTheme.shadows];

const themeLight: any = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 992,
      xl: 1440,
    },
  },
  palette: {
    mode: "light",
    background: {
      default: "#F8F8FB",
    },
    primary: {
      main: "#7C5DFA",
      light: "#F8F8FB",
      dark: "#9277FF",
    },
    secondary: {
      main: "#1E2139",
      light: "#252945",
      dark: "#141625",
    },
    info: {
      main: "#888EB0",
      light: "#7E88C3",
      dark: "#DFE3FA",
    },
    grey: {
      900: "#0C0E16",
    },
    error: {
      main: "#EC5757",
      light: "#9277FF",
    },
    warning: {
      main: "#FF8F00",
    },
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
          borderRadius: 24,
          size: "medium",
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
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          display: "flex",
        },
        paperAnchorLeft: {
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
        },
      },
    },
  },
  shadows: defaultShadows.map(() => "none") as Shadows,
});

export default themeLight;
