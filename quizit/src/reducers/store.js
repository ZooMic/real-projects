import { combineReducers, createStore } from 'redux';
import quizes from './quizesReducer';

const rootReducer = combineReducers({ quizes });
const store = createStore(rootReducer);
export default store;