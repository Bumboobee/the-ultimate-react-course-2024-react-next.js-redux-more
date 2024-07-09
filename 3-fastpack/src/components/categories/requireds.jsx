import CategoryTitle from "../categoryTitle";
import Message from "./../message";
import CheckItem from "../checkItem";
import TravelItemContext from "../../context/travelItemContext";

import { useContext } from "react";
import { categories } from "../../data/categories";

const Requireds = () => {
  const { travelItems } = useContext(TravelItemContext)
  const items = travelItems.filter((item) => item.category === categories.requireds.id);

  return (
    <>
      <CategoryTitle code="OB" icon={categories.requireds.icon} title={categories.requireds.category} />

      <Message
        code="OB"
        message="Esta categoria contém itens obrigatórios que devem ser verificados e incluídos."
      />

      <div className="checklist">
        <hr className="mb-2"/>
       
        {items.map((item) => (
          <CheckItem key={item.id} travelItem={item} />
        ))}
      </div>
    </>
  );
};

export default Requireds;
