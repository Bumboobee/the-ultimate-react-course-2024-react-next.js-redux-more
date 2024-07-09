import { useContext } from "react";

import PropTypes from "prop-types";
import TravelItemContext from "../context/travelItemContext";

const CheckItem = ({ travelItem }) => {
  const { handleCheckItem, deleteItem } = useContext(TravelItemContext);

  return (
    <div className="relative flex items-top pb-4 mb-4 gap-2 justify-between border-b  border-gray-100">
      <div className="flex items-center ">
        <input
          id={`checkbox-${travelItem.id}`}
          type="checkbox"
          value=""
          checked={travelItem.checked}
          className="w-4 h-4 text-blue-600 bg-transparent rounded focus:ring-0 flex-shrink-0"
          onChange={() => handleCheckItem(travelItem.id)}
        />
        <label
          htmlFor={`checkbox-${travelItem.id}`}
          className={`ms-2 text-sm text-slate-600 mr-15 break-all ${
            travelItem.checked ? "line-through italic text-gray-300" : ""
          }`}
        >
          {travelItem.item}
        </label>
      </div>

      <div className="flex flex-col gap-3 items-end justify-between">
        <span
          className=" bg-red-700 text-red-300 text-xs font-medium px-0.5 py-0.5 rounded w-7 text-center hover:bg-red-900 hover:text-red-100 transition duration-150 ease-out hover:ease-in cursor-pointer"
          onClick={() => deleteItem(travelItem.id)}
        >
          X
        </span>

        <span className="bg-blue-200 text-blue-900 text-xs font-semibold px-0.5 py-0.5 rounded w-7 text-center">
          {travelItem.quantity}
        </span>
      </div>
    </div>
  );
};

CheckItem.propTypes = {
  travelItem: PropTypes.object.isRequired,
};

export default CheckItem;
