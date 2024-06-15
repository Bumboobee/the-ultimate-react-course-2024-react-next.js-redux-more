import { FooterContainer, FooterButton, FooterInfo } from "../style/global";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 17;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  const footerText =
    `${isOpen ? "Estamos" : "Estaremos" } abertos das 17:00 às 22:00 horas. Venha nos visitar ou faça seu pedido online.`;

  return (
    <FooterContainer>
      <FooterButton>Fazer pedido</FooterButton>

      <FooterInfo>{footerText}</FooterInfo>
    </FooterContainer>
  );
};

export default Footer;
