import Footer from "./components/footer";
import Header from "./components/header";
import Pizza from "./components/pizza";

import { Pizzas } from "./data/pizzas";
import GlobalStyle, { GlobalContainer, PizzaContainer } from "./style/global";

function App() {
  return (
    <>
      <GlobalStyle />

      <GlobalContainer>
        <Header />

        <PizzaContainer>
          {Pizzas.map((pizza) => (
            <Pizza key={pizza.id} pizza={pizza} />
          ))}
        </PizzaContainer>

        <Footer />
      </GlobalContainer>
    </>
  );
}

export default App;
