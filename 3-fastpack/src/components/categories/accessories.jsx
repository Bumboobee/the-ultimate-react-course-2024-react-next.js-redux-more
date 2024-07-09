import CategoryTitle from "../categoryTitle";
import Message from "../message"; 
import CheckItem from "../checkItem";
import TravelItemContext from "../../context/travelItemContext";

import { useContext } from "react";
import { categories } from "../../data/categories";

const Accessories = () => {
  const { travelItems } = useContext(TravelItemContext)
  const items = travelItems.filter((item) => item.category === categories.accessories.id);

  return (
    <>
      <CategoryTitle icon={categories.accessories.icon} title={categories.accessories.category} />
      <Message code="AC" message="Inclua todos os acessórios essenciais." />
    
      <div className="checklist">
        <hr className="mb-2"/>
       
        {items.map((item) => (
          <CheckItem key={item.id} travelItem={item} />
        ))}
      </div>
    </>
  );
};
export default Accessories;
