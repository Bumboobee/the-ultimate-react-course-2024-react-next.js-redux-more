import Message from "../components/message";
import { Alert, Box, Focus, Moon, Fire, Thunder } from "../data/icons";

const List = () => {
  return (
    <div className="grid gap-6 mb-6 md:grid-cols-12 pt-5">
      <div className="md:col-span-3 flex flex-col">
        <label className="text-blue-500 text-sm uppercase font-bold py-2 flex">
          <Alert />
          Obrigatório
        </label>

        <Message code="OB" message="Esta categoria contém itens obrigatórios que devem ser verificados e incluídos." />

        <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-6 h-6 bg-transparent border text-blue-600 bg-gray-100 border-gray-500 rounded focus:ring-blue-500" />
            <label htmlFor="default-checkbox" className="ms-2 text-md text-gray-900">Default checkbox nbasjhjashdad sbdasnbdasd</label>
        </div>
      </div>
      <div className="md:col-span-3 flex flex-col">
        <label className="text-blue-500 text-sm uppercase font-bold py-2 flex">
          <Thunder />
          Eletrônico
        </label>

        <Message code="EL" message="Certifique-se de incluir todos os itens eletrônicos necessários." />

        <label className="text-blue-500 text-sm uppercase font-bold py-2 flex">
          <Moon />
          Remédios
        </label>

        <Message code="RE" message="Não se esqueça de verificar e adicionar todos os remédios necessários." />
      </div>
      <div className="md:col-span-3 flex flex-col">
        <label className="text-blue-500 text-sm uppercase font-bold py-2 flex">
          <Box />
          Guarda roupa
        </label>

        <Message code="GR" message="Verifique se todos os itens de vestuário foram adicionados." />

        <label className="text-blue-500 text-sm uppercase font-bold py-2 flex">
          <Focus />
          Acessórios
        </label>

        <Message code="AC" message="Inclua todos os acessórios essenciais." />
      </div>
      <div className="md:col-span-3 flex flex-col">
        <label className="text-blue-500 text-sm uppercase font-bold py-2 flex">
          <Fire />
          Banheiro
        </label>

        <Message
            code="BA"
          message="Não se esqueça de incluir todos os itens necessários para o
            banheiro."
        />
      </div>
    </div>
  );
};

export default List;
