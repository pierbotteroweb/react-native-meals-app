// src/context/FirebaseContext.js
import React, { createContext, useContext, useReducer } from "react";

// Create Context
const FirebaseContext = createContext();

// Initial state
const initialState = {
  items: [],
  filteredItems: [], // Armazena os itens filtrados
  loading: false,
  filterCompleted: null, // Define qual filtro está ativo
  error: null,
};

// Reducer function
const firebaseReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_ITEMS_SUCCESS":
      return { 
        ...state, 
        loading: false, 
        items: action.payload, 
        filteredItems: action.payload // Inicialmente, mostra todos os itens
      };

    case "FILTER_ITEMS":
      return { 
        ...state, 
        filterCompleted: action.payload, 
        filteredItems: state.items.filter(item => item.concluida === action.payload) 
      };

    case "REMOVE_FILTER_ITEMS":
      return { 
        ...state, 
        filterCompleted: null, 
        filteredItems: state.items // Retorna a lista completa
      };

    default:
      return state;
  }
};

// FirebaseContext Provider component
export const FirebaseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  return (
    <FirebaseContext.Provider value={{ state, dispatch }}>
      {children}
    </FirebaseContext.Provider>
  );
};

// Custom hook to use Firebase context
export const useFirebase = () => useContext(FirebaseContext);
