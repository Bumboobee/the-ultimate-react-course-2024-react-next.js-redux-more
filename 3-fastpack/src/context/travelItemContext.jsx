import {
  createContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";

import uuid4 from "uuid4";
import PropTypes from "prop-types";

const localStorageName = "travelItems";
const TravelItemContext = createContext();

export const TravelItemProvider = ({ children }) => {
  const [travelItems, setTravelItems] = useState([{}]);
  const [formData, setFormData] = useState({
    item: "",
    quantity: 1,
    category: "DEFAULT",
  });
  const [errors, setErrors] = useState({
    item: "",
    category: "",
    quantity: 1,
  });
  const [stats, setStats] = useState({
    quantity: 0,
    percentDoneItems: "0.00%",
  });
  const [cookiesAllowed, setCookiesAllowed] = useState(false);
  const [cookiesDecline, setCookiesDecline] = useState(false);

  const getStats = useCallback((travelItems) => {
    const quantity = travelItems.length;
    const doneItems = travelItems.filter((item) => item.checked === true);

    if (quantity === 0) {
      setStats({
        quantity: 0,
        percentDoneItems: "0.00%",
      });
      return;
    }

    const percentDoneItems = (doneItems.length / quantity) * 100;

    setStats({
      quantity,
      percentDoneItems: `${percentDoneItems.toFixed(2)}%`,
    });
  }, []);

  const getLocalStorageItem = useCallback(() => {
    const travelItems =
      JSON.parse(localStorage.getItem(localStorageName)) || [];
    setTravelItems(travelItems);

    getStats(travelItems);
  }, [getStats]);

  useEffect(() => {
    getLocalStorageItem();
  }, [getLocalStorageItem]);

  useEffect(() => {
    getStats(travelItems);
  }, [travelItems, getStats]);

  useEffect(() => {
    const permissionCookie = localStorage.getItem("cookiesAllowed");

    if (permissionCookie) {
      setCookiesAllowed(permissionCookie);
    }
  }, []);

  const handleErrors = useCallback(() => {
    let formIsValid = true;

    if (formData.item === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        item: "Este campo é obrigatório.",
      }));
      formIsValid = false;
    }

    if (formData.category === "DEFAULT") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        category: "Escolha uma categoria.",
      }));
      formIsValid = false;
    }

    if (Math.sign(formData.quantity) !== 1) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        quantity: "A quantidade deve ser 1 ou mais.",
      }));
      formIsValid = false;
    } else {
      if (formData.quantity > 999) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          quantity: "A quantidade máxima é 999 para todos os itens.",
        }));
        formIsValid = false;
      }
    }

    return formIsValid;
  }, [formData]);

  const setLocalStorageItem = (newItem) => {
    const travelItems =
      JSON.parse(localStorage.getItem(localStorageName)) || [];

    if (travelItems.length === 0) {
      localStorage.setItem(localStorageName, JSON.stringify([newItem]));
      return;
    } else {
      localStorage.setItem(
        localStorageName,
        JSON.stringify([...travelItems, newItem])
      );
    }
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const formIsValid = handleErrors();

      if (!formIsValid) {
        return;
      }

      const newItem = {
        id: uuid4(),
        item: formData.item,
        quantity: formData.quantity,
        checked: false,
        category: formData.category,
      };

      setLocalStorageItem(newItem);

      getLocalStorageItem();

      setFormData({
        item: "",
        quantity: 1,
        category: "DEFAULT",
      });
    },
    [formData, handleErrors, getLocalStorageItem]
  );

  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    },
    [errors]
  );

  const handleCheckItem = useCallback((itemId) => {
    setTravelItems((prevItems) => {
      let updatedItems = prevItems.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      );

      updatedItems = updatedItems.sort((a, b) => {
        if (a.checked === b.checked) {
          return 0;
        } else {
          return a.checked ? 1 : -1;
        }
      });

      localStorage.setItem(localStorageName, JSON.stringify(updatedItems));

      return updatedItems;
    });
  }, []);

  const deleteItem = useCallback((itemId) => {
    setTravelItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== itemId);

      console.log(updatedItems);

      localStorage.setItem(localStorageName, JSON.stringify(updatedItems));

      return updatedItems;
    });
  }, []);

  const handleCookiesPermission = useCallback((allowed) => {
    if (allowed) {
      setCookiesAllowed(true);

      localStorage.setItem("cookiesAllowed", true);

      return;
    }

    setCookiesDecline(true);
  }, []);

  const value = useMemo(() => {
    return {
      formData,
      errors,
      travelItems,
      stats,
      cookiesAllowed,
      cookiesDecline,
      handleSubmit,
      handleInputChange,
      handleCheckItem,
      deleteItem,
      handleCookiesPermission,
    };
  }, [
    formData,
    errors,
    travelItems,
    stats,
    cookiesAllowed,
    cookiesDecline,
    handleSubmit,
    handleInputChange,
    handleCheckItem,
    deleteItem,
    handleCookiesPermission,
  ]);

  return (
    <TravelItemContext.Provider value={value}>
      {children}
    </TravelItemContext.Provider>
  );
};

TravelItemProvider.propTypes = {
  children: PropTypes.node,
};

export default TravelItemContext;
