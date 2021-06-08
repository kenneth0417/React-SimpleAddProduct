import { createContext, useReducer } from "react";

const initialState = {
  items: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [action.payload, ...state.items] };
    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export const ItemContext = createContext(initialState);

export const ItemProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const deleteItem = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  return (
    <ItemContext.Provider value={{ items: state.items, addItem, deleteItem }}>
      {props.children}
    </ItemContext.Provider>
  );
};
