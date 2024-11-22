import { createContext, useState } from "react";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blog, setBlog] = useState([]);

  var payload = { blog, setBlog };

  return (
    <BlogContext.Provider value={payload}>{children}</BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
