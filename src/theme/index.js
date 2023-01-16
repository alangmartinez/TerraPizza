import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `'Lato', sans-serif`,
    heading: `'Bebas Neue', cursive`,
  },
  styles: {
    global: {
      colors: {
        text: {
          primary: "#67085",
        }
      },
      body: {
        color: "#333333",
        bgColor: "white",
      },
    },
  },
});

export default theme;
