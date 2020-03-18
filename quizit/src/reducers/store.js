import { combineReducers, createStore } from 'redux';
import quizes from './quizes/quizesReducer';

const rootReducer = combineReducers({ quizes });
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;