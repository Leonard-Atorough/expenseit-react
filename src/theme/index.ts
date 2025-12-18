import { createTheme } from "@mui/material/styles";

// Color Palette based on UI Design
const colors = {
  // Primary Colors
  primaryGreen: "#2D7D4A",
  accentBlue: "#1976D2",
  successGreen: "#4CAF50",
  warningOrange: "#FF9800",

  // Neutrals
  darkGray: "#1A1A1A",
  mediumGray: "#616161",
  lightGray: "#F5F5F5",
  white: "#FFFFFF",

  // Semantic
  income: "#4CAF50",
  expense: "#F44336",
  neutral: "#9E9E9E",
};

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.primaryGreen,
      light: "#5A9C6B",
      dark: "#1F5A35",
      contrastText: colors.white,
    },
    secondary: {
      main: colors.accentBlue,
      light: "#64B5F6",
      dark: "#1565C0",
      contrastText: colors.white,
    },
    success: {
      main: colors.income,
      light: "#81C784",
      dark: "#388E3C",
    },
    error: {
      main: colors.expense,
      light: "#EF5350",
      dark: "#D32F2F",
    },
    warning: {
      main: colors.warningOrange,
      light: "#FFB74D",
      dark: "#F57C00",
    },
    background: {
      default: colors.lightGray,
      paper: colors.white,
    },
    text: {
      primary: colors.darkGray,
      secondary: colors.mediumGray,
    },
    divider: "#E0E0E0",
  },

  typography: {
    fontFamily: [
      '"Poppins"',
      '"Inter"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),

    // Headings
    h1: {
      fontSize: "32px",
      fontWeight: 700,
      letterSpacing: "-0.5px",
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "24px",
      fontWeight: 700,
      letterSpacing: "-0.3px",
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: "12px",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },

    // Body Text
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: 1.5,
    },

    // Currency/Monospace (custom variant)
    subtitle1: {
      fontSize: "18px",
      fontWeight: 600,
      fontFamily: '"Courier New", monospace',
      letterSpacing: "0.5px",
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: 500,
      fontFamily: '"Courier New", monospace',
    },

    // Button
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.3px",
    },

    // Caption
    caption: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: 1.5,
      color: colors.mediumGray,
    },
  },

  shape: {
    borderRadius: 8, // Default component border radius
  },

  components: {
    // Buttons
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "10px 16px",
          textTransform: "none",
          fontWeight: 600,
          transition: "all 0.2s ease",
          "&:hover": {
            transform: "translateY(-2px)",
          },
        },
        contained: {
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          },
        },
        outlined: {
          borderColor: colors.mediumGray,
          color: colors.darkGray,
          "&:hover": {
            borderColor: colors.primaryGreen,
            backgroundColor: "rgba(45, 125, 74, 0.04)",
          },
        },
      },
    },

    // Cards
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          border: "none",
          transition: "all 0.2s ease",
          "&:hover": {
            boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
          },
        },
      },
    },

    // Paper
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        },
      },
    },

    // Text Fields
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "6px",
            backgroundColor: colors.lightGray,
            "& fieldset": {
              borderColor: colors.mediumGray,
              borderWidth: "1px",
            },
            "&:hover fieldset": {
              borderColor: colors.primaryGreen,
            },
            "&.Mui-focused fieldset": {
              borderColor: colors.primaryGreen,
              borderWidth: "2px",
              boxShadow: `0 0 0 3px rgba(45, 125, 74, 0.1)`,
            },
          },
          "& .MuiInputBase-input::placeholder": {
            opacity: 0.7,
          },
        },
      },
    },

    // Input Label
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "12px",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          color: colors.mediumGray,
          "&.Mui-focused": {
            color: colors.primaryGreen,
          },
        },
      },
    },

    // App Bar
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.white,
          color: colors.darkGray,
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          borderBottom: `1px solid ${colors.lightGray}`,
        },
      },
    },

    // Container
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "16px",
          paddingRight: "16px",
          "@media (min-width: 600px)": {
            paddingLeft: "24px",
            paddingRight: "24px",
          },
        },
      },
    },

    // Alert/Snackbar
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          border: "none",
        },
        standardError: {
          backgroundColor: "rgba(244, 67, 54, 0.1)",
          color: colors.expense,
        },
        standardSuccess: {
          backgroundColor: "rgba(76, 175, 80, 0.1)",
          color: colors.income,
        },
        standardWarning: {
          backgroundColor: "rgba(255, 152, 0, 0.1)",
          color: colors.warningOrange,
        },
        standardInfo: {
          backgroundColor: "rgba(25, 118, 210, 0.1)",
          color: colors.accentBlue,
        },
      },
    },

    // Dialog
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "12px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
        },
      },
    },

    // Chip (for categories/tags)
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          fontWeight: 500,
        },
      },
    },

    // Table
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: colors.lightGray,
          "& .MuiTableCell-head": {
            fontWeight: 700,
            color: colors.darkGray,
            borderBottom: `2px solid ${colors.mediumGray}`,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${colors.lightGray}`,
        },
      },
    },

    // Divider
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: colors.lightGray,
        },
      },
    },
  },

  // Spacing System (8px grid)
  spacing: (factor: number) => `${factor * 8}px`,
});

