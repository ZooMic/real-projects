import React, { useState, useEffect } from 'react'
import { NavLink, useHistory } from "react-router-dom";
import SubLayout from '../../components/SupLayout/';
import SupTitle from '../../components/SupTitle/';
import SupContent from '../../components/SupContent/';
import { useTextValidator, useRouteNormalizer } from '../../custom-hooks/';
import { error, submitBtn, warning, asterixMessage, available, disabled, warningBtn } from './AddPage.module.css';

// TODO - remove mock, handle real quiz list from redux state
const existingQuiz = ['quiz-1', 'quiz-2']

const AddPage = () => {
    const [startedWritting, setStartedWritting] = useState(false)
    const [quizName, setQuizName] = useState('');
    const [quizExist, setQuizExist] = useState(false)
    const quizNameIsValid = useTextValidator(quizName, [/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/, /^\S+(?: \S+)*$/])
    const normalizedQuizName = useRouteNormalizer(quizName)
    const history = useHistory();

    const onQuizNameChanged = event => {
        const newQuizName = event.target.value;
        setQuizName(newQuizName)
        if (!startedWritting) {
            setStartedWritting(true)
        }
    }

    const navLinkHandler = (event) => {
        if (!quizNameIsValid) {
            event.preventDefault();
            setStartedWritting(true)
            return
        }
        if (quizExist) {
            event.preventDefault();
            // TODO - add modal with question, if result possitive trigger bellow
            history.push(`/edit/${normalizedQuizName}`)
        }
    }

    useEffect(() => {
        setQuizExist(existingQuiz.indexOf(normalizedQuizName) >= 0)
    }, [normalizedQuizName])

    const quizNameIssue = (!quizNameIsValid && disabled) || (quizExist && warningBtn)
    return (
        <SubLayout>
            <SupTitle>Add new quiz</SupTitle>
            <SupContent>
                <label htmlFor="quiz-name">How would you like to name it?</label>
                <input type="text" name="quiz-name" id="quiz-name" value={quizName} onChange={onQuizNameChanged} placeholder="Example quiz name 1"/>
                {quizExist ? 
                    <div className={`${asterixMessage} ${warning}`}>
                        <span>*</span>
                        This quiz name already exist, if you go further it will override existing one.
                    </div> : null}
                {!quizNameIsValid && startedWritting ?
                    <div className={`${asterixMessage} ${error}`}>
                        <span>*</span>
                        You can only use letters, numbers and space. Other signs are not allowed!
                        Also, quiz name can not starts or ends with space, or have two or more spaces in the row.
                    </div> : null}
                <NavLink className={`${submitBtn} ${!quizNameIssue ? available : quizNameIssue}`} to={`/edit/${normalizedQuizName}`} onClick={navLinkHandler}>Add some questions</NavLink>
            </SupContent>
        </SubLayout>
    )
}

export default AddPage;