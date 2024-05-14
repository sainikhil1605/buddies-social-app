import { createContext, useEffect, useState } from "react";
import users from "../constants/data";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppContext = createContext({
  theme: "light",
  authenticate: (token: string) => {},
  isLogged: false,

});
const AppProvider = ({ value, children }: { value: any; children: any }) => {
  const [userData, setUserData] = useState(users);
  const [isLogged, setIsLogged] = useState(false);
  const [token,setToken]=useState("");
  const authenticate = (token: string) => {
    if (token) {
      AsyncStorage.setItem("token", token);
      setIsLogged(true);
    }
  };
  useEffect(() => {
    AsyncStorage.getItem("token").then((token) => {
      if (token) {
        setIsLogged(true);
      }
    });
  }, []);
  return (
    <AppContext.Provider
      value={{
        ...value,
        userData,
        setUserData,
        isLogged,
        setIsLogged,
        authenticate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
