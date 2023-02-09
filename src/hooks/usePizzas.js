import { useState } from "react";

function usePizzas() {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    // Making a request to the local server to get the pizzas
    const response = await fetch("http://localhost:5173/src/data/pizzas.json");

    // Converting the response to JSON
    const data = await response.json();

    // Setting the pizzas to the data we got from the server
    setPizzas(data);
  };

  return { pizzas, getPizzas };
}

export default usePizzas;
