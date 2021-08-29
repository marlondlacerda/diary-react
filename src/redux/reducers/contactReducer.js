import ADD_CONTACT from '../action/actionTypes';

const INITIAL_STATE = [];

const contactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default contactReducer;
