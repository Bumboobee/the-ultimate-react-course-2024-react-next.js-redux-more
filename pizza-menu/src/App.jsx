import Footer from "./components/footer";
import Header from "./components/header";
import Pizza from "./components/pizza";

import GlobalStyle, { GlobalContainer, PizzaContainer } from "./style/global";

function App() {
  return (
    <>
      <GlobalStyle />

      <GlobalContainer>
        <Header />

        <PizzaContainer>
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
          <Pizza />
        </PizzaContainer>

        <Footer />
      </GlobalContainer>
    </>
  );
}

export default App;
