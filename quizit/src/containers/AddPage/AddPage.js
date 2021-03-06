import React, { Fragment, useState, useEffect } from 'react';
import { Input } from '../../components/CustomAnt';
import { NavLink, useHistory } from "react-router-dom";
import SubLayout from '../../components/SupLayout';
import SupTitle from '../../components/SupTitle';
import SupContent from '../../components/SupContent';
import Modal from '../../components/Modal';
import { useTextValidator, useRouteNormalizer } from '../../custom-hooks';
import useQuizActions from '../../reducers/quizes/quizesActions';
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
    const { addQuiz } = useQuizActions();

    const onQuizNameChanged = event => {
        const newQuizName = event.target.value;
        setQuizName(newQuizName)
        if (!startedWritting) {
            setStartedWritting(true)
        }
    }

    const navLinkHandler = (event) => {
        event.preventDefault();
        if (!quizNameIsValid) {
            setStartedWritting(true)
            return;
        }
        if (quizExist) {
            // TODO - switch confirm modal, to custom modal component
            const userAllowedToOverride = window.confirm('This quiz name already exist, do you want to override? You will loose all questions in previous version.')
            if (!userAllowedToOverride) {
                return;
            }
        }
        addQuiz({
            name: quizName,
            key: normalizedQuizName,
        });
        history.push(`/edit/${normalizedQuizName}`)
    }

    useEffect(() => {
        setQuizExist(existingQuiz.indexOf(normalizedQuizName) >= 0)
    }, [normalizedQuizName])

    const quizNameIssue = (!quizNameIsValid && disabled) || (quizExist && warningBtn)
    return (
        <Fragment>
            <SubLayout>
                <SupTitle>Add new quiz</SupTitle>
                <SupContent>
                    <Input placeholder="Enter quiz name" value={quizName} onChange={onQuizNameChanged} />
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
                    <NavLink
                        className={`${submitBtn} ${!quizNameIssue ? available : quizNameIssue}`}
                        to={`/edit/${normalizedQuizName}`}
                        onClick={navLinkHandler}
                    >ADD</NavLink>
                </SupContent>
            </SubLayout>
            <Modal>
                
            </Modal>
        </Fragment>
    )
}

export default AddPage;

