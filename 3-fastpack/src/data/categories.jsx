import { Alert, Box, Fire, Focus, Moon, Thunder } from "./icons";

export const categories = {
  requireds: {
    id: "21df6236-7332-4a2d-adca-fc56a8c845b6",
    category: "Obrigatórios",
    icon: <Alert />,
  },
  eletronics : {
    id: "5ee85a26-fcd7-4a8c-a0f1-bd782f580bf1",
    category: "Eletrônicos",
    icon: <Thunder />,
  },
  medkit: {
    id: "8338e7c0-1cec-4d5d-89a9-e4a0d2b1e70b",
    category: "Remédios",
    icon: <Moon />,
  },
  closet: {
    id: "7b0f743f-858c-41fc-973a-271ae1f3b796",
    category: "Guarda Roupa",
    icon: <Box />,
  },
  accessories: {
    id: "df7c47de-2f85-4c96-bed2-1f87fb190ddf",
    category: "Acessórios",
    icon: <Focus />,
  },
  bathroom: {
    id: "a3ab1d07-f290-45ee-912d-d1fce951e5a2",
    category: "Banheiro",
    icon: <Fire />,
  },
};
