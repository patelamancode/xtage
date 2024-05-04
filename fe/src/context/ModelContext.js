import { createContext, useEffect, useState } from "react";

const ModelContext = createContext();

const ModelProvider = ({ children }) => {
  const [modelData, setModelData] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/models");
      const data = await response.json();
      setModelData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ModelContext.Provider value={{ modelData, loading }}>
      {children}
    </ModelContext.Provider>
  );
};

export { ModelContext, ModelProvider };
