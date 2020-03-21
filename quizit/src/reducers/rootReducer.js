import { combineReducers } from 'redux';
import quizes from './quizes/quizesReducer';

const rootReducer = combineReducers({ quizes });

export default rootReducer;