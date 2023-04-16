import { extendTheme } from "@chakra-ui/react";
import "@fontsource/lato";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import "@fontsource/bebas-neue";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";



const theme = extendTheme({
  colors: {
    brand: {
      primary: "#2F855A",
      secondary: "#F9A826",
      gray: "#667085",
    },
    body2: "#667085",
  },
  fonts: {
    body: `"Lato", sans-serif`,
    heading: `'Bebas Neue', cursive`,
    title: 'Poppins, sans-serif'
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
