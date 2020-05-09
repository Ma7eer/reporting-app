import * as React from "react";

const ImageContext = React.createContext();

export const ImageProvider = ({ children }) => {
  /* This allows us to change context from our tag component */
  const [imageUrl, setImageUrl] = React.useState("");

  return (
    <ImageContext.Provider value={{ imageUrl, setImageUrl }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageContext;
