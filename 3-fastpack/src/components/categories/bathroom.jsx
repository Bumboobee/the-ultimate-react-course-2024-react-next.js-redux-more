import CategoryTitle from "../categoryTitle";
import Message from "../message";
import CheckItem from "../checkItem";
import TravelItemContext from "../../context/travelItemContext";

import { useContext } from "react";
import { categories } from "../../data/categories";

const Bathroom = () => {
  const { travelItems } = useContext(TravelItemContext)
  const items = travelItems.filter((item) => item.category === categories.bathroom.id);

  return (
    <>
      <CategoryTitle icon={categories.bathroom.icon} title={categories.bathroom.category} />
      <Message code="BA" message="Não se esqueça de incluir todos os itens necessários para o banheiro." />
    
      <div className="checklist">
        <hr className="mb-2"/>
       
        {items.map((item) => (
          <CheckItem key={item.id} travelItem={item} />
        ))}
      </div>
    </>
  );
};
export default Bathroom;
