import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import SubLayout from '../../components/SupLayout/';
import { useTextValidator, useRouteNormalizer } from '../../custom-hooks/';
import { wrapper, form, title, error, submitBtn, warning, asterixMessage, available, disabled, warningBtn } from './AddPage.module.css';

// TODO - remove mock, handle real quiz list from redux state
const existingQuiz = ['quiz-1', 'quiz-2']

const AddPage = () => {
    const [startedWritting, setStartedWritting] = useState(false)
    const [quizName, setQuizName] = useState('');
    const [quizExist, setQuizExist] = useState(false)
    const quizNameIsValid = useTextValidator(quizName, /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/)
    const normalizedQuizName = useRouteNormalizer(quizName)

    const onQuizNameChanged = event => {
        const newQuizName = event.target.value;
        setQuizName(newQuizName)
        if (!startedWritting) {
            setStartedWritting(true)
        }
    }

    useEffect(() => {
        setQuizExist(existingQuiz.indexOf(normalizedQuizName) >= 0)
    }, [normalizedQuizName])

    const quizNameIssue = (!quizNameIsValid && disabled) || (quizExist && warningBtn)
    return (
        <SubLayout className={wrapper}>
            <div className={title}><span>Add new quiz</span></div>
            <div className={form}>
                <label htmlFor="quiz-name">How would you like to name it?</label>
                <input type="text" name="quiz-name" id="quiz-name" value={quizName} onChange={onQuizNameChanged} />
                {quizExist ? 
                    <div className={`${asterixMessage} ${warning}`}>
                        <span>*</span>
                        This quiz name already exist, if you go further it will override existing one.
                    </div> : null}
                {!quizNameIsValid && startedWritting ?
                    <div className={`${asterixMessage} ${error}`}>
                        <span>*</span>
                        You can only use letters, numbers and space. Other signs are not allowed!
                    </div> : null}
                <NavLink className={`${submitBtn} ${!quizNameIssue ? available : quizNameIssue}`} to={`/edit/${normalizedQuizName}`}>Add some questions</NavLink>
            </div>
        </SubLayout>
    )
}

export default AddPage;

            // {/* input question */}
            // {/* input answer 1* [checkbox for correct answer]*/}
            // {/* input add new answer, on focus another below appears */}
            // {/* SUBBMIT ADD/SAVE ETC.*/}
            // /**
            //  *          <div className="added-section">
            //             <div>id, question..., [REMOVE] [EDIT]</div>
            //             </div>
            //  */