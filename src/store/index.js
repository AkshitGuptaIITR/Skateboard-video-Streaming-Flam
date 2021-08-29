import { createStore } from "redux";

const initialState = { selectionIndex: 0 };

const reducer = (state = initialState, action) => {
  if (action.type === 'selectionChange') {
    return {
      selectionIndex: action.index
    }
  }
  return state;
}

const store = createStore(reducer);

export default store;