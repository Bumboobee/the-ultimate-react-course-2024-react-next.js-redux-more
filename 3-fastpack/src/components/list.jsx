import Eletronics from "./categories/eletronics";
import Requireds from "./categories/requireds";
import Medkit from "./categories/medkit";
import Closet from "./categories/closet";
import Accessories from "./categories/accessories";
import Bathroom from "./categories/bathroom";

const List = () => {
  return (
    <div className="grid gap-6 mb-6 md:grid-cols-12 pt-5">
      <div className="md:col-span-3 flex flex-col">
        <Requireds />
      </div>

      <div className="md:col-span-3 flex flex-col">
        <Eletronics />
        <Medkit />
      </div>

      <div className="md:col-span-3 flex flex-col">
        <Closet />
        <Accessories />
      </div>
      
      <div className="md:col-span-3 flex flex-col">
        <Bathroom />
      </div>
    </div>
  );
};

export default List;
