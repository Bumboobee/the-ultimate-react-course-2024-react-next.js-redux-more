import {
  PizzaCard,
  PizzaImage,
  PizzaInfo,
  PizzaAbout,
  PizzaReview,
} from "../style/global";
import StarFull from "/assets/star-full.svg";
import StartEmpty from "/assets/star-empty.svg";

const Pizza = () => {
  const toCurrency = (value) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <PizzaCard>
      <PizzaImage></PizzaImage>

      <PizzaInfo>
        <PizzaAbout>
          <h3>Title</h3>
          <p>Description</p>
        </PizzaAbout>

        <PizzaReview>
          <span>4.5</span>

          <div>
            <img src={StarFull} alt="Star" />
            <img src={StarFull} alt="Star" />
            <img src={StarFull} alt="Star" />
            <img src={StarFull} alt="Star" />
            <img src={StartEmpty} alt="Star" />
          </div>
          <span>(148 Avaliações)</span>
        </PizzaReview>

        <span>{toCurrency(35.0)}</span>
      </PizzaInfo>
    </PizzaCard>
  );
};

export default Pizza;
