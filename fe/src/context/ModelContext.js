import { createContext, useEffect, useState } from "react";

const ModelContext = createContext();

const ModelProvider = ({ children }) => {
  const [modelData, setModelData] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    console.log(process.env.REACT_APP_API_URL);
    try {
      const response = await fetch(process.env.REACT_APP_API_URL);
      const data = await response.json();
      setModelData(data.record.models);
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
