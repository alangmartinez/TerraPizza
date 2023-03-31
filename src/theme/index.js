import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#F9A826",
      secondary: "#F9A826",
      gray: "#667085",
    },
    body2: "#667085",
  },
  fonts: {
    body: `'Lato', sans-serif`,
    heading: `'Bebas Neue', cursive`,
  },
  styles: {
    global: {
      'html, body': {
        color: "#333333",
        bgColor: "white",
        fontFamily: "body",
      },
    },
  },
});

export default theme;
