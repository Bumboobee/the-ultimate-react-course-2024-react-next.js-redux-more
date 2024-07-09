import CategoryTitle from "../categoryTitle";
import Message from "../message";
import CheckItem from "../checkItem";
import TravelItemContext from "../../context/travelItemContext";

import { useContext } from "react";
import { categories } from "../../data/categories";

const Closet = () => {
  const { travelItems } = useContext(TravelItemContext);
  const items = travelItems.filter(
    (item) => item.category === categories.closet.id
  );

  return (
    <>
      <CategoryTitle
        icon={categories.closet.icon}
        title={categories.closet.category}
      />
      <Message
        code="GR"
        message="Verifique se todos os itens de vestuário foram adicionados."
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
export default Closet;
