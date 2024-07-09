import { useContext } from "react";
import { Add } from "../data/icons";
import { categories } from "./../data/categories";

import TravelItemContext from "../context/travelItemContext";

const Form = () => {
  const { formData, errors, handleSubmit, handleInputChange } =
    useContext(TravelItemContext);

  return (
    <>
      <form className="grid gap-6 mb-6 md:grid-cols-12 pb-10">
        <div className="md:col-span-4">
          <label className="text-blue-700 text-sm font-semibold">
            Novo item <span className="text-red-600">*</span>
          </label>
          <input
            maxLength={60}
            required
            name="item"
            type="text"
            value={formData.item}
            onChange={handleInputChange}
            placeholder="Escova de dente"
            className="input-no-outline bg-transparent placeholder-gray-400 text-gray-900 text-sm w-full p-0 py-2 border-b focus:ring-0 ring-0 border-t-transparent border-r-transparent border-l-transparent border-gray-300"
          />
          {errors.item != "" ? (
            <span className="text-red-500 text-xs">{errors.item}</span>
          ) : (
            ""
          )}
        </div>
        <div className="md:col-span-2">
          <label className="text-blue-700 text-sm font-semibold">
            Quantidade <span className="text-red-600">*</span>
          </label>
          <input
            required
            name="quantity"
            type="number"
            min={1}
            max={999}
            maxLength={3}
            value={formData.quantity}
            onChange={handleInputChange}
            placeholder={formData.quantity}
            className="input-no-outline bg-transparent placeholder-gray-400 text-gray-900 text-sm w-full p-0 py-2 border-b  focus:ring-0 ring-0 border-t-transparent border-r-transparent border-l-transparent border-gray-300"
          />
          {errors.quantity != 1 ? (
            <span className="text-red-500 text-xs">{errors.quantity}</span>
          ) : (
            ""
          )}
        </div>

        <div className="md:col-span-2">
          <label className="text-blue-700 text-sm font-semibold">
            Categoria <span className="text-red-600">*</span>
          </label>

          <select
            required
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2"
          >
            <option value="DEFAULT" disabled>
              Escolha a categoria
            </option>

            {Object.entries(categories).map(([key, value]) => (
              <option key={value.id} value={value.id}>
                {value.category}
              </option>
            ))}
          </select>

          {errors.category && (
            <span className="text-red-500 text-xs">{errors.category}</span>
          )}
        </div>

        <div className="md:col-span-4 flex justify-end">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-900 text-blue-300 hover:bg-blue-300 hover:text-blue-900 transition duration-150 ease-out hover:ease-in text-md h-10 px-2 rounded-md flex gap-2 justify-center items-center outline-none active:outline-none focus:outline-none"
          >
            <Add /> Adicionar
          </button>
        </div>
      </form>

      <hr className="border-gray-200" />
    </>
  );
};

export default Form;
