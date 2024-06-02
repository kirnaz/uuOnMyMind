import React, {createContext} from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import NotesStorage from "./notes/NotesStorage";


export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    notes: new NotesStorage()
  }}>
    <App />
  </Context.Provider>
);