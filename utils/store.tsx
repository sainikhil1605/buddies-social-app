import { createContext, useState } from "react";
import users from "../constants/data";

const AppContext = createContext({
  theme: "light",
});

const AppProvider = ({ value, children }) => {
  const [userData, setUserData] = useState(users);

  return (
    <AppContext.Provider
      value={{
        ...value,
        userData,
        setUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
