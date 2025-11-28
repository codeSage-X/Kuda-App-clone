import { createTheme } from "@shopify/restyle";
import { tokens } from './tokens'


const COLOR_PALLET = {
  background: tokens.color.white.val,
  textColor: tokens.color.textColor.val,
  primaryColor: tokens.color.primaryBtnBg.val,
  errorColor: tokens.color.primaryError.val,
  warningColor: tokens.color.primaryWarning.val,
  successColor: tokens.color.primarySuccess.val,
  btnBlue: tokens.color.primaryBtnBg.val,
  headerTextColor: tokens.color.headerColor.val,
  textInputBorderColor: tokens.color.textInputBorderColor.val,
  disabledButtonColor: tokens.color.disabledBtnBg.val,
  secondaryBackgroundColor: tokens.color.secondaryBg.val,
  white: 'white',
  black: 'black',
  lightGrey: tokens.color.lightGrey.val
};

const theme = createTheme({
  colors: {
    ...COLOR_PALLET,
  },
  breakpoints: {
    phone: 0,
    longPhonee: {
      width: 0,
      height: 812
    },
    tablet: 768,
    larret: 1024,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
    '5xl': 36,
    '6xl': 40,
    '7xl': 44,
    '8xl': 48,
    '9xl': 52,
    '10xl': 56,
    '11xl': 60,
    '12xl': 64,
    '13xl': 68,
    '14xl': 72,
    '15xl': 76,
    '16xl': 80,
    '17xl': 84,
    '18xl': 88,
    '19xl': 92,
    '20xl': 96,
  },
  textVariants: {
    header: {
      fontSize: 36,
      color: "headerTextColor",
      fontFamily: "BasierBold",
      lineHeight: 44,
      letterSpacing: .72,
    },
    subheader: {
      fontSize: 24,
      color: "headerTextColor",
      fontFamily: "BasierSemiBold",
      lineHeight: 32,
      letterSpacing: 0.24,
    },
    medium: {
      fontSize: 20,
      color: "headerTextColor",
      fontFamily: "BasierMedium",
      lineHeight: 32,
      letterSpacing: 0.24,
    },
    body: {
      fontSize: 18,
      color: "textColor",
      fontFamily: "BasierRegular",
      lineHeight: 24,
      letterSpacing: 0.32,
    },
    xs: {
      fontSize: 16,
      color: "textColor",
      fontFamily: "BasierRegular",
    },
    defaults: {
      fontSize: 16,
      color: "textColor",
      fontFamily: "BasierRegular",
    },
  },
});

export type Theme = typeof theme;
export default theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
  },
};
