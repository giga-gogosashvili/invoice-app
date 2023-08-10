import { createTheme, ThemeOptions, Shadows } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

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

const getDesignTokens = (mode: any) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // 👇 palette values for light mode
          background: {
            paper: "#F8F8FB",
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
        }
      : {
          // 👇 palette values for dark mode
          background: {
            paper: "#141625",
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

    // MuiTextField: {
    //   styleOverrides: {
    //     root: { height: "48px", m: 1, display: "block" },
    //     // "& .MuiOutlinedInput-root": {
    //     //   "& fieldset": {},
    //     // },
    //   },
    // },
    // MuiMenuItem: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: "grey.900",
    //     },
    //   },
    // },
  },
  shadows: defaultShadows.map(() => "none") as Shadows,
});

// const themeLight: any = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 375,
//       md: 768,
//       lg: 992,
//       xl: 1440,
//     },
//   },
//   palette: {
//     mode: "light",
//     background: {
//       paper: "#F8F8FB",
//     },
//     primary: {
//       main: "#7C5DFA",
//       light: "#7C5DFA",
//       dark: "#7E88C3",
//     },
//     secondary: {
//       main: "#373B53",
//       light: "#7E88C3",
//       dark: "#0C0E16",
//     },
//     info: {
//       main: "#888EB0",
//       light: "#DFE3FA",
//     },
//     grey: {
//       50: "#FFFFFF",
//       100: "#858BB2",
//       200: "#7E88C3",
//       300: "#858BB2",
//       400: "#F9FAFE",
//       500: "#DFE3FA",
//       600: "#373B53",
//       700: "#9277FF",
//       800: "#0C0E16",
//       900: "#FFFFFF",
//     },
//     text: {
//       primary: "#0C0E16",
//       secondary: "#1E2139",
//     },
//   },

//   typography: {
//     fontFamily: "League Spartan",
//     fontWeightMedium: 500,
//     fontWeightBold: 700,
//     h1: {
//       fontWeight: 700,
//       fontSize: "70px",
//       lineHeight: "33px",
//       letterSpacing: -1,
//     },
//     h2: {
//       fontWeight: 700,
//       fontSize: "24px",
//       lineHeight: "22px",
//       letterSpacing: -0.75,
//     },
//     h3: {
//       fontWeight: 700,
//       fontSize: "15px",
//       lineHeight: "24px",
//       letterSpacing: -0.25,
//     },
//     h4: {
//       fontWeight: 700,
//       fontSize: "15px",
//       lineHeight: "15px",
//       letterSpacing: -0.25,
//     },
//     body1: {
//       fontWeight: 500,
//       fontSize: "13px",
//       lineHeight: "18px",
//       letterSpacing: -0.1,
//     },
//     body2: {
//       fontWeight: 500,
//       fontSize: "13px",
//       lineHeight: "15px",
//       letterSpacing: -0.25,
//     },
//   },
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 24,
//           size: "medium",
//         },
//       },
//     },
//     MuiChip: {
//       styleOverrides: {
//         root: {
//           borderRadius: 6,
//           opacity: 0.7,
//         },
//         icon: {
//           height: 8,
//           width: 8,
//         },
//       },
//     },
//     MuiDrawer: {
//       styleOverrides: {
//         root: {
//           display: "flex",
//         },
//         paperAnchorLeft: {
//           borderTopRightRadius: 20,
//           borderBottomRightRadius: 20,
//         },
//       },
//     },
//   },
//   shadows: defaultShadows.map(() => "none") as Shadows,
// });

export default getDesignTokens;
