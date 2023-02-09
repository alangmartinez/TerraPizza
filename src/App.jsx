import { Icon, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";
import "./App.css";
import whatsApp from "./assets/images/whatsapp.png";
import Footer from "./components/Footer";
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
        right={16}
        onClick={() =>
          window.open(
            "https://api.whatsapp.com/send/?phone=5492914467013&text=Hola%2C+quiero+hacer+un+pedido%21&type=phone_number&app_absent=0"
          )
        }
      />
      <Footer />
      <Link to="/" smooth={true} spy={true} duration={1000}>
        <Icon
          as={BsFillArrowUpCircleFill}
          boxSize={20}
          display={visible ? "block" : "none"}
          color="black"
          position="fixed"
          top={16}
          right={16}
          transition="all 700ms ease-in-out"
          cursor="pointer"
          zIndex="99999"
        />
      </Link>
    </>
  );
}

export default App;
