import { styled, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    background-image: radial-gradient(39.26% 39.26% at 50% 48.83%, rgba(0, 0, 0, 0.55) 0%, #000 100%), url("/assets/italian-stone-wall.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    animation: pulseGradient 3s infinite;

    @media (max-width: 768px) {
      height: auto;
    }
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  padding: 30px 0;
  flex-direction: column;
  gap: 50px;
  text-align: center;
  align-items: center;
`;

export const HeaderHolder = styled.div`
  padding: 10px 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Italiana;
  font-size: 40px;
  text-transform: uppercase;

  color: #fdc206;
  border-top: 1px solid #fdc206;
  border-bottom: 1px solid #fdc206;
`;

export const HeaderAbout = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 17px;

  @media (max-width: 768px) {
    padding: 0 20px;
    font-size: 13px;
  }
`;

export const GlobalContainer = styled.div`
  max-width: 1200px;
  padding: 0;
  color: red;
  display: flex;
  position: relative;
  margin: 0 auto;
  flex-direction: column;
  /* background-color: purple; */

  @media (max-width: "1200px") {
    padding: calc(50px * 1.7) 1rem;
  }
`;

export const PizzaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    gap: 10px;
  }
`;

export const PizzaCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  border-radius: 10px;
  height: 150px;
  align-items: start;

  @media (max-width: 768px) {
    gap: 20px;
    height: 100px;
  }
`;

export const PizzaInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  & > span {
    color: #fff;
    font-family: Montserrat;
    font-size: 25px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const PizzaAbout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  & > h3,
  p {
    padding: 0;
    margin: 0;
  }

  & > h3 {
    color: #fff;
    font-family: Simonetta;
    font-size: 20px;
    font-weight: 900;

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }

  & > p {
    color: #aaa;
    font-family: Arimo;
    font-size: 13px;
    font-style: italic;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }
`;

export const PizzaReview = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & > span {
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  & > span:nth-child(1) {
    color: #fff;
    font-family: Montserrat;
    font-weight: 600;
  }
  & > span:nth-child(3) {
    color: #c1c1c1;
    font-family: Simonetta;
    text-decoration-line: underline;
  }

  & > div {
    display: flex;
    gap: 5px;

    @media (max-width: 768px) {
      gap: 2px;

      & > img {
        width: 15px;
        height: 15px;
      }
    }
  }
`;

export const PizzaImage = styled.div`
  width: 199px;
  height: 150px;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("https://burnhard-springlane-gmbh.stream.prepr.io/w_2304,format_jpg,q_70/https://burnhard-springlane-gmbh.stream.prepr.io/w_1080/4teessorvsqb-7balj02i50ez-pizza-marinara-titelbild.jpg");

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 40px;
  padding: 60px 0;

  @media (max-width: 768px) {
    gap: 20px;
    padding: 40px 0;
  }
`;

export const FooterButton = styled.button`
  padding: 10px 20px;
  background-color: #fdc206;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 18px;

  &:hover {
    background-color: #000;
    color: #fdc206;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const FooterInfo = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 0 20px;
  }
`;

export default GlobalStyle;
