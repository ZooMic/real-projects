import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({ todo: () => ({}) });
const store = createStore(rootReducer);
export default store;