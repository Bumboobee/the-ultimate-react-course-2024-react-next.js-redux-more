import { HeaderContainer, HeaderHolder, HeaderAbout } from "../style/global";

const Header = () => {
  const titleText = "Noite Italiana";
  const aboutText =
    "Cozinha Italiana Autentica. 6 pizzas para você saborear. Todos os ingredientes totalmente orgânicos diretamente da nossa hôrta.";

  return (
    <HeaderContainer>
      <HeaderHolder>{titleText}</HeaderHolder>

      <HeaderAbout>{aboutText}</HeaderAbout>
    </HeaderContainer>
  );
};

export default Header;
