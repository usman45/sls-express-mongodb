export const styles = {
  color: {
    black: "#1E1E1E",
    blue: "#0B1560",
    charcoal: "#464646",
    darkGray: "#737373",
    gray: "#AFAFAF",
    lightGray: "#D7D7D7",
    white: "#FFFFFF",
    lightBlue: "#3c4480",
    lighterBlue: "#f1f4f7",
    offWhite: "#fcfbfb",
    ice: "#6294d2",
    iceDarker: "#4075b6",
    heather: "#ba4a9e",
    heatherDarker: "#a53f8c",
    blueberry: "#8366bb",
    blueberryDarker: "#7a58bb",
    northernlights: "#00a6a2",
    northernlightsDarker: "#007c7a"
  },
  font: {
    small: "0.65rem",
    smallPlus: "0.875rem",
    regular: "1rem",
    regularPlus: "1.1rem",
    large: "1.5rem",
    title: "2.5rem"
  },
  lineHeight: {
    medium: "1.43rem"
  },
  weight: {
    regular: "400",
    medium: "500",
    bold: "700"
  },
  spacing: {
    xxSmall: "0.25rem",
    xSmall: "0.5rem",
    small: "1rem",
    smallPlus: "1.25rem",
    medium: "1.5rem",
    large: "2rem",
    xLarge: "3rem",
    xxLarge: "4rem",
    xxxLarge: "6rem"
  },
  value: {
    rounding: "4px",
    roundingSmall: "2px",
    headerHeight: "4.5rem",
    footerHeight: "56px",
    paddingTop: "6.25rem",
    margin: "0.4rem",
    marginLeft: "2rem",
    breadCrumbHeight: "2rem",
    width: "1.5rem",
    height: "1rem",
    subContentWidth: "31rem",
    pageContentWidth: "43.5rem",
    appWrapperMaxWidth: "64rem"
  },
  breakPoint: {
    mobileMax: "511px",
    desktopMin: "512px",
    largeScreenMin: "1036px"
  }
};

export type Styles = typeof styles;

export const {
  breakPoint,
  color,
  lineHeight,
  weight,
  font,
  spacing,
  value
} = styles;
