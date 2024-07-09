import CategoryTitle from "../categoryTitle";
import Message from "../message";
import CheckItem from "../checkItem";
import TravelItemContext from "../../context/travelItemContext";

import { useContext } from "react";
import { categories } from "../../data/categories";

const Eletronics = () => {
  const { travelItems } = useContext(TravelItemContext)
  const items = travelItems.filter((item) => item.category === categories.eletronics.id);
  
  return (
    <>
      <CategoryTitle icon={categories.eletronics.icon} title={categories.eletronics.category} />
      <Message code="EL" message="Certifique-se de incluir todos os itens eletrônicos necessários." />
    
      <div className="checklist">
        <hr className="mb-2"/>
       
        {items.map((item) => (
          <CheckItem key={item.id} travelItem={item} />
        ))}
      </div>
    </>
  );
};
export default Eletronics;
