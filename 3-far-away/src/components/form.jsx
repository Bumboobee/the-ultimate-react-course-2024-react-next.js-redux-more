const Form = () => {
  return (
    <div className="grid gap-6 mb-6 md:grid-cols-12 pb-10">
      <div className="md:col-span-4">
        <label className="text-blue-500 text-sm uppercase font-bold">
          Novo item
        </label>
        <input
          type="text"
          className="input-no-outline bg-transparent placeholder-slate-500 text-gray-900 text-sm w-full p-2 border-b-2 border-gray-900"
          placeholder="Escova de dente"
        />
      </div>
      <div className="md:col-span-2">
        <label className="text-blue-500 text-sm uppercase font-bold">
          Quantidade
        </label>
        <input
          type="number"
          className="input-no-outline bg-transparent placeholder-slate-500 text-gray-900 text-sm w-full p-2 border-b-2 border-gray-900"
          placeholder="1"
        />
      </div>

      <div className="md:col-span-2">
        <label className="text-blue-500 text-sm uppercase font-bold">
          Categoria
        </label>

        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option selected>Escolha a categoria</option>
          <option value="OB">Obrigatório</option>
          <option value="EL">Eletrônico</option>
          <option value="RE">Remédios</option>
          <option value="GR">Guarda roupa</option>
          <option value="AC">Acessórios</option>
          <option value="BA">Banheiro</option>
        </select>
      </div>

      <div className="md:col-span-4 flex justify-end">
        <button className="bg-blue-500 text-white uppercase text-md h-10 px-4 rounded-md">
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Form;
