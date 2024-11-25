import { createContext, useState } from "react";

const LoaderContext = createContext();

const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  var payload = { isLoading, setIsLoading };

  return (
    <LoaderContext.Provider value={payload}>{children}</LoaderContext.Provider>
  );
};

export { LoaderContext, LoaderProvider };
