import { Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./App.css";
import whatsApp from "./assets/images/whatsapp.png";
import Footer from "./components/layout/Footer";
import Header from './components/layout/Header';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {
  const [visible, setVisible] = useState(false);

  function handleScroll() {
    const homeHeigth = document
      .getElementById("/")
      .getBoundingClientRect().height;
    window.scrollY >= homeHeigth/2 ? setVisible(true) : setVisible(false);
  }

  useEffect(() => {
    addEventListener("scroll", handleScroll);
  }, [window.scrollY]);
  
  return (
    <>
      <Header />
      <Home />
      <Menu />
      <About />
      <Contact />
      <Image
        src={whatsApp}
        alt="Whats App Icon"
        cursor="pointer"
        position="fixed"
        bottom={16}
        left={16}
        onClick={() =>
          window.open(
            "https://api.whatsapp.com/send/?phone=5492914467013&text=Hola%2C+quiero+hacer+un+pedido%21&type=phone_number&app_absent=0"
          )
        }
      />
      <Footer />
    </>
  );
}

export default App;
