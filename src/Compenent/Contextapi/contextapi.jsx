import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Ashal", loggedIn: true });

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser, selectedProduct, setSelectedProduct }}>
      {children}
    </UserContext.Provider>
  );
};
