import ADD_CONTACT from './actionTypes';

const actionAdd = (payload) => ({
  type: ADD_CONTACT,
  payload,
});
console.log(actionAdd);
export default actionAdd;
