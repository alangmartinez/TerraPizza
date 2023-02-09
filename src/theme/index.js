import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    body2: "#667085",
  },
  fonts: {
    body: `'Lato', sans-serif`,
    heading: `'Bebas Neue', cursive`,
  },
  styles: {
    global: {
      body: {
        color: "#333333",
        bgColor: "white",
      },
    },
  },
});

export default theme;
