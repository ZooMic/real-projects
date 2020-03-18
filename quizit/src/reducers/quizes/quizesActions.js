import { useDispatch } from 'react-redux';
import { ADD_QUIZ } from './quizesReducer';

export default () => {
    const dispatch = useDispatch();
    
    const addQuiz = quiz => {
        dispatch({
            quiz,
            type: ADD_QUIZ,
            questions: [],
        });
    }

    return {
        addQuiz,
    }
}
