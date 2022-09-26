import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";

interface IProps {
  children: React.ReactNode;
}

const Theme: FC<IProps> = ({ children }) => {
  const theme = {
    border: {
      borderRadius: {
        regular: "0.5rem",
        round: "1rem",
        circle: "50%",
      },
    },
    colors: {
      background: "#F3F3F3",
      cardBackground: "#FFFFFF",

      textPrimary: "#2C3033",
      textSecondary: "#384E63",

      buttonPrimary: "#0082FF",
      buttonSecondary: "#2678C7",
    },

    fonts: {
      fontSize: {
        title: "1.25rem",
        big: "1rem",
        regular: "0.75rem",
        small: "0.5rem",
      },
      fontFamily: {
        roboto: "Roboto",
      },
      fontWeight: {
        regular: "400",
        bold: "700",
        bolder: "900",
      },
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
