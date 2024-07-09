import { PizzaCard, PizzaImage, PizzaInfo, PizzaAbout, PizzaReview } from "../style/global";
import StarFull from "/assets/star-full.svg";
import StartEmpty from "/assets/star-empty.svg";

import PropTypes from "prop-types";

const Pizza = ({ pizza }) => {
  const { name, ingredients, imageUrl, price, ratingsAverage, reviewsQuantity } = pizza;

  const toCurrency = (value) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <PizzaCard>
      <PizzaImage imageUrl={imageUrl}></PizzaImage>

      <PizzaInfo>
        <PizzaAbout>
          <h3>{name}</h3>
          <p>{ingredients}</p>
        </PizzaAbout>

        <PizzaReview>
          <span>{ratingsAverage}</span>

          <div>
            <img src={StarFull} alt="Star" />
            <img src={StarFull} alt="Star" />
            <img src={StarFull} alt="Star" />
            <img src={StarFull} alt="Star" />
            <img src={StartEmpty} alt="Star" />
          </div>
          <span>({reviewsQuantity} Avaliações)</span>
        </PizzaReview>

        <span>{toCurrency(price)}</span>
      </PizzaInfo>
    </PizzaCard>
  );
};

Pizza.propTypes = {
  pizza: PropTypes.object.isRequired,
};

export default Pizza;
