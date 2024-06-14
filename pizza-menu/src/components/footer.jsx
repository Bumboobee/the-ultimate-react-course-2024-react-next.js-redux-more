import { FooterContainer, FooterButton, FooterInfo } from "../style/global";

const Footer = () => {
  const footerText =
    "Estamos abertos das 17:00 às 22:00 horas. Venha nos visitar ou faça seu pedido online.";

  return (
    <FooterContainer>
      <FooterButton>Fazer pedido</FooterButton>

      <FooterInfo>{footerText}</FooterInfo>
    </FooterContainer>
  );
};

export default Footer;
