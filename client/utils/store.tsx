import { createContext, useState } from "react";
import users from "../constants/data";

const AppContext = createContext({
  theme: "light",
});

const AppProvider = ({ value, children }) => {
  const [userData, setUserData] = useState(users);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <AppContext.Provider
      value={{
        ...value,
        userData,
        setUserData,
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
