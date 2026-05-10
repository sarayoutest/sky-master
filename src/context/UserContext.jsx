import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem("confirmationData");
    try {
      return saved ? JSON.parse(saved) : {
        name: "",
        phone: "",
        email: "",
        deliveryMethod: "delivery",
        country: "",
        city: "",
        region: "",
        street: "",
        building: "",
        detailedAddress: "",
      };
    } catch (e) {
      return {
        name: "", phone: "", email: "", deliveryMethod: "delivery",
        country: "", city: "", region: "", street: "", building: "", detailedAddress: ""
      };
    }
  });

  useEffect(() => {
    localStorage.setItem("confirmationData", JSON.stringify(userData));
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);