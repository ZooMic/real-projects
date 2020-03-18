/**
 quizes: [{
  name: 'Awsome Quiz Name',
  key: 'awesome-quiz-name',
  questions: [{
      id: 1,
      text: 'Some question 1',
      correct: true,
      current: {
          drawer: 1,
          answer: null
      }
  }],
 }]
 */

 /**
  * {
    question: 'Do SOR zgłosił się 35-letni chory o masie 70kg po obustronnej nefrektomii, z towarzyszącą od kilku godzin gorączką do 38 stopni C. Pacjent oddał jeden uformowany stolec. Jeśli w obliczeniach pominiemy wodę metaboliczną (oksydacyjną) - ile chory powinien otrzymać płynów, aby uzyskać „zerowy” bilans płynów.',
    answers: [
        { text: '100 ml', correct: false },
        { text: 'braku możliwości stosowania skutecznej antykoncepcji u kobiet', correct: true },
    ]
}
  */

const defaultState = {
    quizes: [],
    currentQuiz: null,
}

export const ADD_QUIZ = 'ADD_QUIZ';
export default (state = defaultState, action) => {
    switch (action.type) {
        case ADD_QUIZ: return addQuiz(action.quiz, state);
        default: return state;
    }
}

const addQuiz = ({ name, key }, prevState) => {
    const state = { ...prevState };
    const newQuiz = { name, key, questions: [] };
    const index = state.quizes.indexOf(quiz => quiz.key === key);

    if (index >= 0) {
        state.quizes = [...state.quizes][index] = newQuiz;
    } else {
        state.quizes = [...state.quizes, newQuiz];
    }

    return state;
}