import { createContext, useState } from "react";
import { postData } from "../constants/data";

const AppContext = createContext({
  theme: "light",
});

const AppProvider = ({ value, children }) => {
  const [posts, setPosts] = useState(postData);
  return (
    <AppContext.Provider
      value={{
        ...value,
        posts,
        setPosts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
