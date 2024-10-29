import { createContext, useContext, useState } from "react";

export const UpdateStorageContext = createContext(null);

export const UpdateStorageProvider = ({ children }) => {
  const [updateStorage, setUpdateStorage] = useState({});

  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      {children}
    </UpdateStorageContext.Provider>
  );
};

export const useUpdateStorageContext = () => {
  const context = useContext(UpdateStorageContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }

  return context;
};
