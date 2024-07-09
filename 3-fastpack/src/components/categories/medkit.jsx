import CategoryTitle from "../categoryTitle";
import Message from "../message";
import CheckItem from "../checkItem";
import TravelItemContext from "../../context/travelItemContext";

import { useContext } from "react";
import { categories } from "../../data/categories";

const Medkit = () => {
  const { travelItems } = useContext(TravelItemContext);
  const items = travelItems.filter(
    (item) => item.category === categories.medkit.id
  );

  return (
    <>
      <CategoryTitle
        icon={categories.medkit.icon}
        title={categories.medkit.category}
      />

      <Message
        code="RE"
        message="Não se esqueça de verificar e adicionar todos os remédios necessários."
      />

      <div className="checklist">
        <hr className="mb-2" />

        {items.map((item) => (
          <CheckItem key={item.id} travelItem={item} />
        ))}
      </div>
    </>
  );
};
export default Medkit;
