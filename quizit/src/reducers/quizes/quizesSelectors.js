import { useSelector } from "react-redux";

export const useQuizSelector = quizKey => useSelector(({ quizes }) => quizes.quizes.find(({ key }) => key === quizKey ) || {})