import { createContext } from "react";
import Card from "./Card";

export const Context = createContext();

function Body() {
  return (
    <Context.Provider value={10}>
      <Card />
    </Context.Provider>
  );
}

export default Body;
