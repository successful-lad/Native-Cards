import { combineReducers} from "redux";
import todos from "./todos";
import accountsList from "./accountsList";

export const getTodos = state => state.todos;

export const getAccList = state => state.accountsList;

export default combineReducers({
  todos,
  accountsList
})
