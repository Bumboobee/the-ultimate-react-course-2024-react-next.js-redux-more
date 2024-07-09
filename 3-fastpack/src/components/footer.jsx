import TravelItemContext from "../context/travelItemContext";
import { useContext } from "react";

function Stats() {
  const { stats } = useContext(TravelItemContext);

  return (
    <footer className="text-gray-800 text-center p-4">
      <div>
        {stats.quantity === 0 ? (
          <>
            <p>Não há itens na sua lista de viagem.</p>
            <p>
              <span className="bg-blue-900 text-blue-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                Recomendamos começar pelo mais básico, como itens de cuidado
                pessoal.
              </span>
            </p>
          </>
        ) : (
          <>
            <span>Você tem </span>
            <span className="bg-blue-900 text-blue-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
              {stats.quantity}
            </span>
            <span>itens na sua lista de viagem.</span>
          </>
        )}
      </div>

      {stats.percentDoneItems !== "0.00%" && (
        <>
          <span>A porcentagem de itens que já estão na mala é de: </span>
          <span className="bg-blue-900 text-blue-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
            {stats.percentDoneItems}
          </span>
        </>
      )}
    </footer>
  );
}

export default Stats;
